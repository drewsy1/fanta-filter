import configure from './lib/configure';
import defaultOptions from './lib/default-options';
import createFantaFilter from './lib/fantaFilter';
import createFantaFilterElement from './lib/fantaFilterElement';

export default (selector, userOptions, context = document) =>
    createFantaFilter({configure,context,defaultOptions,createFantaFilterElement},selector,userOptions);