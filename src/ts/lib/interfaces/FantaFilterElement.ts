/**
 * Prototype object to be processed by the createFantaFilterElement factory function
 *
 * @export
 * @interface FantaFilterElement
 */
export interface FantaFilterElement {
    groupName: string;
    element: HTMLElement;
    hidden: boolean;
    tagName: string;
    isInput: boolean;
}

export interface FantaFilterInput extends FantaFilterElement {
    type: string,
    
}