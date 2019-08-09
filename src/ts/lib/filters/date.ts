import { Filter } from './filter';
import { iDateFantaFilter, iFantaFilterConstructor } from '../interfaces';

export class DateFilter extends Filter implements iDateFantaFilter {
    constructor({ dependencies, input, _userOptions }: iFantaFilterConstructor) {
        super({ dependencies, input, _userOptions });

        return this;
    }
}