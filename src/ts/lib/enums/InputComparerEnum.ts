import { MatchFilter, TagFilter, DateFilter } from '../filters';

export enum InputComparer {
    match = 'match',
    tag = 'tag',
    date = 'date',
}

export const InputComparerClasses = {
    match: MatchFilter,
    tag: TagFilter,
    date: DateFilter,
};
