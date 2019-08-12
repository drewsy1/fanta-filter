import { iFantaFilterConstructor } from "./iFantaFilterConstructor";
import { iFantaElementConstructor } from "./iFantaElementConstructor";
import { iFantaFilter } from "./iFantaFilter";
import { iFantaElement } from "./iFantaElement";

/**
 * @description Describes options used throughout FantaFilter
 * @export
 * @interface iFantaOptions
 */
export interface iFantaOptions {
    attributeNames?: AttributeNames;
    classNames?: ClassNames;
    inputTypes?: string[];
    InputComparerClasses?: {[key:string]:(constructor: iFantaFilterConstructor) => any}
    FilterElementClasses?: {[key:string]:(constructor: iFantaElementConstructor) => any}
    getAttribute?: (suffix?:string) => any;
    getClass?: (suffix?:string) => any;
    [key: string]: any;
}
export interface AttributeNames {
    root?: string;
    group?: string;
    selector?: string;
    comparer?: string;
    [key: string]: any;
}
export interface ClassNames {
    root?: string;
    parent?: string;
    input?: string;
    item?: string;
    hidden?: string;
    [key: string]: any;
}
