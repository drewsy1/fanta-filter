import { FantaFilterInput, FantaFilterItem } from '../elements';

export enum FilterElementType {
    input = 'inputs',
    item = 'items',
}

export const FilterElementClasses = {
    inputs: FantaFilterInput,
    items: FantaFilterItem,
};
