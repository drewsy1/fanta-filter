import { iFantaElementConstructor, iFantaManipulator, iFantaOptions } from '../../interfaces';
import { isNodeList } from '../../util';
import { FantaFilterManipulator } from '../manipulator';
var forEach = require('lodash.foreach');

/**
 * @description Implements the FantaFilterInput class to describe a group of toggleable input elements
 * @export
 * @class FantaFilterToggleGroup
 * @extends {FantaFilterManipulator}
 * @implements {iFantaManipulator}
 */
export abstract class FantaFilterToggleGroup extends FantaFilterManipulator implements iFantaManipulator {
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
        this.inputType = this.type;
        forEach(childNodes, (childNode: HTMLElement) => {
            if (childNode.tagName.toLowerCase() === 'button') {
                childNode.onclick = (e: Event) => this.raiseUpdateEvent(e);
            } else {
                childNode.oninput = (e: Event) => this.raiseUpdateEvent(e);
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
}
