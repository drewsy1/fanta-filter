import { iFantaElement } from './iFantaElement';
import { iFantaFilterGroup } from './iFantaFilterGroup';
import { iFantaOptions } from './iFantaOptions';

/**
 * @description Describes the FilterWrapper class
 * @export
 * @interface iFantaWrapper
 */
export interface iFantaWrapper {
    "parentNode": HTMLElement;
    "name": string;
    "inputs": iFantaElement[];
    "items": iFantaElement[];
    "filterGroup": iFantaFilterGroup;
    "hasInputs": boolean;
    "hasItems": boolean;
}
