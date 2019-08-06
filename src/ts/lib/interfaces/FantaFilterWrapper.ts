import {FantaFilterElement} from './FantaFilterElement';
import { FilterGroup } from './Filters';

/**
 * Prototype object to be processed by the createFantaFilterWrapper factory function
 *
 * @export
 * @interface FantaFilterWrapper
 */
export interface FantaFilterWrapper {
    parentNode: HTMLElement;
    options: object;
    name: string;
    inputs: FantaFilterElement[];
    items: FantaFilterElement[];
    filterGroup: FilterGroup;
    CurrentFilters: FantaFilterWrapper[];
    hasInputs: boolean;
    hasItems: boolean;
}
