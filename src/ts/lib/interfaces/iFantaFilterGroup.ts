import { iFantaElement, iFantaItem } from './iFantaElement';
import { iFantaFilter } from './iFantaFilter';

/**
 * @description Describes the FilterGroup class
 * @export
 * @interface iFantaFilterGroup
 */
export interface iFantaFilterGroup {
    filters: iFantaFilter[];
    eventType: string;
    filteredItems: iFantaItem[];
    returnedItems: iFantaItem[];
    Update: (event: Event) => void;
}
