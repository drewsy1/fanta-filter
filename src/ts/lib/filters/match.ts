import { Filter } from './filter';
import { iMatchFantaFilter, iFantaFilterConstructor, iFantaItem } from '../interfaces';

/**
 * @description Implements a basic text-matching filter
 * @export
 * @class MatchFilter
 * @extends {Filter}
 * @implements {iMatchFantaFilter}
 */
export class MatchFilter extends Filter implements iMatchFantaFilter {
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
        let attrName: string = this._options.getAttribute(this.selector);
        let attrVal: string =
            this.selector === 'innerText' ? inputItem.element.innerText : inputItem.element.getAttribute(attrName);
        if (attrVal === null) {
            console.error('Property not found on object');
            return null;
        }
        let isMatch = !!attrVal.match(this.filterValue) || this.filterValue === '';
        return isMatch ? inputItem : null;
    }
}
