import { iFantaOptions, iFantaElementConstructor, iFantaElement } from '../interfaces';
import { configure, convertAttributesToObject } from '../util';

/**
 * @description A base class for meta-element classes
 * @export
 * @class FantaFilterElement
 * @implements {iFantaElement}
 */
export class FantaFilterElement implements iFantaElement {
    type: string;
    attributes: object;
    element: HTMLElement;
    eventType: string;
    groupName: string;
    protected _options: iFantaOptions;

    get tagName() {
        return this.element.tagName;
    }

    /**
     *Creates an instance of FantaFilterElement.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterElement
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        const { defaultOptions } = dependencies;
        this._options = configure(defaultOptions, elements, _userOptions);
        this.attributes = convertAttributesToObject(elements.attributes, this._options);
        this.groupName = parentName;
        this.eventType = eventType;
        this.element = elements;
    }
}
