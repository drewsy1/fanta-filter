import { Filter } from './filter';
import { iFantaFilter, iFantaFilterConstructor, iFantaItem } from '../interfaces';
import { isNullOrUndefined, isString } from 'util';

/**
 * @description Implements a basic text-matching filter
 * @export
 * @class MatchFilter
 * @extends {Filter}
 * @implements {iMatchFantaFilter}
 */
export class MatchFilter extends Filter implements iFantaFilter {
    constructor({ dependencies, input, _userOptions }: iFantaFilterConstructor) {
        super({ dependencies, input, _userOptions });

        return this;
    }

    /**
     * @description Implements the Filter superclass' filterObject method
     * @param {iFantaItem} inputItem An element to be filtered
     * @returns {(iFantaItem | null)} The element if it passes the filter test, or null
     * @memberof MatchFilter
     */
    filterObject(inputItem: iFantaItem): iFantaItem | null {
        let selectorValues = this.getSelectorValues(inputItem);
        let filterValue = this.filterValue[0];
        let isMatch = selectorValues.every(selectorVal => {
            if (filterValue === undefined || filterValue === selectorVal) {
                return true;
            } else if (!!!filterValue.length) {
                return true;
            } else if (typeof filterValue === 'string') {
                return !!selectorVal.match(filterValue);
            } else {
                return !!filterValue.includes(selectorVal);
            }
        });

        return isMatch ? inputItem : null;
    }

    valueConverter(arg: string | string[]) {
        return Array.isArray(arg) ? arg : [arg];
    }
}
