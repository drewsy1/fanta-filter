import { iFantaElement, iFantaOptions, iFantaElementConstructor } from '../interfaces';
import { convertAttributesToObject, configure } from '../util';

/**
 * @description An abstract class to be implemented by specific FantaFilter subtypes representing various HTML elements
 * @class FantaFilterElement
 * @implements {iFilterElement}
 */
export abstract class FantaFilterElement implements iFantaElement {
    attributes: object;
    element: HTMLElement;
    eventType: string;
    groupName: string;
    protected _options: iFantaOptions;

    /**
     *Creates an instance of FantaFilterElement.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterElement
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        const {defaultOptions } = dependencies;
        this._options = configure(defaultOptions,elements, _userOptions);
        
        this.groupName = parentName;
        this.eventType = eventType;
        this.element = elements;
        // this.attributes = Object.assign(
        //     this._options.attributeNames,
        //     convertAttributesToObject(this.element.attributes, this._options),
        // );

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
}
