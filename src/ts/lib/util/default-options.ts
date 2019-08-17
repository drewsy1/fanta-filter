import { DateFilter } from '../filters/date';
import { FantaFilterInput } from '../elements/input';
import { FantaFilterInputText, FantaFilterInputnoUiSlider } from '../elements/inputs';
import { FantaFilterItem } from '../elements/item';
import { FantaFilterRadioGroup, FantaFilterCheckboxGroup, FantaFilterButtonGroup } from '../elements/toggleGroups';
import { FantaFilterToggleGroup } from '../elements/toggleGroup';
import { iFantaOptions, iFantaFilterConstructor, iFantaElementConstructor } from '../interfaces';
import { isUndefined, isString } from 'util';
import { MatchFilter } from '../filters/match';
import { ValueFilter } from '../filters/value';

export const defaultOptions: iFantaOptions = {
    attributeNames: {
        root: 'data-fantafilter',
        group: 'group',
        selector: 'selector',
        comparer: 'comparer',
        operator: 'operator',
    },
    classNames: {
        root: 'js-fafi',
        parent: 'parent',
        input: 'input',
        item: 'item',
        hidden: 'hidden',
        toggleGroup: 'toggle-group',
    },
    inputTypes: ['INPUT'],
    InputComparerClasses: {
        date: (constructor: iFantaFilterConstructor) => new DateFilter(constructor),
        match: (constructor: iFantaFilterConstructor) => new MatchFilter(constructor),
        value: (constructor: iFantaFilterConstructor) => new ValueFilter(constructor),
    },
    FilterElementClasses: {
        inputs: (constructor: iFantaElementConstructor) => FantaFilterInput.create(constructor),
        items: (constructor: iFantaElementConstructor) => new FantaFilterItem(constructor),
        toggleGroup: (constructor: iFantaElementConstructor) => FantaFilterToggleGroup.create(constructor),
    },
    InputTypeClasses: {
        noUiSlider: (constructor: iFantaElementConstructor) => new FantaFilterInputnoUiSlider(constructor),
        text: (constructor: iFantaElementConstructor) => new FantaFilterInputText(constructor),
    },
    ToggleGroupTypeClasses: {
        button: (constructor: iFantaElementConstructor, childNodes: NodeList | HTMLCollection) =>
            new FantaFilterButtonGroup(constructor, childNodes),
        checkbox: (constructor: iFantaElementConstructor, childNodes: NodeList | HTMLCollection) =>
            new FantaFilterCheckboxGroup(constructor, childNodes),
        radio: (constructor: iFantaElementConstructor, childNodes: NodeList | HTMLCollection) =>
            new FantaFilterRadioGroup(constructor, childNodes),
    },
    ComparisonOperatorFunctions: {
        '>': (comparisonVal: any, objectVal: any) => objectVal > comparisonVal,
        '<': (comparisonVal: any, objectVal: any) => objectVal < comparisonVal,
        '>=': (comparisonVal: any, objectVal: any) => objectVal >= comparisonVal,
        '<=': (comparisonVal: any, objectVal: any) => objectVal <= comparisonVal,
        '===': (comparisonVal: any, objectVal: any) => objectVal === comparisonVal,
        '!==': (comparisonVal: any, objectVal: any) => objectVal !== comparisonVal,
        contains: contains,
        overlap: overlap,
    },
    getAttribute: (suffix?: string) =>
        getChildValue(defaultOptions.attributeNames, defaultOptions.attributeNames.root, suffix),
    getClass: (suffix?: string) => getChildValue(defaultOptions.classNames, defaultOptions.classNames.root, suffix),
};

function getChildValue(group: any, root?: string, suffix?: string) {
    root = root === undefined ? group['root'] : root;
    const groupKeys = Object.keys(group).filter(value => value !== 'root');
    const groupVals = Object.values(group).filter(value => value !== 'root');
    if (suffix === undefined) {
        return groupKeys.map(key => prependRoot(root, group[key])) as string[];
    } else if (typeof suffix === 'string' && groupKeys.includes(suffix)) {
        return prependRoot(root, group[suffix]) as string;
    } else if (typeof suffix === 'string' && groupVals.includes(suffix)) {
        return prependRoot(root, suffix) as string;
    } else return suffix as string;
}

const prependRoot = (root: string, suffix: string): string => `${root}-${suffix}`;

function contains(container: any[2], objectVal: any[2]) {
    container.sort((a: number, b: number) => a - b);
    objectVal.sort((a: number, b: number) => a - b);
    return objectVal.every((val: number | Date) => val >= container[0] && val <= container[1]);
}

function overlap(comparisonVal: any[2], objectVal: any[2]) {
    comparisonVal.sort((a: number, b: number) => a - b);
    objectVal.sort((a: number, b: number) => a - b);

    let compare1 = contains(comparisonVal, objectVal);
    let compare2 = objectVal.some((val: number) => contains(comparisonVal, [val]));
    let compare3 = comparisonVal.some((val: number) => contains(objectVal, [val]));

    return compare1 || compare2 || compare3;
}
