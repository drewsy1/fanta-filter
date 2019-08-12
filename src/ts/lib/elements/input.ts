import { iFantaElementConstructor, iFantaInputFactory } from '../interfaces';
import { isNodeList } from '../util';
import { FantaFilterElement } from './element';
import stampit from 'stampit';

const PrivateVars = stampit.init(function() {
    var _updateEvent: CustomEvent<any> = null;
});

const Properties = stampit({
    props: {
        type: null,
        comparer: null,
        selector: null,
        updateId: null,
    },
    methods: {
        setUpdateEvent(_eventTrigger: string, _event: CustomEvent<any>) {
            if (_eventTrigger !== undefined && _event !== undefined) {
                this.element.addEventListener(_eventTrigger, (e: Event) => e.target.dispatchEvent(_event));
                this._updateEvent = _event;
            }
            return this._updateEvent;
        },
        updateEvent() {
            return this._updateEvent;
        },
    },
    init({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        if (isNodeList(elements)) {
            return [].slice
                .call(Array.from(elements))
                .map((_element: HTMLElement) =>
                    this({ dependencies, elements: _element, parentName, eventType, _userOptions }),
                )
                .filter((x: HTMLElement) => x);
        }
        this.kind = 'input';
        this.type = this.element.getAttribute('type') || 'text';
        this.selector = this.element.getAttribute(this._options.getAttribute('selector'));
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
    },
});

export const FantaFilterInput: iFantaInputFactory = stampit(FantaFilterElement, PrivateVars, Properties);
