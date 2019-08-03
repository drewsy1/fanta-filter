import { Options } from "Interfaces";

export default interface Dependencies {
    configure: Function,
    context: HTMLElement | Document,
    defaultOptions: Options,
    createFantaFilterElement: Function
}