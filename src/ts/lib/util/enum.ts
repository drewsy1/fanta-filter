/**
 * @description
 * @export
 * @template T
 * @param {T} enumerator
 * @param {*} value
 * @param {*} [fallbackValue]
 * @returns
 */
export function getEnumMember<T>(enumerator: T, value: any, fallbackValue: any) {
    let result_1, result_2: T[Extract<keyof T, string>];
    result_1 = enumContains(enumerator, value);
    result_2 = enumContains(enumerator, fallbackValue);
    return !!result_1 ? result_1 : result_2;
}

/**
 * @description
 * @template T
 * @param {T} enumerator
 * @param {*} value
 * @returns
 */
function enumContains<T>(enumerator: T, value: any) {
    for (let enumMember in enumerator) {
        if (enumMember == value) return enumerator[enumMember];
    }
    return null;
}

/**
 * @description Returns an instance of a class from an object of key/value pairs of object/classes. Uses destructured classParams object to create classes generically.
 * @export
 * @param {*} classObject Object of key/value pairs from which to find the desired class.
 * @param {*} enumeratorValue Key used to access the desired class.
 * @param {object} classParams Destructured params passed to class constructor.
 * @returns A new instance of the desired class.
 */
export function createClassFromEnumVal(classObject: any, enumeratorValue: any, classParams: object) {
    return new classObject[enumeratorValue](classParams);
}
