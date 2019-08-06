import { FantaFilterElement, FantaFilterInput } from "./FantaFilterElement";
import FantaFilterWrapper from "./FantaFilterWrapper";

export interface Filter{
    filterGroup: FantaFilterWrapper,
    input: FantaFilterInput,
}

export interface MatchFilter extends Filter{

}

export interface TagFilter extends Filter{

}

export interface DateFilter extends Filter{

}