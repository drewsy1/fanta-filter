import { FantaFilter, Options, FantaFilterElement, Dependencies } from 'Interfaces';
import { TypeTests } from './lib/util/index';

// Variable to store all FantaFilters instances
const CurrentFilters: FantaFilter[] = [];

/**
 * Creates a prototype object to be processed by the createFantaFilter factory function
 *
 * @param {HTMLElement} parentNode HTML element parent of filterable elements
 * @param {Options} options Options to control the filter object
 * @param {string} name Name of filter
 * @param {FantaFilterElement[]} [inputs] HTML input elements that control filtering
 * @param {FantaFilterElement[]} [items] HTML elements to be filtered
 * @returns A FantaFilter object
 */
const protoFantaFilter = (
    parentNode: HTMLElement,
    options: Options,
    name: string,
    inputs?: FantaFilterElement[],
    items?: FantaFilterElement[],
): FantaFilter => ({
    parentNode,
    options,
    name,
    inputs,
    items,
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
 * Factory method that creates and returns an object from protoFantaFilter
 *
 * @export
 * @param {Dependencies} dependencies Variables passed in from higher context
 * @param {(HTMLElement | string)} target String selector representing an HTML object, or the object itself
 * @param {Options} [userOptions={}] Optional user override options
 * @param {FantaFilter[]} fantaFilterCollector Optional variable to store all current instances of fantaFilter. Defaults to CurrentFilters
 * @returns A completed FantaFilter object
 */
export default function createFantaFilter(
    dependencies: Dependencies,
    target: HTMLElement | string,
    userOptions: Options = {},
    fantaFilterCollector: FantaFilter[] = CurrentFilters,
): FantaFilter {
    const { configure, context, defaultOptions, createFantaFilterElement } = dependencies;
    const parents = typeof target === `string` ? context.querySelectorAll(target) : target;

    // If multiple parent nodes, create multiple FantaFilters and return those instead
    if (TypeTests.isNodeList(parents)) {
        return [].slice
            .call(parents)
            .map((element: HTMLElement) => createFantaFilter(dependencies, element, userOptions))
            .filter((x: HTMLElement) => x);
    }

    const options: Options = configure(parents, userOptions, defaultOptions);
    const name = parents.getAttribute(options.attributeNames.group);
    
    // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel factory function
    if (!parents.hasAttribute(options.attributeNames.group) || fantaFilterCollector.find(filter => filter.name === name))
        return;

    
    const FantaFilter = protoFantaFilter(parents, options, name);

    let elements = createFantaFilterElement(
        dependencies,
        context.querySelectorAll(`[${options.attributeNames.group}=${name}]`),
        FantaFilter,
    );

    FantaFilter.inputs = elements.filter((element: FantaFilterElement) => element.isInput);
    FantaFilter.items = elements.filter((element: FantaFilterElement) => !element.isInput);

    fantaFilterCollector.push(FantaFilter);

    return FantaFilter;
}
