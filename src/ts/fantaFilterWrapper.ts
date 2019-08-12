import { iFantaWrapper, iFantaOptions, iFantaElementConstructor } from './lib/interfaces';
import { iFantaWrapper_Base } from './lib/interfaces/iFantaWrapper';
import { FilterGroup } from './lib/filters';
import { iFantaWrapperConstructor } from './lib/interfaces/iFantaWrapperConstructor';
import stampit from 'stampit';
import { FantaFilterItem, FantaFilterInput } from './lib/elements';
import { isNodeList } from './lib/util';
import { isString } from 'util';

const Base = stampit.init(function() {
    var _options: iFantaOptions = null;
});

const Properties: iFantaWrapper_Base = {
    conf: {
        currentFilters: [],
    },
    statics: {
        CurrentFilters() {
            return this.compose.configuration.CurrentFilters;
        },
    },
    props: {
        eventType: null,
        filterGroup: null,
        inputs: null,
        items: null,
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
    init({ dependencies, parentNode, _userOptions }: iFantaWrapperConstructor, { stamp }) {
        const { configure, context, defaultOptions } = dependencies;
        const targetNode = isString(parentNode) ? context.querySelectorAll(parentNode) : parentNode;
        const configuration: any = stamp.compose.configuration;

        if (isNodeList(targetNode)) {
            return [].slice
                .call(targetNode)
                .map((element: HTMLElement) => stamp({ dependencies, parentNode: element, _userOptions }))
                .filter((x: HTMLElement) => x);
        }

        this.inputs = [];
        this.items = [];
        this._options = configure(defaultOptions, targetNode, _userOptions);
        this.parentNode = targetNode;
        this.name = targetNode.getAttribute(this._options.getAttribute('group'));
        this.eventType = `fafi.filter.${this.name}`;

        // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel factory function
        if (
            !targetNode.hasAttribute(this._options.getAttribute('group')) ||
            (configuration.currentFilters !== undefined &&
                configuration.currentFilters.find((filter: iFantaWrapper) => filter.name === this.name))
        ) {
            return null;
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
                this.inputs.push(FantaFilterInput(filterConstructorArgs));
            } else if (!elements.classList.contains(this._options.getClass('parent')))
                this.items.push(FantaFilterItem(filterConstructorArgs));
        });

        this.filterGroup = this.hasInputs()
            ? new FilterGroup(dependencies, this.eventType, this.inputs, this.items)
            : undefined;

        if (configuration.currentFilters === undefined) configuration.currentFilters = [];
        configuration.currentFilters.push(this);
    },
};
export const FantaFilterWrapper = stampit(Base, Properties);
