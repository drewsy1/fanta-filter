import { expect } from 'chai';
import { mocks } from 'mock-browser';
import * as fs from 'fs';
import * as path from 'path';

import * as Interface from '../../src/ts/lib/interfaces/index';
import * as Util from '../../src/ts/lib/util/index';

import configure from '../../src/ts/configure';
import defaultOptions from '../../src/ts/default-options';
import createFantaFilter from '../../src/ts/fantaFilter';
import createFantaFilterElement from '../../src/ts/fantaFilterElement';

const mockBrowser = new mocks.MockBrowser();
const document = mockBrowser.getDocument();
const defaultDependencies: Interface.Dependencies = {
    configure,
    context: document,
    defaultOptions,
    createFantaFilterElement,
};

const externalHTMLPath = path.resolve(__dirname, 'fantaFilter.spec.html').replace(/\\/g, '/');
// 'C:/Users/dreww/src/Git/fanta-filter/test/unit/fantaFilter.spec.html'

const context: HTMLElement = document.createElement('div');
context.innerHTML = fs.readFileSync(externalHTMLPath, 'utf8');
const dependencies: Interface.Dependencies = Object.assign({}, defaultDependencies, { context });
const fantaFilterInstance: Interface.FantaFilter[] = [].concat(createFantaFilter(dependencies, '.js-fafi'));
const fantaFilter: Interface.FantaFilter = fantaFilterInstance[0];

describe('FantaFilter', function() {
    describe('fantaFilter.js', function() {
        describe('FantaFilter', function() {
            describe('createFantaFilter()', function() {
                it('Should be a function', function() {
                    expect(createFantaFilter).to.be.a('function');
                });

                it('Should create a usable instance', function() {
                    expect(fantaFilter).to.not.be.undefined;
                });

                it("Should instantiate and find instances of CSS selector '.js-fafi'", function() {
                    expect(fantaFilterInstance).to.exist;
                    expect(fantaFilterInstance).to.not.be.null;
                });

                it('Should combine filters (and their elements) with the same group name', function() {
                    let testGroup2Filters = fantaFilter.CurrentFilters.filter(item => item.name == 'testGroup2');
                    let testGroup2Elements = Array.from(
                        context.querySelectorAll('[data-fantafilter-group=testGroup2]:not(div)'),
                    );
                    expect(testGroup2Filters).to.not.have.lengthOf.greaterThan(1);
                    let testGroup2Elements_Actual = testGroup2Filters[0].items
                        .map(item => item.element)
                        .concat(testGroup2Filters[0].inputs.map(item => item.element));
                    expect(testGroup2Elements_Actual)
                        .to.contain.members(testGroup2Elements)
                        .and.have.lengthOf(testGroup2Elements.length);
                });
            });
            describe('protoFantaFilter()', function() {
                describe('get CurrentFilters()', function() {
                    it('Should return an array of all active FantaFilter instances', function() {
                        expect(fantaFilterInstance).to.have.lengthOf(2);
                        expect(fantaFilter.CurrentFilters).to.have.lengthOf(2);
                    });
                });

                describe('items', function() {
                    it('Should contain js-fafi-item objects of matching group', function() {
                        let fantaFilterItems1 = Array.from(
                            context.querySelectorAll('span[data-fantafilter-group=testGroup1]'),
                        );
                        expect(fantaFilter.items.map(item => item.element)).to.contain.members(fantaFilterItems1);
                    });
                });
            });
        });
    });
    describe('fantaFilterElement.js', function() {
        describe('FantaFilterElement', function() {
            describe('createFantaFilterElement()', function() {});
            describe('protoFantaFilterElement()', function() {});
        });
    });
    describe('lib', function() {
        describe('util', function() {
            describe('dom', function() {
                describe('convertAttributesToObject()', function() {
                    it('Should ', function() {
                        let attributesOriginal = context.querySelector('[title="testGroup1, Input 0"]').attributes;
                        let attributesLength = attributesOriginal.length;
                        let attributesObject = Util.DOM.convertAttributesToObject(attributesOriginal, defaultOptions);
                        expect(attributesObject).to.contain;
                    });
                });
                describe('isNodeList()', function() {});
            });
            describe('string', function() {
                describe('convertKebabToCamelCase()', function() {
                    it('Should convert a KebabCase string to CamelCase (Default root specification)', function() {
                        let testString = 'attribute-value';

                        expect(Util.String.convertKebabToCamelCase(testString)).to.equal('attributeValue');
                    });
                    it('Should convert a KebabCase string to CamelCase (Manual root specification)', function() {
                        let testRoot = 'data-test-';
                        let testString = testRoot + 'attribute-value';

                        expect(Util.String.convertKebabToCamelCase(testString, testRoot)).to.equal('attributeValue');
                    });
                });
            });
            describe('typetests', function() {});
        });
    });
});
