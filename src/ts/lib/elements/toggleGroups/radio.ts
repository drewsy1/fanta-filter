import { iFantaElementConstructor, iFantaInput, iFantaOptions } from '../../interfaces';
import { FantaFilterToggleGroup } from '../toggleGroup';
var forEach = require('lodash.foreach');

/**
 * @description Implements the FantaFilterInput class to describe a group of toggleable input elements
 * @export
 * @class FantaFilterRadioGroup
 * @extends {FantaFilterToggleGroup}
 * @implements {iFantaInput}
 */
export class FantaFilterRadioGroup extends FantaFilterToggleGroup implements iFantaInput {
    /**
     *Creates an instance of FantaFilterInputToggleGroup.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterRadioGroup
     */
    constructor(
        { dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor,
        childNodes: NodeList | HTMLCollection,
    ) {
        super({ dependencies, elements, parentName, eventType, _userOptions }, childNodes);
        this.inputType = 'radio';
    }

    Update(element: HTMLElement, e: Event): void {
        let checkedElements = this.element.querySelectorAll('input:checked');
        let newFilterValue: string[] = [];
        forEach(checkedElements, (checkedElement: HTMLInputElement) => {
            if (!!checkedElement.value.length) {
                newFilterValue.push(checkedElement.value);
            }
        });
        this.filterValue = newFilterValue;
        e.target.dispatchEvent(this._updateEvent);
    }
}
