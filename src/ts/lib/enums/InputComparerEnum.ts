import { MatchFilter, TagFilter, DateFilter } from '../filters';
import { iFantaDependencies, iFantaInput, iFantaElementConstructor, iFantaFilterConstructor, iFantaOptions } from '../interfaces';

export const enum InputComparer {
    match = 'match',
    tag = 'tag',
    date = 'date',
}

export const InputComparerClasses = {
    match: (constructor: iFantaFilterConstructor) => new MatchFilter(constructor),
    tag: (constructor: iFantaFilterConstructor) => new TagFilter(constructor),
    date: (constructor: iFantaFilterConstructor) => new DateFilter(constructor),
};
