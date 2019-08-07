/**
 * @description Tests if an object is a NodeList or HTMLCollection
 * @exports
 * @param {*} nodes Object to be tested
 * @returns {(nodes is NodeList | HTMLCollection)} True if object is NodeList/HTMLCollection
 */
export function isNodeList(nodes: any): nodes is NodeList | HTMLCollection {
    var stringRepr = Object.prototype.toString.call(nodes);

    return (
        typeof nodes === 'object' &&
        /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
        typeof nodes.length === 'number' &&
        (nodes.length === 0 || (typeof nodes[0] === 'object' && nodes[0].nodeType > 0))
    );
}