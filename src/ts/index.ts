import configure from './lib/configure';
import defaultOptions from './lib/default-options';
import createFantaFilter from './fantaFilter';
import createFantaFilterElement from './fantaFilterElement';
import { Options } from 'Interfaces';

export default (selector: string, userOptions: Options, context: HTMLElement | Document = document) =>
    createFantaFilter({ configure, context, defaultOptions, createFantaFilterElement }, selector, userOptions);
