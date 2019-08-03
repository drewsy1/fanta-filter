import { convertKebabToCamelCase } from './string';
import { Options } from 'Interfaces';

/**
 * Converts a NamedNodeMap of attributes to an object
 * @param {NamedNodeMap} attributes NamedNodeMap to be converted
 * @param {Options | string} options Default options from which to retrieve the root data attribute template, or a string representing the template itself
 */
export const convertAttributesToObject = (attributes: NamedNodeMap, options: Options | string) => {
    const root = typeof options === 'string' ? options : options.attributeNames.root;
    const outputObject: any = {};

    for (let i = 0; i < attributes.length; i++) {
        let attr = attributes.item(i).name;
        if (attr.match(root)) {
            let convertedName = convertKebabToCamelCase(attr, root + '-');
            outputObject[convertedName] = attr;
        }
    }
    return outputObject;
};