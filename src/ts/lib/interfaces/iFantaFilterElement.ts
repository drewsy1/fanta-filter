/**
 * Prototype object to be processed by the createFantaFilterElement factory function
 *
 * @export
 * @interface iFantaFilterElement
 */
export interface iFantaFilterElement {
    groupName: string;
    element: HTMLElement;
    tagName: string;
}

export interface iFantaFilterItem extends iFantaFilterElement {
    hidden: boolean;
}

export interface iFantaFilterInput extends iFantaFilterElement {
    type: string;
    comparer: string;
    selector: string;
}
