import { FantaFilterItem, FantaFilterInput } from '../elements';
import { iFantaElementConstructor } from '../interfaces';

export const enum FilterElementType {
    input = 'inputs',
    item = 'items',
}

export const FilterElementClasses = {
    inputs: (constructor: iFantaElementConstructor) => FantaFilterInput(constructor),
    items: (constructor: iFantaElementConstructor) => FantaFilterItem(constructor),
};
