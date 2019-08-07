import { iFantaFilterElement } from './iFantaFilterElement';
import { iFilterGroup } from './iFilter';

/**
 * Prototype object to be processed by the createFantaFilterWrapper factory function
 *
 * @export
 * @interface iFantaFilterWrapper
 */
export interface iFantaFilterWrapper {
    parentNode: HTMLElement;
    options: object;
    name: string;
    inputs: iFantaFilterElement[];
    items: iFantaFilterElement[];
    filterGroup: iFilterGroup;
    hasInputs: boolean;
    hasItems: boolean;
}
