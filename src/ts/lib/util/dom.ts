import { convertKebabToCamelCase } from './string';
import { Options } from 'Interfaces';

/**
 * @description Converts a NamedNodeMap of attributes to an object
 *
 * @param {NamedNodeMap} attributes NamedNodeMap to be converted
 * @param {Options | string} options Default options from which to retrieve the root data attribute template, or a string representing the template itself
 * @returns An object created from the NamedNodeMap
 */
export const convertAttributesToObject = (attributes: NamedNodeMap, options: Options | string) => {
    const root = typeof options === 'string' ? options : options.attributeNames.root;
    let outputObject = new Map();

    for (let i = 0; i < attributes.length; i++) {
        let attr = attributes.item(i).name;
        if (attr.match(root)) {
            let convertedName = convertKebabToCamelCase(attr, root + '-');
            outputObject.set(convertedName, attributes.item(i).value);
        }
    }
    return outputObject;
};
