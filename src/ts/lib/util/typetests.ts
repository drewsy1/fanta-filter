export function IsElement(toBeDetermined: any): toBeDetermined is Element {
    if (toBeDetermined !== null) return true;
}

export function IsHTMLCollection(toBeDetermined: any): toBeDetermined is HTMLCollection {
    return HTMLCollection.prototype.isPrototypeOf(toBeDetermined);
}

export function IsNodeList(toBeDetermined: any): toBeDetermined is NodeList {
    return NodeList.prototype.isPrototypeOf(toBeDetermined);
}

export function isNodeList(nodes: any): nodes is NodeList | HTMLCollection {
    var stringRepr = Object.prototype.toString.call(nodes);

    return typeof nodes === 'object' &&
        /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
        (typeof nodes.length === 'number') &&
        (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0));
}