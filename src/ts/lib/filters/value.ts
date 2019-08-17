import { Filter } from './filter';
import { iFantaFilter, iFantaFilterConstructor, iFantaItem } from '../interfaces';
import { isString } from 'util';

export class ValueFilter extends Filter implements iFantaFilter {
    operator: string;

    /**
     *Creates an instance of ValueFilter.
     * @param {iFantaFilterConstructor} { dependencies, input, _userOptions }
     * @memberof ValueFilter
     */
    constructor({ dependencies, input, _userOptions }: iFantaFilterConstructor) {
        super({ dependencies, input, _userOptions });
        this.operator = input.operator;
        return this;
    }

    /**
     * @description Implements the Filter superclass' filterObject method
     * @param {iFantaItem} inputItem An element to be filtered
     * @returns {(iFantaItem | null)} The element if it passes the filter test, or null
     * @memberof ValueFilter
     */
    filterObject(inputItem: iFantaItem): iFantaItem | null {
        if (!Object.keys(this._options.ComparisonOperatorFunctions).includes(this.operator)) {
            console.error(`Invalid comparison operator: ${this.operator}`);
            return null;
        }
        let operator: (comparisonVal: any, objectVal: any) => boolean = this._options.ComparisonOperatorFunctions[
            this.operator
        ];

        let selectorVals = this.getSelectorValues(inputItem);
        let attrVals: any[] = [];

        selectorVals.forEach((selectorVal: string) => {
            let attrVal = this.valueConverter(selectorVal);
            if (attrVal.valueOf() === NaN) {
                console.error('Property was not a valid date');
                return null;
            }
            attrVals = attrVals.concat(attrVal);
        });

        let isMatch = !!operator(this.filterValue, attrVals) || !this.filterValue.length;
        return isMatch ? inputItem : null;
    }

    valueConverter(arg: string | string[]): any {
        if (arg === undefined) return arg;
        arg = Array.isArray(arg) ? arg : [arg];
        return arg.map(x => parseInt(x));
    }
}
