import { iFantaElementConstructor, iFantaInput, iFantaOptions } from '../../interfaces';
import { FantaFilterToggleGroup } from '../toggleGroup';
var forEach = require('lodash.foreach');

/**
 * @description Implements the FantaFilterInput class to describe a group of toggleable input elements
 * @export
 * @class FantaFilterButtonGroup
 * @extends {FantaFilterToggleGroup}
 * @implements {iFantaInput}
 */
export class FantaFilterButtonGroup extends FantaFilterToggleGroup implements iFantaInput {
    /**
     *Creates an instance of FantaFilterInputToggleGroup.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterButtonGroup
     */
    constructor(
        { dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor,
        childNodes: NodeList | HTMLCollection,
    ) {
        super({ dependencies, elements, parentName, eventType, _userOptions }, childNodes);
        this.inputType = 'button';
    }

    Update(element: HTMLElement, e: Event): void {
        this.filterValue = [element.getAttribute('value')];
        e.target.dispatchEvent(this._updateEvent);
    }
}
