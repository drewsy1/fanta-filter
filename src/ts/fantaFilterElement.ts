import { FantaFilter, FantaFilterElement, Options, AttributeNames, ClassNames, Dependencies } from 'Interfaces';
import {TypeTests, DOM} from './lib/util/index';

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
    const { defaultOptions } = dependencies;
    let options: Options = Object.assign(defaultOptions, userOptions);

    if (TypeTests.isNodeList(targets)) {
        return [].slice
            .call(Array.from(targets))
            .map((element: HTMLElement) => createFantaFilterElement(dependencies, element, parentFilter, userOptions))
            .filter((x: HTMLElement) => x);
    }

    const { name } = parentFilter;
    let element: HTMLElement = targets;
    const attrDefault: AttributeNames = options.attributeNames;
    const attrElement = DOM.convertAttributesToObject(element.attributes, options);
    const elementAttributes = Object.assign(attrDefault, attrElement);

    let newFantaFilterElement = protoFantaFilterElement(element, name);
    newFantaFilterElement = Object.assign(newFantaFilterElement, elementAttributes);

    return newFantaFilterElement;
}

/**
 * Creates a prototype object to be processed by the createFantaFilterElement factory function
 *
 * @param {HTMLElement} element Element from which a FantaFilterElement will be created
 * @param {string} groupName Name of element's filter group
 * @returns {FantaFilterElement} A prototype FantaFilterElement
 */
const protoFantaFilterElement = (element: HTMLElement, groupName: string): FantaFilterElement => ({
    groupName,
    element,
    set hidden(isHidden: boolean) {
        element.hidden = isHidden;
    },
    get hidden() {
        return element.hidden;
    },
});
