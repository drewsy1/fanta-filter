/**
 * Converts a KebabCase string to CamelCase and returns it
 *
 * @export
 * @param {string} input KebabCase string to be converted
 * @param {string} [root=''] Root term to be matched/removed
 * @returns A CamelCase string
 */
export function convertKebabToCamelCase(input: string, root: string = '') {
    root = root.length > 0 ? root + '|' : root;
    let replace = `(?:(?:${root}(?:\\v{0})(?: |-)([a-z])))`;
    let regex = new RegExp(replace, 'g');
    return input.replace(regex, (match, p1) => {
        return typeof p1 !== 'undefined' ? p1.toUpperCase() : '';
    });
}
