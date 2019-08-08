import { Dependencies, iFantaFilterInput, iFantaFilterWrapper, Options } from '../interfaces';
import { isNodeList } from '../util';
import { FantaFilterElement } from './FantaFilterElement';
/**
 * @description A class representing any HTML inputs that manipulate a FantaFilterWrapper
 * @class FantaFilterInput
 * @extends {FantaFilterElement}
 * @implements {iFantaFilterInput}
 */
export class FantaFilterInput extends FantaFilterElement implements iFantaFilterInput {
    type: string;
    comparer: string;
    selector: string;
    private _updateEvent?: CustomEvent<any>;
    /**
     *Creates an instance of FantaFilterInput.
     * @param {Dependencies} dependencies
     * @param {(HTMLElement | HTMLCollection | NodeList)} targets
     * @param {iFantaFilterWrapper} parentFilter
     * @param {Options} [userOptions={}]
     * @memberof FantaFilterInput
     */
    constructor(
        dependencies: Dependencies,
        targets: HTMLElement | HTMLCollection | NodeList,
        parentFilter: iFantaFilterWrapper,
        userOptions: Options = {},
    ) {
        if (isNodeList(targets)) {
            return [].slice
                .call(Array.from(targets))
                .map((_element: HTMLElement) => new FantaFilterInput(dependencies, targets, parentFilter, userOptions))
                .filter((x: HTMLElement) => x);
        }
        super(dependencies, targets, parentFilter, userOptions);
        const customEvent = dependencies.window !== undefined ? dependencies.window.CustomEvent : CustomEvent;
        let updateEvent = new customEvent(`fafi.filter.${this.groupName}.update`, {
            bubbles: true,
            detail: {
                sender: this,
                value: () => (this.element as HTMLInputElement).value,
            },
        });
        this.setUpdateEvent('input', updateEvent);
        this.type = this.element.getAttribute('type');
        this.selector = this.element.getAttribute(this.options.attributeNames.selector);
        this.comparer = this.element.getAttribute(this.options.attributeNames.comparer);
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
