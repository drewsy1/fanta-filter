import { defaultOptions, asyncForEach } from '../../../src/ts/lib/util';
import { iFantaOptions } from 'src/ts/lib/interfaces';
import should from 'should';

describe('default-options', function() {
    let testOptions: iFantaOptions;
    before('Populate testOptions', async function() {
        testOptions = Object.assign(defaultOptions);
    });
    describe('getAttribute', function() {
        it('Should retrieve an attribute given a key', function() {
            let retrievedAttribute = testOptions.getAttribute('group');
            should(retrievedAttribute).equal(`${testOptions.attributeNames.root}-${testOptions.attributeNames.group}`);
        });

        it('Should retrieve an array of attributes if given no key', function() {
            let retrievedAttributes: string[] = testOptions.getAttribute();
            let attributeNames = Object.entries(testOptions.attributeNames)
                .filter(entry => entry[0] !== 'root')
                .map(entry => `${testOptions.attributeNames.root}-${entry[1]}`);
            should(retrievedAttributes).deepEqual(attributeNames);
        });
    });

    describe('getClass', function() {
        it('Should retrieve a class given a key', async function() {
            let retrievedClass = testOptions.getClass('parent');
            should(retrievedClass).equal(`${testOptions.classNames.root}-${testOptions.classNames.parent}`);
        });

        it('Should retrieve an array of classes if given no key', async function() {
            let retrievedClasses = testOptions.getClass();
            let classNames = Object.entries(testOptions.classNames)
                .filter(entry => entry[0] !== 'root')
                .map(entry => `${testOptions.classNames.root}-${entry[1]}`);
            should([retrievedClasses]).containDeep([classNames]);
        });
    });
});
