import { iFantaElement } from './iFantaElement';
import { iFantaFilter } from './iFantaFilter';

/**
 * @description Describes the FilterGroup class
 * @export
 * @interface iFantaFilterGroup
 */
export interface iFantaFilterGroup {
    filters: Map<string,iFantaFilter>;
    filteredItems: iFantaElement[];
    updateEvent: any;
    Update: () => void;
}
