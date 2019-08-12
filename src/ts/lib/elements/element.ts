import { iFantaElement, iFantaOptions, iFantaElementConstructor, iFantaElementBase, iFantaElementFactory } from '../interfaces';
import { configure, convertAttributesToObject } from '../util';
import stampit from 'stampit';

const PrivateVars = stampit.init(function() {
    var _options: iFantaOptions = null;
});

const Properties = stampit({
    props:{
        kind: null,
        attributes: null,
        element: null,
        eventType: null,
        groupName: null
    },
    methods:{
        
        tagName(){return this.element.tagName}
    },
    init({ dependencies, elements, parentName, eventType, _userOptions }: iFantaElementConstructor) {
                const {defaultOptions } = dependencies;
                this._options = configure(defaultOptions,elements, _userOptions);
                this.attributes = convertAttributesToObject(elements.attributes, this._options);
                this.groupName = parentName;
                this.eventType = eventType;
                this.element = elements;
            }
    
})

export const FantaFilterElement: iFantaElementFactory = stampit(PrivateVars, Properties);