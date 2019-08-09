import { InputComparer } from "../enums";

/**
 * @description Defines a FantaFilterElement object
 * @export
 * @interface iFantaElement
 */
export interface iFantaElement {
    element: HTMLElement;
    eventType: string;
    groupName: string;
    tagName: string;
}

/**
 * @description Defines a FantaFilterItem object
 * @export
 * @interface iFantaItem
 * @extends {iFantaElement}
 */
export interface iFantaItem extends iFantaElement {
    hidden: boolean;
}

/**
 * @description Defines a FantaFilterInput object
 * @export
 * @interface iFantaInput
 * @extends {iFantaElement}
 */
export interface iFantaInput extends iFantaElement {
    comparer: InputComparer;
    selector: string;
    type: string;
}
