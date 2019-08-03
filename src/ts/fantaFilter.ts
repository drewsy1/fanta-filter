import { FantaFilter, Options, FantaFilterElement, Dependencies } from 'Interfaces';
import {TypeTests, DOM} from './lib/util/index';

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
 * @returns {FantaFilter} A FantaFilter object
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
 * @returns {FantaFilter|FantaFilter[]} A completed FantaFilter object
 */
export default function createFantaFilter(
    dependencies: Dependencies,
    target: HTMLElement | string,
    userOptions: Options = {},
): FantaFilter {
    const { configure, context, defaultOptions, createFantaFilterElement } = dependencies;
    const parents = typeof target === `string` ? context.querySelectorAll(target) : target;

    // If multiple parent nodes, create multiple FantaFilters and return those instead
    if(TypeTests.isNodeList(parents)) {
        return [].slice
            .call(parents)
            .map((element: HTMLElement) => createFantaFilter(dependencies, element, userOptions))
            .filter((x: HTMLElement) => x);
    }

    let parent = parents;
    let options: Options = configure(parent, userOptions, defaultOptions);

    // If the parent node doesn't have the specified group attribute, cancel factory function
    if (!parent.hasAttribute(options.attributeNames.group)) {
        return;
    }

    let name = parent.getAttribute(options.attributeNames.group);
    let groupWithSameName = CurrentFilters.find(filter => filter.name === name);

    const FantaFilter = protoFantaFilter(parent, options, name);

    let inputs = createFantaFilterElement(
        dependencies,
        context.querySelectorAll(`.${options.classNames.input}[${options.attributeNames.group}=${name}]`),
        FantaFilter,
    );
    let items = createFantaFilterElement(
        dependencies,
        parent.querySelectorAll(`.${options.classNames.item}[${options.attributeNames.group}=${name}]`),
        FantaFilter,
    );

    // If a FantaFilter with the same filter group already exists, merge this one's items with that one and then cancel factory
    if (groupWithSameName) {
        groupWithSameName.items = groupWithSameName.items.concat(items);
        return;
    }

    FantaFilter.inputs = inputs;
    FantaFilter.items = items;

    CurrentFilters.push(FantaFilter);

    return FantaFilter;
}
