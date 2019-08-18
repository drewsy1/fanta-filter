import { iFantaElementConstructor, iFantaItem } from '../interfaces';
import { isNodeList } from '../util';
import { FantaFilterElement } from './element';

/**
 * @description Implements the FantaFilterElement class to describe a filterable item element
 * @export
 * @class FantaFilterItem
 * @extends {FantaFilterElement}
 * @implements {iFantaItem}
 */
export class FantaFilterItem extends FantaFilterElement implements iFantaItem {
    get hidden() {
        return this.element.classList.contains(this._options.getClass('hidden'));
    }

    set hidden(isHidden: boolean) {
        this.element.classList.toggle(this._options.getClass('hidden'), isHidden)
    }

    /**
     *Creates an instance of FantaFilterItem.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
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
        this.type = 'item';
    }
}
