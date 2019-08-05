/**
 * Object that describes a set of options for FantaFilter
 *
 * @export
 * @interface Options
 */
export interface Options {
    attributeNames?: AttributeNames;
    classNames?: ClassNames;
    inputTypes?: string[];
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
    parent?: string;
    input?: string;
    item?: string;
    hidden?: string;
    [key: string]: any;
}
