import { configure, defaultOptions, createFantaFilterWrappers } from './lib/util';
import { iFantaOptions, iFantaWrapper } from './lib/interfaces';

interface FantaFilterGlobal {
    [key: string]: iFantaWrapper;
}

export function init(
    selector: string = '.js-fafi',
    userOptions?: iFantaOptions,
    context: HTMLElement | Document = document,
) {
    const newFantaFilter = createFantaFilterWrappers({ configure, context, defaultOptions }, selector, userOptions);
    const fantaFilterArray = newFantaFilter.length !== undefined ? newFantaFilter : [newFantaFilter];
    const fantaFilterObj: FantaFilterGlobal = {};
    fantaFilterArray.forEach((fantaFilter: iFantaWrapper) => {
        fantaFilterObj[fantaFilter.name] = fantaFilter;
    });

    return fantaFilterObj;
}
