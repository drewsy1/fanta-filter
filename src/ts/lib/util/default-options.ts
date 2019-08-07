import { Options } from 'Interfaces';

export const defaultOptions: Options = {
    attributeNames: {
        root: 'data-fantafilter',
        group: 'data-fantafilter-group',
        selector: 'data-fantafilter-selector',
        comparer: 'data-fantafilter-comparer',
    },
    classNames: {
        parent: 'js-fafi-parent',
        input: 'js-fafi-input',
        item: 'js-fafi-item',
        hidden: 'js-fafi-hidden',
    },
    inputTypes: ['INPUT'],
};