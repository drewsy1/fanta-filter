import {Configure as configure, DefaultOptions as defaultOptions} from 'Util';
import createFantaFilterWrapper from './fantaFilterWrapper';
import createFantaFilterElement from './fantaFilterElement';
import { Options } from 'Interfaces';

export default (selector: string, userOptions: Options, context: HTMLElement | Document = document) =>
    createFantaFilterWrapper({ configure, context, defaultOptions, createFantaFilterElement }, selector, userOptions);
