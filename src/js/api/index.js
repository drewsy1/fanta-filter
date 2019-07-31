import * as util from 'fantafilter-util';

/**
 * Base fantaFilter object constructor
 * @param {*} options
 */
const fantaFilter = function(options) {
    this._init(options);
};

fantaFilter.util = util;
fantaFilter.data = '__fantaFilter__';
fantaFilter.prefix = 'fafi-';
fantaFilter.options = {};

export default fantaFilter;