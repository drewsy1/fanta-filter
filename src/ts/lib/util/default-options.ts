import { iFantaOptions, iFantaFilterConstructor, iFantaElementConstructor } from '../interfaces';
import { isUndefined, isString } from 'util';
import { MatchFilter, TagFilter, DateFilter } from '../filters';
import { FantaFilterInput } from '../elements/input';
import { FantaFilterItem } from '../elements/item';
import { FantaFilterToggleGroup} from '../elements/toggleGroup';
import { FantaFilterInputText, FantaFilterInputDate } from '../elements/inputs';
import { FantaFilterRadioGroup, FantaFilterCheckboxGroup, FantaFilterButtonGroup } from '../elements/toggleGroups';

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
        toggleGroup: 'toggle-group'
    },
    inputTypes: ['INPUT'],
    InputComparerClasses: {
        date: (constructor: iFantaFilterConstructor) => new DateFilter(constructor),
        match: (constructor: iFantaFilterConstructor) => new MatchFilter(constructor),
        tag: (constructor: iFantaFilterConstructor) => new TagFilter(constructor),
    },
    FilterElementClasses: {
        inputs: (constructor: iFantaElementConstructor) => FantaFilterInput.create(constructor),
        items: (constructor: iFantaElementConstructor) => new FantaFilterItem(constructor),
        toggleGroup: (constructor: iFantaElementConstructor) => FantaFilterToggleGroup.create(constructor),
    },
    InputTypeClasses: {
        date: (constructor: iFantaElementConstructor) => new FantaFilterInputDate(constructor),
        text: (constructor: iFantaElementConstructor) => new FantaFilterInputText(constructor),
    },
    ToggleGroupTypeClasses: {
        button: (constructor: iFantaElementConstructor, childNodes: NodeList | HTMLCollection) => new FantaFilterButtonGroup(constructor, childNodes),
        checkbox: (constructor: iFantaElementConstructor, childNodes: NodeList | HTMLCollection) => new FantaFilterCheckboxGroup(constructor, childNodes),
        radio: (constructor: iFantaElementConstructor, childNodes: NodeList | HTMLCollection) => new FantaFilterRadioGroup(constructor, childNodes),
    },
    ComparisonOperatorFunctions:{
        ">": (comparisonVal: any, objectVal: any) => objectVal > comparisonVal,
        "<": (comparisonVal: any, objectVal: any) => objectVal < comparisonVal,
        ">=": (comparisonVal: any, objectVal: any) => objectVal >= comparisonVal,
        "<=": (comparisonVal: any, objectVal: any) => objectVal <= comparisonVal,
        "===": (comparisonVal: any, objectVal: any) => objectVal === comparisonVal,
        "!==": (comparisonVal: any, objectVal: any) => objectVal !== comparisonVal,
    },
    getAttribute: (suffix?: string) =>
        getChildValue(defaultOptions.attributeNames, defaultOptions.attributeNames.root, suffix),
    getClass: (suffix?: string) => getChildValue(defaultOptions.classNames, defaultOptions.classNames.root, suffix),
};

function getChildValue(group: any, root?: string, suffix?: string) {
    root = isUndefined(root) ? group['root'] : root;
    const groupKeys = Object.keys(group).filter(value => value !== 'root');
    const groupVals = Object.values(group).filter(value => value !== 'root');
    if (isUndefined(suffix)) {
        return groupKeys.map(key => prependRoot(root, group[key])) as string[];
    } else if (isString(suffix) && groupKeys.includes(suffix)) {
        return prependRoot(root, group[suffix]) as string;
    } else if (isString(suffix) && groupVals.includes(suffix)) {
        return prependRoot(root, suffix) as string;
    } else return suffix as string;
}

const prependRoot = (root: string, suffix: string): string => `${root}-${suffix}`;
