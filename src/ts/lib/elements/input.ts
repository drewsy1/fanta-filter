import { iFantaDependencies, iFantaInput, iFantaWrapper, iFantaOptions, iFantaElementConstructor } from '../interfaces';
import { isNodeList, getEnumMember } from '../util';
import { FantaFilterElement } from './element';
import { InputComparer } from '../enums';
import { isUndefined } from 'util';

/**
 * @description A class representing any HTML inputs that manipulate a FantaFilterWrapper
 * @class FantaFilterInput
 * @extends {FantaFilterElement}
 * @implements {iFilterInput}
 */
export class FantaFilterInput extends FantaFilterElement implements iFantaInput {
    type: string;
    comparer: string;
    selector: string;
    updateId: string;
    private _updateEvent?: CustomEvent<any>;

    /**
     *Creates an instance of FantaFilterInput.
     * @param {iFantaElementConstructor} {dependencies, elements, parentName, eventType, _userOptions}
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
        super({ dependencies, elements: elements, parentName, eventType, _userOptions });

        this.type = this.element.getAttribute('type');
        this.selector = this.element.getAttribute(this._options.getAttribute('selector'));
        this.updateId = `${this.eventType}.(${this.selector}).update`;
        let elementComparerVal = this.element.getAttribute(this._options.getAttribute('comparer'))
        this.comparer = Object.keys(this._options.InputComparerClasses).includes(elementComparerVal) ? elementComparerVal : 'match';
        let updateEvent = new CustomEvent(this.updateId, {
            bubbles: true,
            detail: {
                sender: this,
                value: () => (this.element as HTMLInputElement).value,
            },
        });
        this.setUpdateEvent('input', updateEvent);
        return this;
    }
    /**
     * @description Adds an update event handler to a FantaFilterInput and its HTML element
     * @private
     * @param {string} _eventTrigger Name of event to be handled
     * @param {CustomEvent<any>} _event Callback function of event
     * @returns This FantaFilterElement's UpdateEvent
     * @memberof FantaFilterInput
     */
    private setUpdateEvent(_eventTrigger: string, _event: CustomEvent<any>) {
        if (_eventTrigger !== undefined && _event !== undefined) {
            this.element.addEventListener(_eventTrigger, e => e.target.dispatchEvent(_event));
            this._updateEvent = _event;
        }
        return this._updateEvent;
    }
    /**
     * @description Returns this FantaFilterElement's UpdateEvent
     * @readonly
     * @memberof FantaFilterInput
     */
    get updateEvent() {
        return this._updateEvent;
    }
}
