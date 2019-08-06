import { FantaFilterWrapper, FantaFilterElement, FantaFilterInput, Options, Dependencies } from 'Interfaces';
import { isNodeList, convertAttributesToObject } from 'Util';

/**
 * @description Creates a prototype object to be processed by the createFantaFilterElement factory function
 * 
 * @param {HTMLElement} element Element from which a FantaFilterElement will be created
 * @param {string} groupName Name of element's filter group
 * @param {Options} options Options object containing CSS class names
 * @returns {FantaFilterElement} A prototype FantaFilterElement
 */
const protoFantaFilterElement = (element: HTMLElement, groupName: string, options: Options): FantaFilterElement => ({
    groupName,
    element,
    tagName: element.tagName,
    set hidden(isHidden: boolean) {
        element.classList.toggle(options.classNames.hidden, isHidden);
    },
    get hidden() {
        return element.classList.contains(options.classNames.hidden);
    },
    get isInput() {
        return options.inputTypes.map(item => item.toUpperCase()).includes(element.tagName);
    },
});

/**
 * @description Creates a FantaFilterInput prototype from a FantaFilterElement
 * 
 * @param {FantaFilterElement} fantaFilterElement FantaFilterElement from which to create a FantaFilterInput
 * @param {Options} options Options passed from higher above
 * @returns An object that can be merged with a FantaFilterElement to create a FantaFilterInput
 */
const protoFantaFilterInput = (fantaFilterElement: FantaFilterElement, options: Options): FantaFilterInput => {
    let protoFantaFilterInputData = {
        type: fantaFilterElement.element.getAttribute('type'),
        selector: fantaFilterElement.element.getAttribute(options.attributeNames.selector),
        comparer: fantaFilterElement.element.getAttribute(options.attributeNames.comparer),
    };
    return Object.assign(fantaFilterElement, protoFantaFilterInputData);
};

/**
 * @description Factory function that adds an update event handler to a FantaFilterInput and its HTML element
 * 
 * @param {FantaFilterInput} fantaFilterInput FantaFilterInput to be modified
 * @param {string} triggerEvent Name of event to be triggered
 * @param {CustomEvent} updateEvent Callback function of event to be triggered
 * @returns A FantaFilterInput with an event handler to handle changes
 */
const addUpdateEvent = (fantaFilterInput: FantaFilterInput, triggerEvent: string, updateEvent: CustomEvent) => {
    fantaFilterInput.element.addEventListener(triggerEvent, e => e.target.dispatchEvent(updateEvent));
    fantaFilterInput.updateEvent = updateEvent;
    return fantaFilterInput;
};

/**
 * @description Factory method that creates and returns an object from protoFantaFilterElement
 * 
 * @export
 * @param {Dependencies} dependencies Variables passed in from higher context
 * @param {(HTMLElement | HTMLCollection | NodeList)} targets HTML element(s) from which FantaFilterElement(s) should be created
 * @param {FantaFilterWrapper} parentFilter FantaFilterWrapper object containing this element
 * @param {Options} [userOptions={}] Optional user override options
 * @returns A FantaFilterElement object
 */
export default function createFantaFilterElement(
    dependencies: Dependencies,
    targets: HTMLElement | HTMLCollection | NodeList,
    parentFilter: FantaFilterWrapper,
    userOptions: Options = {},
) {
    // if targets is actually a collection of elements, recursively call this function on each of its elements
    if (isNodeList(targets)) {
        return [].slice
            .call(Array.from(targets))
            .map((element: HTMLElement) => createFantaFilterElement(dependencies, element, parentFilter, userOptions))
            .filter((x: HTMLElement) => x);
    }

    const { defaultOptions } = dependencies;
    let customEvent = dependencies.window !== undefined ? dependencies.window.CustomEvent : CustomEvent;
    const { name } = parentFilter;
    const options = Object.assign(defaultOptions, userOptions);
    const elementAttributes = Object.assign(
        options.attributeNames,
        convertAttributesToObject(targets.attributes, options),
    );

    let newFantaFilterElement = protoFantaFilterElement(targets, name, options);

    let output;
    if (newFantaFilterElement.isInput) {
        let newFantaFilterInput = protoFantaFilterInput(newFantaFilterElement, options);
        let updateEvent = new customEvent(`fafi.filter.${newFantaFilterInput.groupName}.update`, {
            bubbles: true,
            detail: {
                sender: newFantaFilterInput,
                value: () => (newFantaFilterInput.element as HTMLInputElement).value,
            },
        });

        newFantaFilterElement = addUpdateEvent(newFantaFilterInput, 'input', updateEvent);
    }

    output = Object.assign(newFantaFilterElement, elementAttributes);

    return output;
}
