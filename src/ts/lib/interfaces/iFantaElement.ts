/**
 * @description Defines a FantaFilterElement object
 * @export
 * @interface iFantaElement
 */
export interface iFantaElement {
    type: string;
    attributes: object;
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
 * @interface iFantaManipulator
 * @extends {iFantaElement}
 */
export interface iFantaManipulator extends iFantaElement {
    comparer: string;
    selector: string | string[];
    inputType: string;
    operator: string;
    updateId: string;
    updateEvent: CustomEvent<any>;
    getFilterValue: () => any;
}
