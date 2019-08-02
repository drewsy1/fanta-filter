/**
 * Factory method that creates and returns an object from protoFantaFilterElement
 * @param {*} dependencies Variables passed in from higher context
 * @param {*} targets HTML element(s) from which FantaFilterElement(s) should be created
 * @param {*} parentFilter FantaFilter object containing this element
 * @param {*} userOptions Optional user override options
 */
export function createFantaFilterElement(dependencies, targets, parentFilter, userOptions = {}) {
    const { defaultOptions } = dependencies;
    let options = Object.assign(defaultOptions,userOptions);

    if (isNodeList(targets)) {
        return [].slice.call(Array.from(targets))
            .map(element => createFantaFilterElement(dependencies, element, parentFilter, userOptions))
            .filter(x => x);
    }

    const { name } = parentFilter;
    let element = targets[0] || targets;
    const attrDefault = options.attributeNames;
    const attrElement = convertAttributesToObject(element.attributes, options);
    const elementAttributes = Object.assign(attrDefault, attrElement);

    let newFantaFilterElement = protoFantaFilterElement(element, name);
    newFantaFilterElement = Object.assign(newFantaFilterElement,elementAttributes);

    return newFantaFilterElement;
}

/**
 * Prototype object to be processed by the createFantaFilterElement factory function
 * @param {HTMLElement} element Element from which a FantaFilterElement will be created
 * @param {string} groupName Name of element's filter group
 */
const protoFantaFilterElement = (element, groupName) => ({
    groupName,
    element,
    /**
     * @param {boolean} isHidden
     */
    set hidden(isHidden) {
        element.hidden = isHidden !== null ? isHidden : element.hidden;
        return element.hidden
    },
})

/**
 * Converts a KebabCase string to CamelCase and returns it
 * @param {string} input KebabCase string to be converted
 * @param {string} root Root term to be matched/removed
 */
export function convertKebabToCamelCase(input, root = '') {
    root = root !== '' ? root+"|" : root;
    let replace = "(?:(?:" + root + "(?<!\\v)(?: |-)([a-z])))";
    let regex = new RegExp(replace, "g");
    return input.replace(regex, (match, p1) => { return typeof p1 !== 'undefined' ? p1.toUpperCase() : '' })
}

/**
 * Converts a NamedNodeMap of attributes to an object
 * @param {NamedNodeMap} attributes NamedNodeMap to be converted
 * @param {*} options Default options from which to retrieve the root data attribute template, or a string representing the template itself
 */
export function convertAttributesToObject(attributes, options) {
    let root;
    const outputObject = {};

    if (typeof options === 'string') root = options;
    else root = options.attributeNames.root;

    for (let i = 0; i < attributes.length; i++) {
        let attr = attributes.item(i).name;
        if (attr.match(root)) {
            let convertedName = convertKebabToCamelCase(attr, root + "-");
            outputObject[convertedName] = attr;
        }
    }
    return outputObject;
}

/**
 * Returns a boolean value representing whether or not an object is any sort of NodeList
 * @param {*} nodes Nodes to be tested
 */
export function isNodeList(nodes) {
    var stringRepr = Object.prototype.toString.call(nodes);

    return typeof nodes === 'object' &&
        /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
        (typeof nodes.length === 'number') &&
        (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0));
}