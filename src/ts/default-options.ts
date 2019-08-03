import { Options } from 'Interfaces';

const defaultOptions: Options = {
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
        inactive: 'js-fafi-active',
    },
};

export default defaultOptions;
