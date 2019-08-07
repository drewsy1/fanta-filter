import { iFantaFilterElement,iFantaFilterInput } from './iFantaFilterElement';

export interface iFilterGroup{
    filters: iFilter[],
    filteredItems: iFantaFilterElement[],
    updateEvent: any,
    Update: () => void,
}

export interface iFilter{
    input: iFantaFilterInput,
    selector: string,
}

export interface iMatchFilter extends iFilter{

}

export interface iTagFilter extends iFilter{

}

export interface iDateFilter extends iFilter{

}