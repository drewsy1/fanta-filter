import { iFantaDependencies, iFantaOptions, iFantaWrapper } from "../interfaces";
import { isNodeList } from "./typetests";
import {FantaFilterWrapper} from "../../FantaFilterWrapper";
import { iFantaWrapperConstructor } from "../interfaces/iFantaWrapperConstructor";
import {isNull, isString, isUndefined} from 'util'

/**
     * @description Static method that wraps the default constructor to return null if an object is malformed/invalid.
     * @static
     * @param {iFantaDependencies} dependencies Variables passed in from higher context
     * @param {HTMLElement | string} target String selector representing a data-fantafilter-group HTML root object, or the object itself
     * @param {iFantaOptions} [_userOptions={}] Optional user override options
     * @returns A completed FantaFilterWrapper object or objects. Null if object is invalid.
     * @memberof FantaFilterWrapper
     */
    export function createFantaFilterWrappers(
        dependencies: iFantaDependencies,
        target: HTMLElement | string,
        _userOptions: iFantaOptions = {},
    ) {
        const { context } = dependencies;
        const parentNode = isString(target) ? context.querySelectorAll(target) : target;

        // If multiple parent nodes, create multiple FantaFilterWrappers and return those instead
        if (isNodeList(parentNode)) {
            return [].slice
                .call(parentNode)
                .map((element: HTMLElement) => createFantaFilterWrappers(dependencies, element, _userOptions))
                .filter((x: HTMLElement) => x);
        }

        let newFilterWrapperConstructor: iFantaWrapperConstructor = {dependencies, parentNode, _userOptions}

        let newFantaFilter:iFantaWrapper = FantaFilterWrapper(newFilterWrapperConstructor);

        return (isNull(newFantaFilter)) ? newFantaFilter : undefined;
    };