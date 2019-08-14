import { iFantaElementConstructor, iFantaInput, iFantaOptions } from '../interfaces';
import { FantaFilterElement } from './element';
import { isNodeList } from '../util';
var forEach = require('lodash.foreach');

/**
 * @description Implements the FantaFilterInput class to describe a group of toggleable input elements
 * @export
 * @class FantaFilterToggleGroup
 * @extends {FantaFilterElement}
 * @implements {iFantaInput}
 */
export abstract class FantaFilterToggleGroup extends FantaFilterElement implements iFantaInput {
    type: string;
    comparer: string;
    selector: string;
    inputType: string;
    operator: string;
    updateId: string;
    filterValue: string[];
    _updateEvent: CustomEvent<any>;

    get updateEvent() {
        return this._updateEvent;
    }

    /**
     *Creates an instance of FantaFilterInputToggleGroup.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterToggleGroup
     */
    constructor(
        { dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor,
        childNodes: NodeList | HTMLCollection,
    ) {
        super({ dependencies, elements, parentName, eventType, _userOptions });
        this.type = this.element.tagName;
        this.selector = this.element.getAttribute(this._options.getAttribute('selector'));
        this.operator = this.element.getAttribute(this._options.getAttribute('operator'));
        this.updateId = `${this.eventType}.(${this.selector}).update`;
        let elementComparerVal = this.element.getAttribute(this._options.getAttribute('comparer'));

        this.comparer = Object.keys(this._options.InputComparerClasses).includes(elementComparerVal)
            ? elementComparerVal
            : 'match';

        this._updateEvent = new CustomEvent(this.updateId, {
            bubbles: true,
            detail: {
                sender: this,
                value: () => this.filterValue,
            },
        });

        forEach(childNodes, (childNode: HTMLElement) => {
            if (childNode.tagName.toLowerCase() === 'button') {
                childNode.onclick = e => this.Update(childNode, e);
            } else {
                childNode.oninput = e => this.Update(childNode, e);
            }
        });
    }

    /**
     * @description Calls the correct input constructor for a specified input element
     * @static
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @returns A specific input class instance (or array of them)
     * @memberof FantaFilterToggleGroup
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
        let buttonElements = elements.getElementsByTagName('button');
        let radioInputs = elements.querySelectorAll('input[type=radio]');
        let checkboxInputs = elements.querySelectorAll('input[type=checkbox]');
        if (!!buttonElements.length) {
            return options.ToggleGroupTypeClasses.button(
                {
                    dependencies,
                    elements,
                    parentName,
                    eventType,
                    _userOptions,
                },
                buttonElements,
            );
        } else if (!!radioInputs.length) {
            return options.ToggleGroupTypeClasses.radio(
                {
                    dependencies,
                    elements,
                    parentName,
                    eventType,
                    _userOptions,
                },
                radioInputs,
            );
        } else if (!!checkboxInputs.length) {
            return options.ToggleGroupTypeClasses.checkbox(
                {
                    dependencies,
                    elements,
                    parentName,
                    eventType,
                    _userOptions,
                },
                checkboxInputs,
            );
        }
    }

    /**
     * @description Returns the current value of this class' filterValue
     * @returns The current value of this class' filterValue
     * @memberof FantaFilterToggleGroup
     */
    getFilterValue() {
        return this.filterValue;
    }

    /**
     * @description
     * @abstract
     * @param {HTMLElement} element
     * @param {Event} e
     * @memberof FantaFilterToggleGroup
     */
    abstract Update(element: HTMLElement, e: Event): void;
}
