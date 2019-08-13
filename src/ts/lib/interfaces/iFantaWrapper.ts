import { iFantaElement } from './iFantaElement';
import { iFantaFilterGroup } from './iFantaFilterGroup';

/**
 * @description Describes the FilterWrapper class
 * @export
 * @interface iFantaWrapper
 */
export interface iFantaWrapper {
    parentNode: HTMLElement;
    name: string;
    inputs: iFantaElement[];
    items: iFantaElement[];
    filterGroup: iFantaFilterGroup;
    eventType: string;
    hasInputs: boolean;
    hasItems: boolean;
    length: number;
}
