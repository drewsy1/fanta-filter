import {filterGroup} from '../core/index'
 
/**
 * Initializes fantaFilter filter groups from HTML elements
 * @param {fantaFilter} fantaFilter fantaFilter passed along from initial construction
 */
export default function (fantaFilter) {

    fantaFilter.filterGroups = {};

    if(document.body) init();

    function init() {
        let fantaFilterGroups = [];
        fantaFilterGroups = fantaFilterGroups.concat(fantaFilter.util.getUniqueValuesFromAttributes('data-' + fantaFilter.prefix + 'filter-group'));
        fantaFilterGroups.forEach(dfg => {
            fantaFilter.filterGroups[dfg] = new filterGroup(dfg);
        })

        fantaFilter._initialized = true;
    }

}