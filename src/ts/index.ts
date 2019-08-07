import {configure, defaultOptions} from './lib/util';
import FantaFilterWrapper from './FantaFilterWrapper';
import { Options } from './lib/interfaces';

interface FantaFilterObject {
    [key:string]:FantaFilterWrapper
}

export function init(selector: string = '.js-fafi', userOptions?: Options, context: HTMLElement | Document = document) {
    const newFantaFilter = FantaFilterWrapper.create({ configure, context, defaultOptions }, selector, userOptions);
    const fantaFilterArray = newFantaFilter.length !== undefined ? newFantaFilter : [newFantaFilter];
    const fantaFilterObj: FantaFilterObject = {};
    fantaFilterArray.forEach((fantaFilter:FantaFilterWrapper) => {
        fantaFilterObj[fantaFilter.name] = fantaFilter;
    });

    return fantaFilterObj;
};