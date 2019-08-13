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
 * @interface iFantaInput
 * @extends {iFantaElement}
 */
export interface iFantaInput extends iFantaElement {
    comparer: string;
    selector: string;
    inputType: string;
    updateId: string;
    updateEvent: CustomEvent<any>;
    setUpdateEvent: (eventTrigger: string, event: CustomEvent<any>) => CustomEvent<any>;
}
