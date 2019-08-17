import { iFantaInput, iFantaElement, iFantaItem } from './iFantaElement';

export interface iFantaFilter {
    input: iFantaInput;
    selector: string | string[];
    operator: string;
    filterValue: any;
    eventType: string;
    updateEvent: CustomEvent;
    applyFilter: (inputItems: iFantaItem[]) => iFantaItem[];
    filterObject: (inputItem: iFantaItem) => iFantaItem | null;
}
