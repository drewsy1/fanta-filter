import { iFantaOptions } from '../interfaces';

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
    getAttribute: (suffix?: string) => getChildValue(defaultOptions.attributeNames,defaultOptions.attributeNames.root, suffix),
    getClass: (suffix?: string) => getChildValue(defaultOptions.classNames,defaultOptions.classNames.root, suffix),
};

function getChildValue(group:any, root?:string, suffix?:string): string | string[]{
    root = root === undefined ? group['root'] : root;
    const groupKeys = Object.keys(group).filter((value) => value !== 'root');
    return !! suffix ? 
        groupKeys.includes(suffix) ? prependRoot(root,suffix) : null
        : groupKeys.map((value) => prependRoot(defaultOptions.attributeNames.root,value));
}

const prependRoot = (root: string, suffix: string) => `${root}-${suffix}`