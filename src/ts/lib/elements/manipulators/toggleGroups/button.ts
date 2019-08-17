import { iFantaElementConstructor, iFantaManipulator, iFantaOptions } from '../../../interfaces';
import { FantaFilterToggleGroup } from '../toggleGroup';
var forEach = require('lodash.foreach');

/**
 * @description Implements the FantaFilterInput class to describe a group of toggleable input elements
 * @export
 * @class FantaFilterButtonGroup
 * @extends {FantaFilterToggleGroup}
 * @implements {iFantaManipulator}
 */
export class FantaFilterButtonGroup extends FantaFilterToggleGroup implements iFantaManipulator {
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
        this.filterValue = this.getFilterValue();
    }

    getToggleGroupValue(element: HTMLElement): string[] {
        let newFilterValue = [element.getAttribute('value')];
        this.filterValue = newFilterValue;
        return newFilterValue;
    }

    getFilterValue() {
        return this.filterValue;
    }

    /**
     * @description Method that sets this instance's _updateEvent variable and dispatches it
     * @param {Event} e The event to recieve and use to create the _updateEvent
     * @memberof FantaFilterInput
     */
    raiseUpdateEvent(e: Event) {
        this.filterValue = this.getToggleGroupValue(e.target as HTMLElement);
        this._updateEvent = new CustomEvent(this.updateId, {
            bubbles: true,
            detail: {
                sender: e.target,
                value: this.getFilterValue(),
            },
        });

        e.target.dispatchEvent(this._updateEvent);
    }
}
