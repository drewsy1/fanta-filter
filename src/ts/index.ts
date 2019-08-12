import { configure, defaultOptions } from './lib/util';
import { iFantaOptions, iFantaWrapper, iFantaDependencies } from './lib/interfaces';
import { FantaFilterWrapper } from './FantaFilterWrapper';
import { iFantaWrapperConstructor } from './lib/interfaces/iFantaWrapperConstructor';
import { isUndefined } from 'util';

interface FantaFilterGlobal {
    [key: string]: iFantaWrapper;
}

export function init(
    selector: string = '.js-fafi',
    _userOptions?: iFantaOptions,
    context: HTMLElement | Document = document,
) {
    const dependencies: iFantaDependencies = { configure, context, defaultOptions };
    const newFilterWrapperConstructor: iFantaWrapperConstructor = { dependencies, parentNode: selector, _userOptions };
    const newFantaFilter: iFantaWrapper | iFantaWrapper[] = FantaFilterWrapper(newFilterWrapperConstructor);
    const fantaFilterArray: iFantaWrapper[] = [];
    if (isUndefined(newFantaFilter.length)) {
        fantaFilterArray.push(newFantaFilter as iFantaWrapper);
    } else {
        fantaFilterArray.concat(newFantaFilter as iFantaWrapper[]);
    }
    const fantaFilterObj: FantaFilterGlobal = {};
    fantaFilterArray.forEach((fantaFilter: iFantaWrapper) => {
        fantaFilterObj[fantaFilter.name] = fantaFilter;
    });

    return fantaFilterObj;
}
