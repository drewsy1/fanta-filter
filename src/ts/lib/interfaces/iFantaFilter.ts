import { iFantaInput, iFantaElement, iFantaItem } from './iFantaElement';

export interface iFantaFilter {
    input: iFantaInput;
    selector: string;
    operator: string;
    filterValue: any;
    eventType: string;
    updateEvent: CustomEvent;
    applyFilter: (inputItems: iFantaItem[]) => iFantaItem[];
    filterObject: (inputItem: iFantaItem) => iFantaItem | null;
}

export interface iMatchFantaFilter extends iFantaFilter {}

export interface iTagFantaFilter extends iFantaFilter {}

export interface iDateFantaFilter extends iFantaFilter {
    operator: string;
}
