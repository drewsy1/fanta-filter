import configure from './lib/configure';
import defaultOptions from './lib/default-options';
import FantaFilter from './lib/fantaFilter';

export default (selector, userOptions, context = document) =>
    new FantaFilter({configure,context,defaultOptions},selector,userOptions);