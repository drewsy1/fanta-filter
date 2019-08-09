import { Filter } from './filter';
import { iMatchFantaFilter, iFantaFilterConstructor } from '../interfaces';

export class MatchFilter extends Filter implements iMatchFantaFilter {
    constructor({ dependencies, input, _userOptions }: iFantaFilterConstructor) {
        super({ dependencies, input, _userOptions });

        return this;
    }
}
