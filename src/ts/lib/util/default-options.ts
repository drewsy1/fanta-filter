import { iFantaOptions, iFantaFilterConstructor, iFantaElementConstructor } from '../interfaces';
import { isUndefined, isString } from 'util';
import { MatchFilter, TagFilter, DateFilter } from '../filters';
import { FantaFilterInput } from '../elements/input';
import { FantaFilterItem } from '../elements/item';

export const defaultOptions: iFantaOptions = {
    attributeNames: {
        root: 'data-fantafilter',
        group: 'group',
        selector: 'selector',
        comparer: 'comparer',
    },
    classNames: {
        root: 'js-fafi',
        parent: 'parent',
        input: 'input',
        item: 'item',
        hidden: 'hidden',
    },
    inputTypes: ['INPUT'],
    InputComparerClasses: {
        match: (constructor: iFantaFilterConstructor) => new MatchFilter(constructor),
        tag: (constructor: iFantaFilterConstructor) => new TagFilter(constructor),
        date: (constructor: iFantaFilterConstructor) => new DateFilter(constructor),
    },
    FilterElementClasses: {
        inputs: (constructor: iFantaElementConstructor) => new FantaFilterInput(constructor),
        items: (constructor: iFantaElementConstructor) => new FantaFilterItem(constructor),
    },
    getAttribute: (suffix?: string) =>
        getChildValue(defaultOptions.attributeNames, defaultOptions.attributeNames.root, suffix),
    getClass: (suffix?: string) => getChildValue(defaultOptions.classNames, defaultOptions.classNames.root, suffix),
};

function getChildValue(group: any, root?: string, suffix?: string) {
    root = isUndefined(root) ? group['root'] : root;
    const groupKeys = Object.keys(group).filter(value => value !== 'root');
    if (isUndefined(suffix)) {
        return groupKeys.map(key => prependRoot(root, group[key])) as string[];
    } else if (isString(suffix) && groupKeys.includes(suffix)) {
        return prependRoot(root, group[suffix]) as string;
    } else return suffix as string;
}

const prependRoot = (root: string, suffix: string): string => `${root}-${suffix}`;
