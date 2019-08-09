import { iFantaOptions } from '../interfaces';
import { isUndefined, isString } from 'util';

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
    getAttribute: (suffix?: string) =>
        getChildValue(defaultOptions.attributeNames, defaultOptions.attributeNames.root, suffix),
    getClass: (suffix?: string) => getChildValue(defaultOptions.classNames, defaultOptions.classNames.root, suffix),
};

function getChildValue(group: any, root?: string, suffix?: string) {
    root = root === undefined ? group['root'] : root;
    const groupKeys = Object.keys(group).filter(value => value !== 'root');
    if (isUndefined(suffix)) {
        return groupKeys.map(key => prependRoot(root, group[key])) as string[];
    } else if (isString(suffix) && groupKeys.includes(suffix)) {
        return prependRoot(root, group[suffix]) as string;
    }
}

const prependRoot = (root: string, suffix: string): string => `${root}-${suffix}`;
