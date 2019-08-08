import { Dependencies, iFantaFilterItem, iFantaFilterWrapper, Options } from '../interfaces';
import { isNodeList } from '../util';
import { FantaFilterElement } from './FantaFilterElement';
/**
 * @description A class representing any filterable HTML element
 * @class FantaFilterItem
 * @extends {FantaFilterElement}
 * @implements {iFantaFilterItem}
 */
export class FantaFilterItem extends FantaFilterElement implements iFantaFilterItem {
    /**
     *Creates an instance of FantaFilterItem.
     * @param {Dependencies} dependencies
     * @param {(HTMLElement | HTMLCollection | NodeList)} targets
     * @param {iFantaFilterWrapper} parentFilter
     * @param {Options} [_userOptions={}]
     * @memberof FantaFilterItem
     */
    constructor(
        dependencies: Dependencies,
        targets: HTMLElement | HTMLCollection | NodeList,
        parentFilter: iFantaFilterWrapper,
        _userOptions: Options = {},
    ) {
        if (isNodeList(targets)) {
            return [].slice
                .call(Array.from(targets))
                .map((_element: HTMLElement) => new FantaFilterItem(dependencies, targets, parentFilter, _userOptions))
                .filter((x: HTMLElement) => x);
        }
        super(dependencies, targets, parentFilter, (_userOptions = {}));
    }
    /**
     * @description Sets the 'hidden' attribute of the HTML element of this FantaFilterElement
     * @memberof FantaFilterItem
     */
    set hidden(isHidden: boolean) {
        this.element.hidden = isHidden;
    }
    /**
     * @description Returns the 'hidden' attribute of the HTML element of this FantaFilterElement
     * @readonly
     * @memberof FantaFilterItem
     */
    get hidden() {
        return this.element.hidden;
    }
}
