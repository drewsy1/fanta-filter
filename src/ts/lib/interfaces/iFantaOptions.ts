import { iFantaDependencies } from './iFantaDependencies';
import { iFantaManipulator } from './iFantaElement';

/**
 * @description Describes options used throughout FantaFilter
 * @export
 * @interface iFantaOptions
 */
export interface iFantaOptions {
    attributeNames?: AttributeNames;
    classNames?: ClassNames;
    inputTypes?: string[];
    ComparisonOperatorFunctions?: { [key: string]: (comparisonVal: any, objectVal: any) => boolean};
    InputComparerClasses?: { [key: string]: (constructor: iFantaFilterConstructor) => any };
    FilterElementClasses?: { [key: string]: (constructor: iFantaElementConstructor) => any };
    InputTypeClasses?: { [key: string]: (constructor: iFantaElementConstructor) => any };
    ToggleGroupTypeClasses?: { [key: string]: (constructor: iFantaElementConstructor, children: NodeList | HTMLCollection) => any };
    getAttribute?: (suffix?: string) => any;
    getClass?: (suffix?: string) => any;
    [key: string]: any;
}

export interface AttributeNames {
    root?: string;
    group?: string;
    selector?: string;
    comparer?: string;
    operator?: string;
    [key: string]: any;
}

export interface ClassNames {
    root?: string;
    parent?: string;
    input?: string;
    item?: string;
    hidden?: string;
    toggleGroup?: string;
    [key: string]: any;
}

export interface iFantaFilterConstructor {
    dependencies: iFantaDependencies;
    input: iFantaManipulator;
    _userOptions?: iFantaOptions;
}

/**
 * @description Describes the constructor arguments of FantaFilterWrapper
 * @export
 * @interface iFantaWrapperConstructor
 */
export interface iFantaWrapperConstructor {
    dependencies: iFantaDependencies;
    parentNode: HTMLElement;
    _userOptions?: iFantaOptions;
}

/**
 * @description Describes the constructor arguments of FantaFilterElements
 * @export
 * @interface iFantaElementConstructor
 */
export interface iFantaElementConstructor {
    dependencies: iFantaDependencies;
    elements: HTMLElement;
    parentName: string;
    eventType: string;
    _userOptions: iFantaOptions;
}
