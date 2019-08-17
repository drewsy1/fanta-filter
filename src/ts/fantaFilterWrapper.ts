import {
    iFantaWrapper,
    iFantaOptions,
    iFantaElementConstructor,
    iFantaFilterGroup,
    iFantaItem,
    iFantaManipulator,
} from './lib/interfaces';
import { FilterGroup } from './lib/filters';
import { iFantaWrapperConstructor } from './lib/interfaces/iFantaOptions';
import { isUndefined } from 'util';

/**
 * @description Manages a group of elements that filter/will be filtered and their mechanisms
 * @export
 * @class FantaFilterWrapper
 * @implements {iFantaWrapper}
 */
export class FantaFilterWrapper implements iFantaWrapper {
    parentNode: HTMLElement;
    name: string;
    inputs: iFantaManipulator[];
    items: iFantaItem[];
    filterGroup: iFantaFilterGroup;
    eventType: string;
    length: number;
    private _options: iFantaOptions;
    static CurrentFilters: iFantaWrapper[];

    get hasInputs() {
        return !!this.inputs.length;
    }

    get hasItems() {
        return !!this.items.length;
    }

    /**
     *Creates an instance of FantaFilterWrapper.
     * @param {iFantaWrapperConstructor} { dependencies, parentNode, _userOptions }
     * @memberof FantaFilterWrapper
     */
    constructor({ dependencies, parentNode, _userOptions }: iFantaWrapperConstructor) {
        const { configure, context, defaultOptions } = dependencies;

        // Public properties
        this.inputs = [];
        this.items = [];
        this._options = configure(defaultOptions, parentNode, _userOptions);
        this.parentNode = parentNode;
        this.name = parentNode.getAttribute(this._options.getAttribute('group'));
        this.eventType = `fafi.filter.${this.name}`;

        // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel constructor
        if (
            !parentNode.hasAttribute(this._options.getAttribute('group')) ||
            (FantaFilterWrapper.CurrentFilters !== undefined &&
                FantaFilterWrapper.CurrentFilters.find((filter: iFantaWrapper) => filter.name === this.name))
        ) {
            this.name = null;
            return this;
        }

        let domElements = context.querySelectorAll(`[${this._options.getAttribute('group')}=${this.name}]`);

        domElements.forEach((elements: HTMLElement) => {
            const filterConstructorArgs: iFantaElementConstructor = {
                dependencies,
                elements,
                parentName: this.name,
                eventType: this.eventType,
                _userOptions,
            };
            if (elements.classList.contains(this._options.getClass('toggleGroup'))) {
                this.inputs.push(this._options.FilterElementClasses.toggleGroup(filterConstructorArgs));
            } else if (elements.classList.contains(this._options.getClass('input'))) {
                this.inputs.push(this._options.FilterElementClasses.inputs(filterConstructorArgs));
            } else if (!elements.classList.contains(this._options.getClass('parent')))
                this.items.push(this._options.FilterElementClasses.items(filterConstructorArgs));
        });

        this.filterGroup = this.hasInputs
            ? new FilterGroup(dependencies, this.eventType, this.inputs, this.items)
            : undefined;

        if (FantaFilterWrapper.CurrentFilters === undefined) FantaFilterWrapper.CurrentFilters = [];
        FantaFilterWrapper.CurrentFilters.push(this);
        return this;
    }
}
