import {FantaFilterElement} from './FantaFilterElement';

/**
 * Prototype object to be processed by the createFantaFilterWrapper factory function
 *
 * @export
 * @interface FantaFilterWrapper
 */
export default interface FantaFilterWrapper {
    parentNode: HTMLElement;
    options: object;
    name: string;
    inputs: FantaFilterElement[];
    items: FantaFilterElement[];
    CurrentFilters: FantaFilterWrapper[];
    hasInputs: boolean;
    hasItems: boolean;
}
