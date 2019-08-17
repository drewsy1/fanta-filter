import { iFantaElementConstructor, iFantaManipulator } from '../../../interfaces';
import { FantaFilterInput } from '../input';

/**
 * @description Implements the FantaFilterInput class to describe a date input element
 * @export
 * @class FantaFilterInputnoUiSlider
 * @extends {FantaFilterInput}
 * @implements {iFantaManipulator}
 */
export class FantaFilterInputnoUiSlider extends FantaFilterInput implements iFantaManipulator {
    /**
     *Creates an instance of FantaFilterInputDate.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterInputnoUiSlider
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        super({ dependencies, elements, parentName, eventType, _userOptions });
        (this.element as any).noUiSlider.on('update', (e: Event) => this.raiseUpdateEvent(e));
    }

    raiseUpdateEvent(e: Event) {
        this._updateEvent = new CustomEvent(this.updateId, {
            bubbles: true,
            detail: {
                sender: this.element,
                value: e as any,
            },
        });

        this.element.dispatchEvent(this._updateEvent);
    }

    getFilterValue() {
        return (this.element as any).noUiSlider.get();
    }
}
