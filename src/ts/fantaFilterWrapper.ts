import {
    iFantaWrapper,
    iFantaOptions,
    iFantaInput,
    iFantaItem,
    iFantaFilterGroup,
    iFantaElementConstructor,
} from './lib/interfaces';
import { asyncForEach, getEnumMember, createClassFromEnumVal } from './lib/util';
import { FilterGroup } from './lib/filters';
import { FilterElementType, FilterElementClasses } from './lib/enums';
import { iFantaWrapperConstructor } from './lib/interfaces/iFantaWrapperConstructor';

/**
 * Class that represents a data-fantafilter-group
 * @export
 * @class FantaFilterWrapper
 * @implements {iFilterWrapper}
 */
export default class FantaFilterWrapper implements iFantaWrapper {
    filterGroup: iFantaFilterGroup;
    inputs: iFantaInput[] = [];
    items: iFantaItem[] = [];
    parentNode: HTMLElement;
    name: string;
    eventType: string;
    protected _options: iFantaOptions;
    static CurrentFilters: FantaFilterWrapper[];

    /**
     * Creates an instance of FantaFilterWrapper.
     * @param {iFilterDependencies} dependencies Variables passed in from higher context
     * @param {HTMLElement} parentNode A data-fantafilter-group root object
     * @param {iFantaOptions} [_userOptions={}] Optional user override options
     * @memberof FantaFilterWrapper
     */
    constructor({ dependencies, parentNode, _userOptions }: iFantaWrapperConstructor) {
        const { configure, context, defaultOptions } = dependencies;
        this._options = configure(defaultOptions, parentNode, _userOptions );

        this.parentNode = parentNode;
        this.name = parentNode.getAttribute(this._options.getAttribute('group'));
        this.eventType = `fafi.filter.${this.name}`;

        // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel factory function
        if (
            !parentNode.hasAttribute(this._options.getAttribute('group')) ||
            (FantaFilterWrapper.CurrentFilters !== undefined &&
                FantaFilterWrapper.CurrentFilters.find((filter: FantaFilterWrapper) => filter.name === this.name))
        ) {
            this.name = null;
            return;
        }

        let domElements = context.querySelectorAll(`[${this._options.getAttribute('group')}=${this.name}]`);

        const forEachPromise = new Promise(resolve =>
            asyncForEach(domElements, (elements: HTMLElement) => {
                const filterConstructorArgs: iFantaElementConstructor = {
                    dependencies,
                    elements,
                    parentName: this.name,
                    eventType: this.eventType,
                    _userOptions,
                };
                getEnumMember(FilterElementType, elements.tagName.toLowerCase(), 'item').then(result => {
                    this[result].push(createClassFromEnumVal(FilterElementClasses, result, filterConstructorArgs));
                });
            }),
        );

        this.filterGroup = this.hasInputs
            ? new FilterGroup(dependencies, this.eventType, this.inputs, this.items)
            : undefined;

        if (FantaFilterWrapper.CurrentFilters === undefined) FantaFilterWrapper.CurrentFilters = [];
        FantaFilterWrapper.CurrentFilters.push(this);
    }

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
