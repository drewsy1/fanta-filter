import { Dependencies, iFantaFilterElement, iFantaFilterWrapper, Options } from '../interfaces';
import { convertAttributesToObject } from '../util';
import { FantaFilterItem } from './FantaFilterItem';
import { FantaFilterInput } from './FantaFilterInput';

/**
 * @description An abstract class to be implemented by specific FantaFilter subtypes representing various HTML elements
 * @class FantaFilterElement
 * @implements {iFantaFilterElement}
 */
export abstract class FantaFilterElement implements iFantaFilterElement {
    attributes: object;
    groupName: string;
    options: Options;

    /**
     * Creates an instance of FantaFilterElement.
     * @param {Dependencies} dependencies
     * @param {HTMLElement} element
     * @param {iFantaFilterWrapper} parentFilter
     * @param {Options} [_userOptions={}]
     * @memberof FantaFilterElement
     */
    constructor(
        dependencies: Dependencies,
        public element: HTMLElement,
        parentFilter: iFantaFilterWrapper,
        _userOptions: Options = {},
    ) {
        this.options = Object.assign(dependencies.defaultOptions, _userOptions);
        this.groupName = parentFilter.name;
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
