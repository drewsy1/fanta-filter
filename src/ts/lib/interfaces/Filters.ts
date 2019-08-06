import { FantaFilterElement, FantaFilterInput } from "./FantaFilterElement";

export interface FilterGroup{
    filters: Filter[],
    filteredItems: FantaFilterElement[],
    updateEvent: any,
    Update: () => void,
}

export interface Filter{
    input: FantaFilterInput,
    selector: string,
}

export interface MatchFilter extends Filter{

}

export interface TagFilter extends Filter{

}

export interface DateFilter extends Filter{

}