import {filterState} from './filterState';
import * as util from 'fantafilter-util';

/**
 * Class representing a group of filters which share the same group of target items
 */
export class filterGroup {
    /**
     * Initial filterGroup constructor
     * @param {string} filterGroup Name of filter group (reflected in HTML as attribute 'data-fafi-filter-group')
     * @param {*} filterGroupItems Collection of children of an HTML element of the "fafi-filter-item-group" class
     * @param {*} filterGroupControls Collection of HTML elements of the "fafi-filter-item-control" class
     */
    constructor(filterGroup, filterGroupItems = null, filterGroupControls = null) {
        this.groupName = filterGroup;
        this.items = this.getFilterGroupObjects(filterGroupItems,".fafi-filter-item-group[data-fafi-filter-group="+this.groupName+"]");
        this.controls = this.getFilterGroupObjects(filterGroupControls,".fafi-filter-item-control[data-fafi-filter-group="+this.groupName+"]");
        this.state = new filterState()
    }

    /**
     * Returns a flat array of HTML objects that match a specified CSS selector
     * @param {*} inputItems Items to be filtered/flattened
     * @param {string} selector CSS selector used to filter items
     */
    getFilterGroupObjects(inputItems, selector = ""){
        return inputItems 
            ? inputItems 
            : document.querySelectorAll(selector)[0]
                ? document.querySelectorAll(selector)[0].children.length > 1
                    ? this.util.combineHtmlCollectionsToArray(document.querySelectorAll(selector)[0].children)
                    : this.util.combineHtmlCollectionsToArray(document.querySelectorAll(selector)[0])
                : null
    }
}

filterGroup.prototype.util = util;