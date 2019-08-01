export default class FantaFilter{
    constructor(dependencies,target,userOptions = {}){
        const { configure, context, defaultOptions } = dependencies;
        const parents = typeof target === `string`
            ? context.querySelectorAll(target)
            : target;

        if (parents.length > 1) {
            let temp = [].slice.call(parents)
                .map(element => new FantaFilter(dependencies, element, userOptions))
                .filter(x => x instanceof FantaFilter);

            return temp;
        }

        this.context = context;
        this.parentNode = parents[0] || parents;
        this.options = configure(this.parentNode, userOptions, defaultOptions);

        if(!this.parentNode.hasAttribute(this.options.attributeNames.group)){
            return []
        }
        
        this.name = this.parentNode.getAttribute(this.options.attributeNames.group);

        this.inputs = Array.from(this.context.querySelectorAll(`.${this.options.classNames.input}[${this.options.attributeNames.group}=${this.name}]`))
        this.hasInputs = this.inputs !== null;
        this.items = Array.from(this.parentNode.querySelectorAll(`.${this.options.classNames.item}[${this.options.attributeNames.group}=${this.name}]`))
        this.hasItems = this.items !== null;

        let groupWithSameName = FantaFilter.CurrentFilters.find(filter => filter.name === this.name)
        if(groupWithSameName){
            groupWithSameName.items = groupWithSameName.items.concat(this.items);

            return []
        }

        this.parentNode.setAttribute(this.options.rootAttribute, true);

        FantaFilter.CurrentFilters.push(this);
    }

    static get CURRENTFILTERS() {
        return FantaFilter.CurrentFilters;
    }
}
FantaFilter.CurrentFilters = [];