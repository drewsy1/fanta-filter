import {
    iFantaFilterWrapper,
    Options,
    iFantaFilterElement,
    iFantaFilterInput,
    iFantaFilterItem,
    Dependencies,
    iFilterGroup,
} from './lib/interfaces/index';
import { FantaFilterItem, FantaFilterElement, FantaFilterInput } from './fantaFilterElement';
import { isNodeList } from './lib/util/index';

/**
 * Class that represents a data-fantafilter-group
 * @export
 * @class FantaFilterWrapper
 * @implements {iFantaFilterWrapper}
 */
export default class FantaFilterWrapper implements iFantaFilterWrapper {
    filterGroup: iFilterGroup;
    inputs: iFantaFilterInput[];
    items: iFantaFilterItem[];
    name: string;
    options: Options;
    parentNode: HTMLElement;
    static CurrentFilters: FantaFilterWrapper[];

    /**
     * Creates an instance of FantaFilterWrapper.
     * @param {Dependencies} dependencies Variables passed in from higher context
     * @param {HTMLElement} selector A data-fantafilter-group root object
     * @param {Options} [userOptions={}] Optional user override options
     * @memberof FantaFilterWrapper
     */
    constructor(dependencies: Dependencies, selector: HTMLElement, userOptions: Options = {}) {
        const { configure, context, defaultOptions } = dependencies;

        this.options = configure(selector, userOptions, defaultOptions);
        this.parentNode = selector;
        this.name = selector.getAttribute(this.options.attributeNames.group);

        // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel factory function
        if (
            !selector.hasAttribute(this.options.attributeNames.group) ||
            (FantaFilterWrapper.CurrentFilters !== undefined &&
                FantaFilterWrapper.CurrentFilters.find((filter: FantaFilterWrapper) => filter.name === this.name))
        ) {
            this.name = null;
            return;
        }

        let elements = FantaFilterElement.createFantaFilterElements(
            dependencies,
            context.querySelectorAll(`[${this.options.attributeNames.group}=${this.name}]`),
            this,
            userOptions,
        );

        this.inputs = elements.inputs;
        this.items = elements.items;

        if (FantaFilterWrapper.CurrentFilters === undefined) FantaFilterWrapper.CurrentFilters = [];
        FantaFilterWrapper.CurrentFilters.push(this);
    }

    /**
     * @description Static method that wraps the default constructor to return null if an object is malformed/invalid.
     * @static
     * @param {Dependencies} dependencies Variables passed in from higher context
     * @param {HTMLElement | string} target String selector representing a data-fantafilter-group HTML root object, or the object itself
     * @param {Options} [userOptions={}] Optional user override options
     * @returns A completed FantaFilterWrapper object or objects. Null if object is invalid.
     * @memberof FantaFilterWrapper
     */
    static create = (dependencies: Dependencies, target: HTMLElement | string, userOptions: Options = {}) => {
        const { context } = dependencies;
        const parents = typeof target === `string` ? context.querySelectorAll(target) : target;

        // If multiple parent nodes, create multiple FantaFilterWrappers and return those instead
        if (isNodeList(parents)) {
            return [].slice
                .call(parents)
                .map((element: HTMLElement) => FantaFilterWrapper.create(dependencies, element, userOptions))
                .filter((x: HTMLElement) => x);
        }

        let newFantaFilter = new FantaFilterWrapper(dependencies, parents, userOptions);

        if (newFantaFilter.name === null) return;
        else return newFantaFilter;
    };

    /**
     * @description Returns true if this FantaFilterWrapper contains input elements
     * @readonly
     * @memberof FantaFilterWrapper
     */
    public get hasInputs() {
        return !!this.inputs.length;
    }

    /**
     * @description Returns true if this FantaFilterWrapper contains item elements
     * @readonly
     * @memberof FantaFilterWrapper
     */
    public get hasItems() {
        return !!this.items.length;
    }
}
