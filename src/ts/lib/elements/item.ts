import {
    iFantaElementConstructor,
    iFantaItemFactory,
} from '../interfaces';
import { isNodeList } from '../util';
import { FantaFilterElement } from './element';
import { isUndefined } from 'util';
import stampit from 'stampit';

const Properties = stampit({
    methods:{
        hidden(isHidden?: boolean) {
            this.element.hidden = isUndefined(isHidden) ? this.element.hidden : isHidden;
            return this.element.hidden;
        }
    },
    init({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
        if (isNodeList(elements)) {
            return [].slice
                .call(Array.from(elements))
                .map((_element: HTMLElement) => this({ dependencies, elements, parentName, eventType, _userOptions }))
                .filter((x: HTMLElement) => x);
        }
        this.kind="item";
    },
});

export const FantaFilterItem: iFantaItemFactory = stampit(FantaFilterElement, Properties);