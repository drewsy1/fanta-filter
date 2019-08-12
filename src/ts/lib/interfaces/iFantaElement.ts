import { InputComparer } from "../enums";
import { iFantaElementConstructor } from "./iFantaElementConstructor";
import { iStampFactory, iStamp } from "./iStamp";

export interface iFantaElementFactory extends iStampFactory {
    ({ value }: { value: any }): iFantaElement
}

/**
 * @description Defines a FantaFilterElement object
 * @export
 * @interface iFantaElement
 */
export interface iFantaElement extends iStamp {
    element: HTMLElement;
    eventType: string;
    groupName: string;
    tagName: string;
}

export interface iFantaElementBase {
    props:{
        attributes: object;
        element: HTMLElement;
        eventType: string;
        groupName: string;
    }
    methods:{
        tagName: () => string;
    }
    init: ({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) => void;
    
}

export interface iFantaItemFactory extends iFantaElementFactory {
    ({ value }: { value: any }): iFantaItem
}

/**
 * @description Defines a FantaFilterItem object
 * @export
 * @interface iFantaItem
 * @extends {iFantaElement}
 */
export interface iFantaItem extends iFantaElement {
    hidden: (isHidden: boolean) => boolean;
}

export interface iFantaInputFactory extends iFantaElementFactory {
    ({ value }: { value: any }): iFantaInput
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
    type: string;
    updateId: string;
}
