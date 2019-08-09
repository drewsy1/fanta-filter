import { configure, defaultOptions, createFantaFilterWrappers } from './lib/util';
import FantaFilterWrapper from './FantaFilterWrapper';
import { iFantaOptions } from './lib/interfaces';

interface FantaFilterGlobal {
    [key: string]: FantaFilterWrapper;
}

export function init(
    selector: string = '.js-fafi',
    userOptions?: iFantaOptions,
    context: HTMLElement | Document = document,
) {
    const newFantaFilter = createFantaFilterWrappers({ configure, context, defaultOptions }, selector, userOptions);
    const fantaFilterArray = newFantaFilter.length !== undefined ? newFantaFilter : [newFantaFilter];
    const fantaFilterObj: FantaFilterGlobal = {};
    fantaFilterArray.forEach((fantaFilter: FantaFilterWrapper) => {
        fantaFilterObj[fantaFilter.name] = fantaFilter;
    });

    return fantaFilterObj;
}
