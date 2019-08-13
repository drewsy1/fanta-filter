import { Filter } from './filter';
import { iDateFantaFilter, iFantaFilterConstructor, iFantaItem } from '../interfaces';

export class DateFilter extends Filter implements iDateFantaFilter {
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
        return inputItem;
    }
}
