import { iFantaElementConstructor, iFantaInput } from '../interfaces';
import { isNodeList } from '../util';
import { FantaFilterElement } from './element';

/**
 * @description Implements the FantaFilterElement class to describe an input element
 * @export
 * @class FantaFilterInput
 * @extends {FantaFilterElement}
 * @implements {iFantaInput}
 */
export class FantaFilterInput extends FantaFilterElement implements iFantaInput {
    type: string;
    comparer: string;
    selector: string;
    inputType: string;
    operator: string;
    updateId: string;
    private _updateEvent: CustomEvent<any>;

    get updateEvent() {
        return this._updateEvent;
    }

    /**
     *Creates an instance of FantaFilterInput.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterInput
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        if (isNodeList(elements)) {
            return [].slice
                .call(Array.from(elements))
                .map(
                    (_element: HTMLElement) =>
                        new FantaFilterInput({ dependencies, elements: _element, parentName, eventType, _userOptions }),
                )
                .filter((x: HTMLElement) => x);
        }

        super({ dependencies, elements, parentName, eventType, _userOptions });
        this.type = 'input';
        this.inputType = this.element.getAttribute('type') || 'text';
        this.selector = this.element.getAttribute(this._options.getAttribute('selector'));
        this.operator = this.element.getAttribute(this._options.getAttribute('operator'));
        this.updateId = `${this.eventType}.(${this.selector}).update`;
        let elementComparerVal = this.element.getAttribute(this._options.getAttribute('comparer'));
        this.comparer = Object.keys(this._options.InputComparerClasses).includes(elementComparerVal)
            ? elementComparerVal
            : 'match';
        let updateEvent = new CustomEvent(this.updateId, {
            bubbles: true,
            detail: {
                sender: this,
                value: () => (this.element as HTMLInputElement).value,
            },
        });
        this.setUpdateEvent('input', updateEvent);
    }

    /**
     * @description Sets this class' update event
     * @param {string} eventTrigger String representation of the event that will trigger the dispatch of this event
     * @param {CustomEvent<any>} event The event that will be dispatched
     * @returns The _updateEvent of the class, after having been set by this method
     * @memberof FantaFilterInput
     */
    setUpdateEvent(eventTrigger: string, event: CustomEvent<any>) {
        if (eventTrigger !== undefined && event !== undefined) {
            this.element.addEventListener(eventTrigger, (e: Event) => e.target.dispatchEvent(event));
            this._updateEvent = event;
        }
        return this._updateEvent;
    }
}
