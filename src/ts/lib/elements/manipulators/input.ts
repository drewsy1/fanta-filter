import { iFantaElementConstructor, iFantaManipulator, iFantaOptions } from '../../interfaces';
import { isNodeList } from '../../util';
import { FantaFilterManipulator } from '../manipulator';

/**
 * @description Implements the FantaFilterElement class to describe an input element
 * @export
 * @abstract
 * @class FantaFilterInput
 * @extends {FantaFilterManipulator}
 * @implements {iFantaManipulator}
 */
export abstract class FantaFilterInput extends FantaFilterManipulator implements iFantaManipulator {
    /**
     *Creates an instance of FantaFilterInput.
     * @param {iFantaElementConstructor} { dependencies, elements, parentName, eventType, _userOptions }
     * @memberof FantaFilterInput
     */
    constructor({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        super({ dependencies, elements, parentName, eventType, _userOptions });
        this.type = 'input';
        this.inputType = this.element.getAttribute('type') || 'text';
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
}
