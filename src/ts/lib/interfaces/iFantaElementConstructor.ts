import { iFantaDependencies, iFantaOptions } from '.';

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
