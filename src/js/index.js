import configure from './lib/configure';
import defaultOptions from './lib/default-options';
import createFantaFilter from './lib/fantaFilter';

export default (selector, userOptions, context = document) =>
    createFantaFilter({configure,context,defaultOptions},selector,userOptions);