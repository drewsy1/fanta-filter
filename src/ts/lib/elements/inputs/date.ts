import { iFantaElementConstructor, iFantaInput } from '../../interfaces';
import { FantaFilterInputText } from './text';

/**
 * @description Implements the FantaFilterInput class to describe a date input element
 * @export
 * @class FantaFilterInputDate
 * @extends {FantaFilterInputText}
 * @implements {iFantaInput}
 */
export class FantaFilterInputDate extends FantaFilterInputText implements iFantaInput {
    /**
     *Creates an instance of FantaFilterInputDate.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterInput
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        super({ dependencies, elements, parentName, eventType, _userOptions });
    }
}
