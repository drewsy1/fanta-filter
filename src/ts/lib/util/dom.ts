import { iFantaOptions } from '../interfaces';
import { isUndefined } from 'util';
var forEach = require('lodash.foreach');
var camelCase = require('lodash.camelcase');
/**
 * @description Converts a NamedNodeMap of attributes to an object
 *
 * @param {NamedNodeMap} attributes NamedNodeMap to be converted
 * @param {iFantaOptions} options Default options from which to retrieve the root data attribute template
 * @returns An object created from the NamedNodeMap
 */
export function convertAttributesToObject(attributes: NamedNodeMap, options: iFantaOptions) {
    const { root } = options.attributeNames;
    let outputObject: { [key: string]: any } = {};

    if (!isUndefined(attributes)) {
        forEach(attributes, (attr: any) => {
            if (attr.name.match(root)) {
                let convertedName = camelCase(attr.name.replace(`${root}-`, ''));
                outputObject[convertedName] = attr.value;
            }
        });
    }
    return outputObject;
}

/**
 * @description Converts an element's attributes to a name map for use in Options objects
 * @export
 * @param {NamedNodeMap} attributes NamedNodeMap to be converted
 * @param {iFantaOptions | string} options Default options from which to retrieve the root data attribute template, or a string representing the template itself
 * @returns
 */
export function convertAttributeNamesToOptions(attributes: NamedNodeMap, options: iFantaOptions) {
    const { root } = options.attributeNames;
    let outputObject: { [key: string]: any } = {};

    if (!isUndefined(attributes)) {
        forEach(attributes, (attr: any) => {
            if (attr.name.match(root)) {
                let deRooted = attr.name.replace(`${root}-`, '');
                outputObject[camelCase(deRooted)] = deRooted;
            }
        });
    }
    return outputObject;
}
