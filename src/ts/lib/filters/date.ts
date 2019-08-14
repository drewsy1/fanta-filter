import { Filter } from './filter';
import { iDateFantaFilter, iFantaFilterConstructor, iFantaItem } from '../interfaces';

export class DateFilter extends Filter implements iDateFantaFilter {
    operator: string;

    constructor({ dependencies, input, _userOptions }: iFantaFilterConstructor) {
        super({ dependencies, input, _userOptions });
        this.operator = input.operator;
        return this;
    }

    /**
     * @description Implements the Filter superclass' filterObject method
     * @param {iFantaItem} inputItem An element to be filtered
     * @returns {(iFantaItem | null)} The element if it passes the filter test, or null
     * @memberof MatchFilter
     */
    filterObject(inputItem: iFantaItem): iFantaItem | null {
        if(!(Object.keys(this._options.ComparisonOperatorFunctions).includes(this.operator))){
            console.error(`Invalid comparison operator: ${this.operator}`);
            return null;
        }
        let operator: (comparisonVal: any, objectVal: any) => boolean = this._options.ComparisonOperatorFunctions[(this.operator)];

        let filterValueDate = new Date(this.filterValue);

        let attrName: string = this._options.getAttribute(this.selector);
        let attrValStr: string =
            this.selector === 'innerText' ? inputItem.element.innerText : inputItem.element.getAttribute(attrName);
        if (attrValStr === null) {
            console.error('Property not found on object');
            return null;
        }
        let attrVal: Date = new Date(attrValStr);
        if(attrVal.valueOf() === NaN){
            console.error('Property was not a valid date');
            return null;
        }

        let isMatch = !!operator(filterValueDate,attrVal) || this.filterValue === '';
        return isMatch ? inputItem : null;
    }
}
