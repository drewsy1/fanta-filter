import { Options } from "Interfaces";

/**
 * @description Merges default/user options and finds new attributes on an HTML element.
 *
 * @export
 * @param {HTMLElement} element Element to search for new attributes
 * @param {Options} userOptions Customized user options to compare
 * @param {Options} defaultOptions Default options to compare
 * @returns {Options} A finalized Options object
 */
export const configure = (element: HTMLElement, userOptions: Options, defaultOptions: Options): Options => {
    return Object.keys(defaultOptions).reduce((options: Options, key) => {
        const attrValue = element.getAttribute(`data-${key.toLowerCase()}`);

        if (attrValue !== null) options[key] = attrValue;
        else if (key in userOptions) options[key] = userOptions[key];
        else options[key] = defaultOptions[key];

        return options;
    }, {});
}
