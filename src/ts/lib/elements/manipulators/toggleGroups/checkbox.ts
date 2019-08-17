import { iFantaElementConstructor, iFantaManipulator, iFantaOptions } from '../../../interfaces';
import { FantaFilterToggleGroup } from '../toggleGroup';
var forEach = require('lodash.foreach');

/**
 * @description Implements the FantaFilterInput class to describe a group of toggleable input elements
 * @export
 * @class FantaFilterCheckboxGroup
 * @extends {FantaFilterToggleGroup}
 * @implements {iFantaManipulator}
 */
export class FantaFilterCheckboxGroup extends FantaFilterToggleGroup implements iFantaManipulator {
    /**
     *Creates an instance of FantaFilterInputToggleGroup.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterCheckboxGroup
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor, childNodes: NodeList | HTMLCollection) {
        super({ dependencies, elements, parentName, eventType, _userOptions },childNodes);
        this.inputType = 'checkbox';
        this.filterValue = this.getFilterValue();
    }

    getFilterValue(): string[] {
        let checkedElements = this.element.querySelectorAll('input:checked');
        let newFilterValue: string[] = [];
        forEach(checkedElements, (checkedElement: HTMLInputElement) => newFilterValue.push(checkedElement.value));
        return newFilterValue;
    }
}
