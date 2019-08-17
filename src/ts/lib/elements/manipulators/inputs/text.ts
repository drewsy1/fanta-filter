import { iFantaElementConstructor, iFantaManipulator } from '../../../interfaces';
import { FantaFilterInput } from '../input';

/**
 * @description Implements the FantaFilterInput class to describe a text input element
 * @export
 * @class FantaFilterInputText
 * @extends {FantaFilterInput}
 * @implements {iFantaManipulator}
 */
export class FantaFilterInputText extends FantaFilterInput implements iFantaManipulator {
    /**
     *Creates an instance of FantaFilterInputText.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterInput
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        super({ dependencies, elements, parentName, eventType, _userOptions });
        this.element.oninput = (e: Event) => this.raiseUpdateEvent(e);
    }

    getFilterValue() {
        return (this.element as HTMLInputElement).value;
    }
}
