import { FantaFilter, FantaFilterElement, FantaFilterInput, Options, AttributeNames, ClassNames, Dependencies } from 'Interfaces';
import { TypeTests, DOM } from './lib/util/index';

/**
 * Factory method that creates and returns an object from protoFantaFilterElement
 *
 * @export
 * @param {Dependencies} dependencies Variables passed in from higher context
 * @param {(HTMLElement | HTMLCollection | NodeList)} targets HTML element(s) from which FantaFilterElement(s) should be created
 * @param {FantaFilter} parentFilter FantaFilter object containing this element
 * @param {Options} [userOptions={}] Optional user override options
 * @returns A FantaFilterElement object
 */
export default function createFantaFilterElement(
    dependencies: Dependencies,
    targets: HTMLElement | HTMLCollection | NodeList,
    parentFilter: FantaFilter,
    userOptions: Options = {},
) {
    // if targets is actually a collection of elements, recursively call this function on each of its elements
    if (TypeTests.isNodeList(targets)) {
        return [].slice
            .call(Array.from(targets))
            .map((element: HTMLElement) => createFantaFilterElement(dependencies, element, parentFilter, userOptions))
            .filter((x: HTMLElement) => x);
    }

    const { defaultOptions } = dependencies;
    const { name } = parentFilter;
    const options = Object.assign(defaultOptions, userOptions);
    const elementAttributes = Object.assign(
        options.attributeNames,
        DOM.convertAttributesToObject(targets.attributes, options),
    );

    let newFantaFilterElement = protoFantaFilterElement(targets, name, options);

    let output = newFantaFilterElement.isInput
        ? Object.assign(newFantaFilterElement, protoFantaFilterInput(newFantaFilterElement), elementAttributes)
        : Object.assign(newFantaFilterElement, elementAttributes);

    return output;
}

/**
 * @description Creates a prototype object to be processed by the createFantaFilterElement factory function
 * @param {HTMLElement} element Element from which a FantaFilterElement will be created
 * @param {string} groupName Name of element's filter group
 * @param {Options} options Options object containing CSS class names
 * @returns {FantaFilterElement} A prototype FantaFilterElement
 */
const protoFantaFilterElement = (
    element: HTMLElement,
    groupName: string,
    options: Options,
): FantaFilterElement => ({
    groupName,
    element,
    set hidden(isHidden: boolean) {
        element.classList.toggle(options.classNames.hidden, isHidden);
    },
    get hidden() {
        return element.classList.contains(options.classNames.hidden);
    },
    get tagName() {
        return element.tagName;
    },
    get isInput() {
        return options.inputTypes.map(item => item.toUpperCase()).includes(element.tagName);
    },
});

/**
 * @description Creates a FantaFilterInput prototype from a FantaFilterElement
 * @param {FantaFilterElement} fantaFilterElement FantaFilterElement from which to create a FantaFilterInput
 * @returns An object that can be merged with a FantaFilterElement to create a FantaFilterInput
 */
const protoFantaFilterInput = (fantaFilterElement: FantaFilterElement) => ({
    get type() {
        return fantaFilterElement.element.getAttribute('type');
    },
});
