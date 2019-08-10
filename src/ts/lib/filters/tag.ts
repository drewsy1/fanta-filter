import { Filter } from './filter';
import { iTagFantaFilter, iFantaFilterConstructor, iFantaItem } from '../interfaces';

export class TagFilter extends Filter implements iTagFantaFilter {
    constructor({ dependencies, input, _userOptions }: iFantaFilterConstructor) {
        super({ dependencies, input, _userOptions });

        return this;
    }

    filterObject(inputItem: iFantaItem): iFantaItem | null {
        return inputItem;
    }
}
