import { Options } from "Interfaces";

export interface Dependencies {
    configure: Function,
    context: HTMLElement | Document,
    defaultOptions: Options,
    [key:string]:any
}