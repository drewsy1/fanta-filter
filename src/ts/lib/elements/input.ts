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
    selector: string | string[];
    inputType: string;
    operator: string;
    updateId: string;
    protected _updateEvent: CustomEvent<any>;

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
        this.selector = this.element.getAttribute(this._options.getAttribute('selector')).split(';');
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
    static create({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        const { configure, defaultOptions } = dependencies;
        const options: iFantaOptions = configure(defaultOptions, null, _userOptions);
        if (isNodeList(elements)) {
            return [].slice
                .call(Array.from(elements))
                .map((_element: HTMLElement) =>
                    options.FilterElementClasses.inputs({
                        dependencies,
                        elements: _element,
                        parentName,
                        eventType,
                        _userOptions,
                    }),
                )
                .filter((x: HTMLElement) => x);
        }

        let inputType = elements.getAttribute('type') || 'text';
        if (Object.keys(options.InputTypeClasses).includes(inputType)) {
            return options.InputTypeClasses[inputType]({ dependencies, elements, parentName, eventType, _userOptions });
        }
    }

    /**
     * @description Sets this input's event listener
     * @param {string} eventTrigger String representation of the event that will trigger the dispatch of this event
     * @param {(e: Event) => any} updateFunction The function that will run at dispatch
     * @memberof FantaFilterInput
     */
    setUpdateEvent(eventTrigger: string, updateFunction: (e: Event) => any) {
        if (eventTrigger !== undefined && updateFunction !== undefined) {
            this.element.addEventListener(eventTrigger, updateFunction);
        }
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
                value: (e.target as HTMLInputElement).value,
            },
        });

        e.target.dispatchEvent(this._updateEvent);
    }
}
