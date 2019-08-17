import { iFantaFilterConstructor, iFantaManipulator, iFantaFilter, iFantaOptions, iFantaItem } from '../interfaces';
var without = require('lodash.without');

/**
 * @description A base class that implements properties/methods common to all kinds of filters
 * @export
 * @abstract
 * @class Filter
 * @implements {iFantaFilter}
 */
export abstract class Filter implements iFantaFilter {
    selector: string | string[];
    operator: string;
    filterValue: any;
    input: iFantaManipulator;
    eventType: string;
    updateEvent: CustomEvent;
    protected _options: iFantaOptions;

    /**
     *Creates an instance of Filter.
     * @param {iFantaFilterConstructor} { dependencies, input, _userOptions }
     * @memberof Filter
     */
    constructor({ dependencies, input, _userOptions }: iFantaFilterConstructor) {
        const { defaultOptions, context } = dependencies;
        this._options = Object.assign(defaultOptions, _userOptions);
        this.input = input;
        this.eventType = input.eventType;
        this.selector = input.selector;
        this.operator = input.operator;
        this.filterValue = input.getFilterValue();

        context.addEventListener(this.input.updateId, (event: CustomEvent) => {
            this.Update(event);
        });

        this.updateEvent = new CustomEvent(`${this.eventType}.update`, {
            bubbles: true,
            detail: {
                sender: this,
            },
        });
        return this;
    }

    /**
     * @description Sets the filterValue of the current class and dispatches an update event to its parent group
     * @param {Event} event The event that triggered the Update method
     * @memberof Filter
     */
    Update(event: CustomEvent) {
        let eventTarget = event.target as HTMLInputElement;
        this.filterValue = this.valueConverter(event.detail.value);
        eventTarget.dispatchEvent(this.updateEvent);
    }

    /**
     * @description Returns the inputItems group, sans elements that failed to pass the filter test
     * @param {iFantaItem[]} inputItems A group of elements to be filtered
     * @returns {iFantaItem[]} The input group, minus those elements that were filtered
     * @memberof Filter
     */
    applyFilter(inputItems: iFantaItem[]): iFantaItem[] {
        return without(inputItems.map(item => this.filterObject(item)), null);
    }

    get Selectors(): string[] {
        return Array.isArray(this.selector) ? this.selector : [this.selector];
    }

    getSelectorValues(inputItem: iFantaItem): string[] {
        let selectorVals: string[] = [];
        this.Selectors.forEach((selector: string) => {
            let attrName: string = this._options.getAttribute(selector);
            let attrVal: string =
                selector === 'innerText' ? inputItem.element.innerText : inputItem.element.getAttribute(attrName);
            if (attrVal === null) {
                console.error('Property not found on object');
                return null;
            }
            selectorVals.push(attrVal);
        });
        return selectorVals;
    }

    abstract valueConverter(arg: string | string[]): any;

    /**
     * @description Abstract method for filtering a set of elements, implemented by sub-classes
     * @abstract
     * @param {iFantaItem} inputItem An element to be filtered
     * @returns {(iFantaItem | null)} The element if it passes the filter test, or null
     * @memberof Filter
     */
    abstract filterObject(inputItem: iFantaItem): iFantaItem | null;
}
