import { iFantaFilterGroup, iFantaFilter, iFantaInput, iFantaDependencies, iFantaItem } from '../interfaces';
var difference = require('lodash.difference');
var intersection = require('lodash.intersection');

export class FilterGroup implements iFantaFilterGroup {
    filters: iFantaFilter[] = [];
    returnedItems: iFantaItem[] = [];

    constructor(
        dependencies: iFantaDependencies,
        public eventType: string,
        inputs: iFantaInput[],
        public items: iFantaItem[],
    ) {
        inputs
            .map(input => dependencies.defaultOptions.InputComparerClasses[input.comparer]({ dependencies, input }))
            .forEach(filter => this.filters.push(filter));
        dependencies.context.addEventListener(`${eventType}.update`, event => {
            this.Update(event);
        });
    }

    Update(event: Event) {
        let allFilteredItems = this.filters.map(filter => filter.applyFilter(this.items));
        this.returnedItems = intersection(...allFilteredItems);

        this.filteredItems.forEach((item: iFantaItem) => item.hidden(true));
        this.returnedItems.forEach((item: iFantaItem) => item.hidden(false));
    }

    get filteredItems() {
        return difference(this.items, this.returnedItems);
    }
}
