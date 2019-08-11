import { iFantaElement } from './iFantaElement';
import { iFantaFilterGroup } from './iFantaFilterGroup';
import { iFantaOptions } from './iFantaOptions';
import { iFantaWrapperConstructor } from './iFantaWrapperConstructor';

/**
 * @description Describes the FilterWrapper class
 * @export
 * @interface iFantaWrapper
 */
export interface iFantaWrapper {
    parentNode: HTMLElement;
    name: string;
    inputs: iFantaElement[];
    items: iFantaElement[];
    filterGroup: iFantaFilterGroup;
    eventType: string;
    hasInputs: boolean;
    hasItems: boolean;
    CurrentFilters: iFantaWrapper[];
    _options: iFantaOptions;
}

export interface iFantaWrapper_Base {
    props: iFantaWrapper_Base_props;
    statics: iFantaWrapper_Base_statics;
    methods: iFantaWrapper_Base_methods;
    init: ({ dependencies, parentNode, _userOptions }: iFantaWrapperConstructor) => void;
}


interface iFantaWrapper_Base_statics {
    CurrentFilters: iFantaWrapper[];
}

interface iFantaWrapper_Base_props {
    eventType: string;
    filterGroup: iFantaFilterGroup;
    inputs: iFantaElement[];
    items: iFantaElement[];
    name: string;
    parentNode: HTMLElement;
}

interface iFantaWrapper_Base_methods {
    hasInputs: () => boolean;
    hasItems: () => boolean;
}
