import { iFantaFilterGroup, iFantaFilter, iFantaManipulator, iFantaDependencies, iFantaItem } from '../interfaces';
var difference = require('lodash.difference');
var intersection = require('lodash.intersection');

/**
 * @description A collection of Filters for a specific group of elements
 * @export
 * @class FilterGroup
 * @implements {iFantaFilterGroup}
 */
export class FilterGroup implements iFantaFilterGroup {
    filters: iFantaFilter[] = [];
    returnedItems: iFantaItem[] = [];

    get filteredItems() {
        return difference(this.items, this.returnedItems);
    }

    /**
     *Creates an instance of FilterGroup.
     * @param {iFantaDependencies} dependencies
     * @param {string} eventType
     * @param {iFantaManipulator[]} inputs
     * @param {iFantaItem[]} items
     * @memberof FilterGroup
     */
    constructor(
        dependencies: iFantaDependencies,
        public eventType: string,
        inputs: iFantaManipulator[],
        public items: iFantaItem[],
    ) {
        inputs
            .map(input => dependencies.defaultOptions.InputComparerClasses[input.comparer]({ dependencies, input }))
            .forEach(filter => this.filters.push(filter));
        dependencies.context.addEventListener(`${eventType}.update`, event => {
            this.Update(event);
        });
    }

    /**
     * @description Shows/hides all elements in a filter group based on the results of the group's filters
     * @param {Event} event The event that triggered the Update method
     * @memberof FilterGroup
     */
    Update(event: Event) {
        let allFilteredItems = this.filters.map(filter => filter.applyFilter(this.items));
        this.returnedItems = intersection(...allFilteredItems);

        this.filteredItems.forEach((item: iFantaItem) => (item.hidden = true));
        this.returnedItems.forEach((item: iFantaItem) => (item.hidden = false));
    }
}
