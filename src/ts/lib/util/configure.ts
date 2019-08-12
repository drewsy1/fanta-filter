import { iFantaOptions } from '../interfaces';
import { convertAttributeNamesToOptions } from './dom';
var assignIn = require('lodash.assignin');

/**
 * @description Merges default/user options and finds new attributes on an HTML element.
 *
 * @export
 * @param {HTMLElement} element Element to search for new attributes
 * @param {iFantaOptions} userOptions Customized user options to compare
 * @param {iFantaOptions} defaultOptions Default options to compare
 * @returns {iFantaOptions} A finalized Options object
 */
export function configure(
    defaultOptions: iFantaOptions,
    element?: HTMLElement,
    userOptions?: iFantaOptions,
): iFantaOptions {
    let options: iFantaOptions = {
        attributeNames: {},
        classNames: {},
        inputTypes: [],
        getAttribute: null,
        getClass: null,
    };
    assignIn(options, defaultOptions);

    if (userOptions !== undefined) {
        assignIn(options, userOptions);
    }

    if (element !== undefined && element !== null) {
        let newAttributes = convertAttributeNamesToOptions(element.attributes, defaultOptions);
        assignIn(options.attributeNames, newAttributes);
    }
    return options;
}
