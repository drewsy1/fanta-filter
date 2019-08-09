import { convertKebabToCamelCase } from './string';
import { iFantaOptions } from '../interfaces';

/**
 * @description Converts a NamedNodeMap of attributes to an object
 *
 * @param {NamedNodeMap} attributes NamedNodeMap to be converted
 * @param {iFantaOptions | string} options Default options from which to retrieve the root data attribute template, or a string representing the template itself
 * @returns An object created from the NamedNodeMap
 */
export function convertAttributesToObject(attributes: NamedNodeMap, options: iFantaOptions | string) {
    const root = typeof options === 'string' ? options : options.attributeNames.root;
    let outputObject: {[key:string]:any} = {};

    if(attributes !== undefined){
        for (let i = 0; i < attributes.length; i++) {
            let attr = attributes.item(i).name;
            if (attr.match(root)) {
                let convertedName = convertKebabToCamelCase(attr, `${root}-`);
                outputObject[convertedName] = attributes.item(i).value;
            }
        }
    }
    return outputObject;
};

/**
 * @description Converts an element's attributes to a name map for use in Options objects
 * @export
 * @param {NamedNodeMap} attributes NamedNodeMap to be converted
 * @param {iFantaOptions | string} options Default options from which to retrieve the root data attribute template, or a string representing the template itself
 * @returns
 */
export function convertAttributeNamesToOptions(attributes: NamedNodeMap, options: iFantaOptions | string) {
    const root = typeof options === 'string' ? options : options.attributeNames.root;
    let outputObject: {[key:string]:any} = {};

    if(attributes !== undefined){
        for (let i = 0; i < attributes.length; i++) {
            let attr = attributes.item(i).name;
            if (attr.match(root)) {
                let convertedName = convertKebabToCamelCase(attr, `${root}-`);
                outputObject[convertedName] = attr.replace(`${root}-`,'');
            }
        }
    }
    return outputObject;
};