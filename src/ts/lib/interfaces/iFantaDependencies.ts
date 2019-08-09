import { iFantaOptions } from "Interfaces";

/**
 * @description Describes the commonly-used dependencies object
 * @export
 * @interface iFantaDependencies
 */
export interface iFantaDependencies {
    configure: Function,
    context: HTMLElement | Document,
    defaultOptions: iFantaOptions,
    [key:string]:any
}