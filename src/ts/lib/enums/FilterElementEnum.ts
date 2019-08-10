import { FantaFilterInput, FantaFilterItem } from '../elements';
import { iFantaElementConstructor } from '../interfaces';

export const enum FilterElementType {
    input = 'inputs',
    item = 'items',
}

export const FilterElementClasses = {
    inputs: (constructor: iFantaElementConstructor) => new FantaFilterInput(constructor),
    items: (constructor: iFantaElementConstructor) => new FantaFilterItem(constructor),
};
