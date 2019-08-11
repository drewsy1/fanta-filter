import { iFantaWrapper, iFantaOptions, iFantaElementConstructor } from './lib/interfaces';
import { iFantaWrapper_Base } from './lib/interfaces/iFantaWrapper';
import { FilterGroup } from './lib/filters';
import { iFantaWrapperConstructor } from './lib/interfaces/iFantaWrapperConstructor';
import stampit from 'stampit';
import { FantaFilterInput, FantaFilterItem } from './lib/elements';

const Base = stampit.init(function() {
    var _options: iFantaOptions = null;
});

const Properties: iFantaWrapper_Base = {
    statics: {
        CurrentFilters: [],
    },
    props: {
        eventType: null,
        filterGroup: null,
        inputs: [],
        items: [],
        name: null,
        parentNode: null,
    },
    methods: {
        hasInputs() {
            return !!this.inputs.length;
        },
        hasItems() {
            return !!this.items.length;
        },
    },
    init({ dependencies, parentNode, _userOptions }: iFantaWrapperConstructor) {
        const { configure, context, defaultOptions } = dependencies;
        this._options = configure(defaultOptions, parentNode, _userOptions);

        this.parentNode = parentNode;
        this.name = parentNode.getAttribute(this._options.getAttribute('group'));
        this.eventType = `fafi.filter.${this.name}`;

        // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel factory function
        if (
            !parentNode.hasAttribute(this._options.getAttribute('group')) ||
            (this.CurrentFilters !== undefined &&
                this.CurrentFilters.find((filter: iFantaWrapper) => filter.name === this.name))
        ) {
            this.name = null;
            return;
        }

        let domElements = context.querySelectorAll(`[${this._options.getAttribute('group')}=${this.name}]`);

        domElements.forEach((elements: HTMLElement) => {
            const filterConstructorArgs: iFantaElementConstructor = {
                dependencies,
                elements,
                parentName: this.name,
                eventType: this.eventType,
                _userOptions,
            };
            if (elements.tagName.toLowerCase().match('input')) {
                this.inputs.push(new FantaFilterInput(filterConstructorArgs));
            } else if (!elements.classList.contains(this._options.getClass('parent')))
                this.items.push(new FantaFilterItem(filterConstructorArgs));
        });

        this.filterGroup = this.hasInputs()
            ? new FilterGroup(dependencies, this.eventType, this.inputs, this.items)
            : undefined;

        if (this.CurrentFilters === undefined) this.CurrentFilters = [];
        this.CurrentFilters.push(this);
    },
};
const FantaFilterWrapper = stampit(Base, Properties);

export default FantaFilterWrapper;

// /**
//  * Class that represents a data-fantafilter-group
//  * @export
//  * @class FantaFilterWrapper
//  * @implements {iFilterWrapper}
//  */
// export default class _FantaFilterWrapper implements iFantaWrapper {
//     filterGroup: iFantaFilterGroup;
//     inputs: iFantaInput[] = [];
//     items: iFantaItem[] = [];
//     parentNode: HTMLElement;
//     name: string;
//     eventType: string;
//     protected _options: iFantaOptions;
//     static CurrentFilters: FantaFilterWrapper[];

//     /**
//      * Creates an instance of FantaFilterWrapper.
//      * @param {iFilterDependencies} dependencies Variables passed in from higher context
//      * @param {HTMLElement} parentNode A data-fantafilter-group root object
//      * @param {iFantaOptions} [_userOptions={}] Optional user override options
//      * @memberof FantaFilterWrapper
//      */
//     constructor({ dependencies, parentNode, _userOptions }: iFantaWrapperConstructor) {
//         const { configure, context, defaultOptions } = dependencies;
//         this._options = configure(defaultOptions, parentNode, _userOptions);

//         this.parentNode = parentNode;
//         this.name = parentNode.getAttribute(this._options.getAttribute('group'));
//         this.eventType = `fafi.filter.${this.name}`;

//         // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel factory function
//         if (
//             !parentNode.hasAttribute(this._options.getAttribute('group')) ||
//             (FantaFilterWrapper.CurrentFilters !== undefined &&
//                 FantaFilterWrapper.CurrentFilters.find((filter: FantaFilterWrapper) => filter.name === this.name))
//         ) {
//             this.name = null;
//             return;
//         }

//         this.filterGroup = this.hasInputs
//             ? new FilterGroup(dependencies, this.eventType, this.inputs, this.items)
//             : undefined;

//         if (FantaFilterWrapper.CurrentFilters === undefined) FantaFilterWrapper.CurrentFilters = [];
//         FantaFilterWrapper.CurrentFilters.push(this);
//     }

//     /**
//      * @description Returns true if this FantaFilterWrapper contains input elements
//      * @readonly
//      * @memberof FantaFilterWrapper
//      */
//     public get hasInputs() {
//         return !!this.inputs.length;
//     }

//     /**
//      * @description Returns true if this FantaFilterWrapper contains item elements
//      * @readonly
//      * @memberof FantaFilterWrapper
//      */
//     public get hasItems() {
//         return !!this.items.length;
//     }
// }
