import {
    iFantaDependencies,
    iFantaItem,
    iFantaWrapper,
    iFantaOptions,
    iFantaElementConstructor,
} from '../interfaces';
import { isNodeList } from '../util';
import { FantaFilterElement } from './element';
/**
 * @description A class representing any filterable HTML element
 * @class FantaFilterItem
 * @extends {FantaFilterElement}
 * @implements {iFilterItem}
 */
export class FantaFilterItem extends FantaFilterElement implements iFantaItem {
    /**
     *Creates an instance of FantaFilterItem.
     * @param {iFantaElementConstructor} {dependencies, elements, parentName, eventType, _userOptions}
     * @memberof FantaFilterItem
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        if (isNodeList(elements)) {
            return [].slice
                .call(Array.from(elements))
                .map(
                    (_element: HTMLElement) =>
                        new FantaFilterItem({ dependencies, elements, parentName, eventType, _userOptions }),
                )
                .filter((x: HTMLElement) => x);
        }
        super({ dependencies, elements, parentName, eventType, _userOptions });
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