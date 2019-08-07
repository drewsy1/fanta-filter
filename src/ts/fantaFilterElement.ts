import {
    Dependencies,
    iFantaFilterElement,
    iFantaFilterInput,
    iFantaFilterItem,
    iFantaFilterWrapper,
    Options,
} from './lib/interfaces';
import { isNodeList, convertAttributesToObject } from './lib/util';

/**
 * @description An abstract class to be implemented by specific FantaFilter subtypes representing various HTML elements
 * @class FantaFilterElement
 * @implements {iFantaFilterElement}
 */
export abstract class FantaFilterElement implements iFantaFilterElement {
    attributes: object;
    element: HTMLElement;
    groupName: string;
    options: Options;

    /**
     * Creates an instance of FantaFilterElement.
     * @param {Dependencies} dependencies
     * @param {HTMLElement} targets
     * @param {iFantaFilterWrapper} parentFilter
     * @param {Options} [_userOptions={}]
     * @memberof FantaFilterElement
     */
    constructor(
        dependencies: Dependencies,
        targets: HTMLElement,
        parentFilter: iFantaFilterWrapper,
        _userOptions: Options = {},
    ) {
        this.options = Object.assign(dependencies.defaultOptions, _userOptions);
        this.groupName = parentFilter.name;
        this.element = targets;
        this.attributes = Object.assign(
            this.options.attributeNames,
            convertAttributesToObject(this.element.attributes, this.options),
        );

        return this;
    }

    /**
     * @description Retrieves a string representation of this element's HTML element tag
     * @readonly
     * @memberof FantaFilterElement
     */
    get tagName() {
        return this.element.tagName;
    }

    /**
     * @description Creates FantaFilterElement derivatives from a NodeList of HTMLElements
     * @static
     * @memberof FantaFilterElement
     */
    static createFantaFilterElements = function(
        dependencies: Dependencies,
        targets: NodeList,
        parentFilter: iFantaFilterWrapper,
        _userOptions: Options = {},
    ) {
        let options = Object.assign(dependencies.defaultOptions, _userOptions);
        let items: FantaFilterItem[] = [];
        let inputs: FantaFilterInput[] = [];

        targets.forEach((target: HTMLElement) => {
            if (options.inputTypes.includes(target.tagName))
                inputs.push(new FantaFilterInput(dependencies, target, parentFilter, _userOptions));
            else items.push(new FantaFilterItem(dependencies, target, parentFilter, _userOptions));
        });

        return { items, inputs };
    };
}

/**
 * @description A class representing any filterable HTML element
 * @class FantaFilterItem
 * @extends {FantaFilterElement}
 * @implements {iFantaFilterItem}
 */
export class FantaFilterItem extends FantaFilterElement implements iFantaFilterItem {
    /**
     *Creates an instance of FantaFilterItem.
     * @param {Dependencies} dependencies
     * @param {(HTMLElement | HTMLCollection | NodeList)} targets
     * @param {iFantaFilterWrapper} parentFilter
     * @param {Options} [_userOptions={}]
     * @memberof FantaFilterItem
     */
    constructor(
        dependencies: Dependencies,
        targets: HTMLElement | HTMLCollection | NodeList,
        parentFilter: iFantaFilterWrapper,
        _userOptions: Options = {},
    ) {
        if (isNodeList(targets)) {
            return [].slice
                .call(Array.from(targets))
                .map((_element: HTMLElement) => new FantaFilterItem(dependencies, targets, parentFilter, _userOptions))
                .filter((x: HTMLElement) => x);
        }

        super(dependencies, targets, parentFilter, (_userOptions = {}));
    }

    /**
     * @description Sets the 'hidden' attribute of the HTML element of this FantaFilterElement
     * @memberof FantaFilterItem
     */
    set hidden(isHidden: boolean) {
        this.element.hidden = isHidden;
    }

    /**
     * @description Returns the 'hidden' attribute of the HTML element of this FantaFilterElement
     * @readonly
     * @memberof FantaFilterItem
     */
    get hidden() {
        return this.element.hidden;
    }
}

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
