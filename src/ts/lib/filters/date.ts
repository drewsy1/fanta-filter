import { Filter } from './filter';
import { iFantaFilterConstructor, iFantaItem, iFantaFilter } from '../interfaces';
import { ValueFilter } from './value';
import { isArray } from 'util';

export class DateFilter extends ValueFilter implements iFantaFilter {
    constructor({ dependencies, input, _userOptions }: iFantaFilterConstructor) {
        super({ dependencies, input, _userOptions });
        return this;
    }

    valueConverter(arg: string | string[]): any {
        if (arg === undefined) return arg;
        arg = Array.isArray(arg) ? arg : [arg];
        let argConverted = arg
            .map(_arg => (typeof _arg === 'string' && _arg.match(/^\d*\.?\d*$/) ? parseInt(_arg) : _arg))
            .map(_arg => new Date(_arg));
        argConverted.sort((a: any, b: any) => a - b);
        return argConverted;
    }
}
