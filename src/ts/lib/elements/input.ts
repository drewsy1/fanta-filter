import { iFantaElementConstructor, iFantaInput, iFantaOptions } from '../interfaces';
import { isNodeList } from '../util';
import { FantaFilterElement } from './element';

/**
 * @description Implements the FantaFilterElement class to describe an input element
 * @export
 * @abstract
 * @class FantaFilterInput
 * @extends {FantaFilterElement}
 * @implements {iFantaInput}
 */
export abstract class FantaFilterInput extends FantaFilterElement implements iFantaInput {
    type: string;
    comparer: string;
    selector: string;
    inputType: string;
    operator: string;
    updateId: string;
    abstract _updateEvent: CustomEvent<any>;

    get updateEvent() {
        return this._updateEvent;
    }

    /**
     *Creates an instance of FantaFilterInput.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterInput
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
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
    }

    /**
     * @description Calls the correct input constructor for a specified input element
     * @static
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @returns A specific input class instance (or array of them)
     * @memberof FantaFilterInput
     */
    static create({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor){
        const { configure, defaultOptions } = dependencies;
        const options: iFantaOptions = configure(defaultOptions, null, _userOptions);
        if (isNodeList(elements)) {
            return [].slice
                .call(Array.from(elements))
                .map(
                    (_element: HTMLElement) =>
                        options.FilterElementClasses.inputs({ dependencies, elements: _element, parentName, eventType, _userOptions }),
                )
                .filter((x: HTMLElement) => x);
        }

        let inputType = elements.getAttribute('type') || "text";
        if(Object.keys(options.InputTypeClasses).includes(inputType)){
            return options.InputTypeClasses[inputType]({ dependencies, elements, parentName, eventType, _userOptions });
        }
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
