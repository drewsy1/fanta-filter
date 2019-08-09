import { iFantaOptions } from '../interfaces';
import { convertAttributeNamesToOptions } from './dom';

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
    let options: iFantaOptions = { attributeNames: {}, classNames: {}, inputTypes: [] };
    if (userOptions !== undefined) {
        Object.keys(defaultOptions).forEach(key => {
            options[key] =
                userOptions[key] === undefined
                    ? defaultOptions[key]
                    : typeof options[key] === 'object'
                    ? Object.assign(defaultOptions[key], userOptions[key])
                    : Array.isArray(options[key])
                    ? defaultOptions[key].concat(userOptions[key])
                    : userOptions[key];
        });
    }
    if (element !== undefined && element !== null) {
        let newAttributes = convertAttributeNamesToOptions(element.attributes, defaultOptions);
        options.attributeNames = Object.assign(defaultOptions.attributeNames, newAttributes);
    }
    return options;
}
