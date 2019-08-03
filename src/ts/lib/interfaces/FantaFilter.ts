import FantaFilterElement from './FantaFilterElement';

/**
 * Prototype object to be processed by the createFantaFilter factory function
 *
 * @export
 * @interface FantaFilter
 */
export default interface FantaFilter {
    parentNode: HTMLElement;
    options: object;
    name: string;
    inputs: FantaFilterElement[];
    items: FantaFilterElement[];
    CurrentFilters: FantaFilter[];
    hasInputs: boolean;
    hasItems: boolean;
}
