import { iFantaElementConstructor, iFantaManipulator} from '../interfaces';
import { FantaFilterElement } from './element';

/**
 * @description Implements the FantaFilterElement class to describe an input element
 * @export
 * @abstract
 * @class FantaFilterInput
 * @extends {FantaFilterElement}
 * @implements {iFantaManipulator}
 */
export abstract class FantaFilterManipulator extends FantaFilterElement implements iFantaManipulator {
    type: string;
    comparer: string;
    selector: string | string[];
    inputType: string;
    operator: string;
    updateId: string;
    filterValue: string[];
    protected _updateEvent: CustomEvent<any>;

    get updateEvent() {
        return this._updateEvent;
    }

    /**
     *Creates an instance of FantaFilterManipulator.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterManipulator
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        super({ dependencies, elements, parentName, eventType, _userOptions });
        // this.type = 'input';
        // this.inputType = this.element.getAttribute('type') || 'text';
        this.selector = this.element.getAttribute(this._options.getAttribute('selector')).split(';');
        this.operator = this.element.getAttribute(this._options.getAttribute('operator'));
        this.updateId = `${this.eventType}.(${this.selector}).update`;
        let elementComparerVal = this.element.getAttribute(this._options.getAttribute('comparer'));

        this.comparer = Object.keys(this._options.InputComparerClasses).includes(elementComparerVal)
            ? elementComparerVal
            : 'match';
    }

    /**
     * @description Method that sets this instance's _updateEvent variable and dispatches it
     * @param {Event} e The event to recieve and use to create the _updateEvent
     * @memberof FantaFilterInput
     */
    raiseUpdateEvent(e: Event) {
        this._updateEvent = new CustomEvent(this.updateId, {
            bubbles: true,
            detail: {
                sender: e.target,
                value: this.getFilterValue(),
                // value: (e.target as HTMLInputElement).value,
            },
        });

        e.target.dispatchEvent(this._updateEvent);
    }

    abstract getFilterValue(): any;
}
