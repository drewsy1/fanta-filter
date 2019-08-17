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
    /**
     *Creates an instance of FantaFilterInputText.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterInput
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        super({ dependencies, elements, parentName, eventType, _userOptions });
        this.setUpdateEvent('input', this.raiseUpdateEvent);
    }
}
