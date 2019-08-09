import { iFantaOptions } from './iFantaOptions';
import {iFantaDependencies} from './iFantaDependencies';

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
