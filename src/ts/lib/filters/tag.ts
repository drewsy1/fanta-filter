import { Filter } from './filter';
import { iTagFantaFilter, iFantaFilterConstructor } from '../interfaces';

export class TagFilter extends Filter implements iTagFantaFilter {
    constructor({ dependencies, input, _userOptions }: iFantaFilterConstructor) {
        super({ dependencies, input, _userOptions });

        return this;
    }
}
