import { iFantaFilterGroup, iFantaFilter, iFantaElement, iFantaInput, iFantaDependencies } from '../interfaces';
import { InputComparerClasses } from '../enums';
import { createClassFromEnumVal } from '../util';

export class FilterGroup implements iFantaFilterGroup {
    filters: Map<string, iFantaFilter> = new Map;
    updateEvent: any;
    Update: () => void;

    constructor(
        dependencies: iFantaDependencies,
        public eventType: string,
        inputs: iFantaInput[],
        public filteredItems: iFantaElement[],
    ) {
        inputs
            .map(input => createClassFromEnumVal(InputComparerClasses, input.comparer, {dependencies, input}))
            .forEach(filter => this.filters.set(filter.selector, filter));
    }
}
