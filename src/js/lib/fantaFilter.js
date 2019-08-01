const CurrentFilters = [];

/**
 * Factory method that creates and returns an object from protoFantaFilter
 * @param {*} dependencies Variables passed in from higher context
 * @param {*} target String selector representing an HTML object, or the object itself
 * @param {Object} userOptions Optional user override options
 */
export function createFantaFilter(dependencies,target,userOptions = {}) {
    const { configure, context, defaultOptions } = dependencies;
    const parents = typeof target === `string`
            ? context.querySelectorAll(target)
            : target;
    
    // If multiple parent nodes, create multiple FantaFilters and return those instead
    if (parents.length > 1) {
        return [].slice.call(parents)
            .map(element => createFantaFilter(dependencies, element, userOptions))
            .filter(x => x);
    }

    let parentNode = parents[0] || parents;
    let options = configure(parentNode, userOptions, defaultOptions);

    // If the parent node doesn't have the specified group attribute, cancel factory function
    if(!parentNode.hasAttribute(options.attributeNames.group)){
        return;
    }
    
    let name = parentNode.getAttribute(options.attributeNames.group);
    let inputs = Array.from(context.querySelectorAll(`.${options.classNames.input}[${options.attributeNames.group}=${name}]`))
    let items = Array.from(parentNode.querySelectorAll(`.${options.classNames.item}[${options.attributeNames.group}=${name}]`))
    let groupWithSameName = CurrentFilters.find(filter => filter.name === name)

    // If a FantaFilter with the same filter group already exists, merge this one's items with that one and then cancel factory
    if(groupWithSameName){
        groupWithSameName.items = groupWithSameName.items.concat(items);
        return
    }

    parentNode.setAttribute(options.rootAttribute, true);

    const FantaFilter = protoFantaFilter(parentNode,options,name,inputs,items);

    CurrentFilters.push(FantaFilter);

    return FantaFilter;
}

/**
 * Prototype object to be processed by the createFantaFilter factory function
 * @param {HTMLElement} parentNode HTML element parent of filterable elements
 * @param {Object} options Options to control the filter object
 * @param {string} name Name of filter
 * @param {Array} inputs HTML input elements that control filtering
 * @param {Array} items HTML elements to be filtered
 */
export const protoFantaFilter = (parentNode,options,name,inputs,items) => ({
    parentNode,
    options,
    name,
    inputs,
    items,
    get CurrentFilters() { return CurrentFilters },
    get hasInputs() { return this.inputs !== null },
    get hasItems() { return items !== null }
})

// export class FantaFilter{
//     constructor(dependencies,target,userOptions = {}){
//         const { configure, context, defaultOptions } = dependencies;
//         const parents = typeof target === `string`
//             ? context.querySelectorAll(target)
//             : target;

//         if (parents.length > 1) {
//             let temp = [].slice.call(parents)
//                 .map(element => new FantaFilter(dependencies, element, userOptions))
//                 .filter(x => x instanceof FantaFilter);

//             return temp;
//         }

//         context = context;
//         parentNode = parents[0] || parents;
//         options = configure(parentNode, userOptions, defaultOptions);

//         if(!parentNode.hasAttribute(options.attributeNames.group)){
//             return []
//         }
        
//         name = parentNode.getAttribute(options.attributeNames.group);

//         inputs = Array.from(context.querySelectorAll(`.${options.classNames.input}[${options.attributeNames.group}=${name}]`))
//         hasInputs = inputs !== null;
//         items = Array.from(parentNode.querySelectorAll(`.${options.classNames.item}[${options.attributeNames.group}=${name}]`))
//         hasItems = items !== null;

//         let groupWithSameName = CurrentFilters.find(filter => filter.name === name)
//         if(groupWithSameName){
//             groupWithSameName.items = groupWithSameName.items.concat(items);

//             return []
//         }

//         parentNode.setAttribute(options.rootAttribute, true);

//         CurrentFilters.push(this);
//     }

//     static get CURRENTFILTERS() {
//         return CurrentFilters;
//     }
// }
// CurrentFilters = [];