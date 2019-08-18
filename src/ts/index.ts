import { configure, defaultOptions } from './lib/util';
import { iFantaOptions, iFantaWrapper, iFantaDependencies } from './lib/interfaces';
import { FantaFilterWrapper } from './FantaFilterWrapper';
import { isNull } from 'util';
import '../css/item.css';

/**
 * @description Creates an instance of FantaFilter
 * @export
 * @param {string} [selector='.js-fafi'] CSS selector used to search for items to filter/be filtered
 * @param {iFantaOptions} [_userOptions] Customizable user overrides for the instance
 * @param {(HTMLElement | Document)} [context=document] The context in which the instance should be created
 * @returns A FantaFilter instance
 */
export function init(
    selector: string = '.js-fafi',
    _userOptions?: iFantaOptions,
    context: HTMLElement | Document = document,
) {
    const dependencies: iFantaDependencies = { configure, context, defaultOptions };

    const newFantaFilters: iFantaWrapper[] = Array.from(context.querySelectorAll(selector))
        .map((element: HTMLElement) => new FantaFilterWrapper({ dependencies, parentNode: element, _userOptions }))
        .filter((x: iFantaWrapper) => !isNull(x.name));

    return newFantaFilters;
}
