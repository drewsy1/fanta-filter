/**
 * @description Describes options used throughout FantaFilter
 * @export
 * @interface iFantaOptions
 */
export interface iFantaOptions {
    attributeNames?: AttributeNames;
    classNames?: ClassNames;
    inputTypes?: string[];
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
