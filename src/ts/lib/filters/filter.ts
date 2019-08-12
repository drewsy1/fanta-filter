import { iFantaFilterConstructor, iFantaInput, iFantaFilter, iFantaOptions, iFantaItem } from '../interfaces';
var without = require('lodash.without');

export abstract class Filter implements iFantaFilter {
    selector: string;
    filterValue: any;
    input: iFantaInput;
    eventType: string;
    updateEvent: CustomEvent;

    protected _options: iFantaOptions;

    constructor({ dependencies, input, _userOptions }: iFantaFilterConstructor) {
        const { defaultOptions, context } = dependencies;
        this._options = Object.assign(defaultOptions, _userOptions);
        this.input = input;
        this.eventType = input.eventType;
        this.selector = input.selector;

        context.addEventListener(this.input.updateId, event => {
            this.Update(event);
        });

        this.updateEvent = new CustomEvent(`${this.eventType}.update`, {
            bubbles: true,
            detail: {
                sender: this,
            },
        });
        return this;
    }

    Update(event: Event) {
        let eventTarget = event.target as HTMLInputElement;
        this.filterValue = eventTarget.value;
        eventTarget.dispatchEvent(this.updateEvent);
    }

    abstract filterObject(inputItem: iFantaItem): iFantaItem | null;

    applyFilter(inputItems: iFantaItem[]): iFantaItem[] {
        return without(inputItems.map(item => this.filterObject(item)), null);
    }
}
