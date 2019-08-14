import { iFantaElementConstructor, iFantaInput } from '../../interfaces';
import { FantaFilterInput } from '../input';

/**
 * @description Implements the FantaFilterInput class to describe a text input element
 * @export
 * @class FantaFilterInputText
 * @extends {FantaFilterInput}
 * @implements {iFantaInput}
 */
export class FantaFilterInputText extends FantaFilterInput implements iFantaInput {
    _updateEvent: CustomEvent<any>;

    get updateEvent() {
        return this._updateEvent;
    }

    /**
     *Creates an instance of FantaFilterInputText.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterInput
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        super({ dependencies, elements, parentName, eventType, _userOptions });

        let updateEvent = new CustomEvent(this.updateId, {
            bubbles: true,
            detail: {
                sender: this,
                value: () => (this.element as HTMLInputElement).value,
            },
        });
        this.setUpdateEvent('input', updateEvent);
    }
}
