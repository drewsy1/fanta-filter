import { FantaFilterWrapper, Options, FantaFilterElement, Dependencies } from 'Interfaces';
import { isNodeList } from 'Util';

// Variable to store all FantaFilters instances
const CurrentFilters: FantaFilterWrapper[] = [];

/**
 * @description Creates a prototype object to be processed by the createFantaFilter factory function
 *
 * @param {HTMLElement} parentNode HTML element parent of filterable elements
 * @param {Options} options Options to control the filter object
 * @param {string} name Name of filter
 * @param {FantaFilterElement[]} [inputs] HTML input elements that control filtering
 * @param {FantaFilterElement[]} [items] HTML elements to be filtered
 * @returns A FantaFilterWrapper object
 */
const protoFantaFilterWrapper = (
    parentNode: HTMLElement,
    options: Options,
    name: string,
    filterGroup?: any,
    inputs?: FantaFilterElement[],
    items?: FantaFilterElement[],
): FantaFilterWrapper => ({
    parentNode,
    options,
    name,
    inputs,
    items,
    filterGroup,
    get CurrentFilters() {
        return CurrentFilters;
    },
    get hasInputs() {
        return inputs !== null;
    },
    get hasItems() {
        return items !== null;
    },
});

/**
 * @description Factory method that creates and returns an object from protoFantaFilterWrapper
 *
 * @export
 * @param {Dependencies} dependencies Variables passed in from higher context
 * @param {(HTMLElement | string)} target String selector representing an HTML object, or the object itself
 * @param {Options} [userOptions={}] Optional user override options
 * @param {FantaFilterWrapper[]} fantaFilterCollector Optional variable to store all current instances of fantaFilter. Defaults to CurrentFilters
 * @returns A completed FantaFilterWrapper object
 */
export default function createFantaFilterWrapper(
    dependencies: Dependencies,
    target: HTMLElement | string,
    userOptions: Options = {},
    fantaFilterCollector: FantaFilterWrapper[] = CurrentFilters,
): FantaFilterWrapper {
    const { configure, context, defaultOptions, createFantaFilterElement } = dependencies;
    const parents = typeof target === `string` ? context.querySelectorAll(target) : target;

    // If multiple parent nodes, create multiple FantaFilterWrappers and return those instead
    if (isNodeList(parents)) {
        return [].slice
            .call(parents)
            .map((element: HTMLElement) => createFantaFilterWrapper(dependencies, element, userOptions))
            .filter((x: HTMLElement) => x);
    }

    const options: Options = configure(parents, userOptions, defaultOptions);
    const name = parents.getAttribute(options.attributeNames.group);

    // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel factory function
    if (
        !parents.hasAttribute(options.attributeNames.group) ||
        fantaFilterCollector.find(filter => filter.name === name)
    )
        return;

    const FantaFilterWrapper = protoFantaFilterWrapper(parents, options, name);

    let elements = createFantaFilterElement(
        dependencies,
        context.querySelectorAll(`[${options.attributeNames.group}=${name}]`),
        FantaFilterWrapper,
    );

    FantaFilterWrapper.inputs = elements.filter((element: FantaFilterElement) => element.isInput);
    FantaFilterWrapper.items = elements.filter((element: FantaFilterElement) => !element.isInput);

    fantaFilterCollector.push(FantaFilterWrapper);

    return FantaFilterWrapper;
}
