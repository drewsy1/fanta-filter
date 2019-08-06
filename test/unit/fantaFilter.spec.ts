import { expect } from 'chai';
import { mocks } from 'mock-browser';
import * as fs from 'fs';
import * as path from 'path';

import * as Interface from 'Interfaces';
import {
    configure,
    defaultOptions,
    convertAttributesToObject,
    isNodeList,
    convertKebabToCamelCase,
} from 'Util';

import createFantaFilterWrapper from '../../src/ts/fantaFilterWrapper';
import createFantaFilterElement from '../../src/ts/fantaFilterElement';

function CustomEvent(event: string, params?: any) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt: CustomEvent = <any>document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
}

const mockBrowser = new mocks.MockBrowser();
const document = mockBrowser.getDocument();
const window = mockBrowser.getWindow();
window.CustomEvent = <any>CustomEvent;
window.CustomEvent.prototype = window.Event.prototype;
const defaultDependencies: Interface.Dependencies = {
    configure: configure,
    context: document,
    defaultOptions: defaultOptions,
    createFantaFilterElement,
    window,
};

const externalHTMLPath = path.resolve(__dirname, 'fantaFilter.spec.html').replace(/\\/g, '/');

const context: HTMLElement = document.createElement('div');
context.innerHTML = fs.readFileSync(externalHTMLPath, 'utf8');
const dependencies: Interface.Dependencies = Object.assign({}, defaultDependencies, { context });
const fantaFilterWrapperInstance: Interface.FantaFilterWrapper[] = [].concat(
    createFantaFilterWrapper(dependencies, '.js-fafi'),
);
const fantaFilterWrapper: Interface.FantaFilterWrapper = fantaFilterWrapperInstance[0];

describe('fantaFilterWrapper.js', function() {
    describe('createfantaFilterWrapper()', function() {
        it('Should be a function', function() {
            expect(createFantaFilterWrapper).to.be.a('function');
        });

        it('Should create a usable instance', function() {
            expect(fantaFilterWrapper).to.not.be.undefined;
        });

        it("Should instantiate and find instances of CSS selector '.js-fafi'", function() {
            expect(fantaFilterWrapperInstance).to.exist;
            expect(fantaFilterWrapperInstance).to.not.be.null;
        });

        it('Should combine filters (and their elements) with the same group name', function() {
            let testGroup2Filters = fantaFilterWrapper.CurrentFilters.filter(item => item.name == 'testGroup2');
            let testGroup2Elements = Array.from(context.querySelectorAll('[data-fantafilter-group=testGroup2]'));
            let testGroup2Elements_Actual = testGroup2Filters[0].items
                .map(item => item.element)
                .concat(testGroup2Filters[0].inputs.map(item => item.element));

            expect(testGroup2Filters).to.not.have.lengthOf.greaterThan(1);
            expect(testGroup2Elements_Actual)
                .to.contain.members(testGroup2Elements)
                .and.have.lengthOf(testGroup2Elements.length);
        });
    });
    describe('protofantaFilterWrapper', function() {
        describe('get CurrentFilters', function() {
            it('Should return an array of all active FantaFilterWrapper instances', function() {
                expect(fantaFilterWrapperInstance).to.have.lengthOf(2);
                expect(fantaFilterWrapper.CurrentFilters).to.have.lengthOf(2);
            });
        });

        describe('items', function() {
            it('Should contain js-fafi-item objects of matching group', function() {
                let fantaFilterItems1 = Array.from(context.querySelectorAll('span[data-fantafilter-group=testGroup1]'));
                expect(fantaFilterWrapper.items.map(item => item.element)).to.contain.members(fantaFilterItems1);
            });
        });
    });
});
describe('fantaFilterElement.js', function() {
    describe('createFantaFilterElement()', function() {
        it('Should be a function', function() {
            expect(createFantaFilterElement).to.be.a('function');
        });

        it('Should create a usable instance', function() {
            expect(fantaFilterWrapper.items[0]).to.not.be.undefined;
        });

        it('Should detect inputs and return them as FantaFilterInputs', function() {
            expect(fantaFilterWrapper.inputs).to.exist;
            expect(fantaFilterWrapper.inputs.length).to.equal(1);
        });
    });
    describe('protoFantaFilterElement()', function() {
        describe('get hidden', function() {
            it('Should return true if an element contains the js-fafi-hidden class', function() {
                expect(fantaFilterWrapper.items[0].hidden).to.equal(
                    fantaFilterWrapper.items[0].element.classList.contains('js-fafi-hidden'),
                );
            });
        });
        describe('set hidden', function() {
            it('Should add/remove the js-fafi-hidden class of an element', function() {
                fantaFilterWrapper.items[0].hidden = true;
                expect(fantaFilterWrapper.items[0].hidden).to.be.true;
                fantaFilterWrapper.items[0].hidden = false;
                expect(fantaFilterWrapper.items[0].hidden).to.be.false;
            });
        });
        describe('get tagName', function() {
            it('Should retrieve the tag name (div, input, etc) of an element', function() {
                expect(fantaFilterWrapper.items[0].tagName).to.equal('UL');
                expect(fantaFilterWrapper.inputs[0].tagName).to.equal('INPUT');
            });
        });
        describe('get isInput', function() {
            it('Should return true if an element is an input', function() {
                let inputElement = context.querySelector('ul');
                let inputElementItem = fantaFilterWrapper.items.find(item => item.element === inputElement);
                expect(inputElementItem.isInput).to.be.false;
                expect(fantaFilterWrapper.inputs[0].isInput).to.be.true;
            });
        });
    });
    describe('protoFantaFilterInput()', function() {
        describe('type', function() {
            it('Should return true if an element contains the js-fafi-hidden class', function() {
                expect(fantaFilterWrapper.items[0].hidden).to.equal(
                    fantaFilterWrapper.items[0].element.classList.contains('js-fafi-hidden'),
                );
            });
        });
        describe('comparer', function() {
            it('Should add/remove the js-fafi-hidden class of an element', function() {
                fantaFilterWrapper.items[0].hidden = true;
                expect(fantaFilterWrapper.items[0].hidden).to.be.true;
                fantaFilterWrapper.items[0].hidden = false;
                expect(fantaFilterWrapper.items[0].hidden).to.be.false;
            });
        });
        describe('selector', function() {
            it('Should retrieve the tag name (div, input, etc) of an element', function() {
                expect(fantaFilterWrapper.items[0].tagName).to.equal('UL');
                expect(fantaFilterWrapper.inputs[0].tagName).to.equal('INPUT');
            });
        });
    });
});
describe('lib', function() {
    describe('util', function() {
        describe('dom', function() {
            describe('convertAttributesToObject()', function() {
                it('Should create an object containing all attributes of a given HTML element', function() {
                    let attributesOriginal = context.querySelector('[title="testGroup1, Input 0"]').attributes;
                    const attributesOriginalArray: any = [];
                    for (let i = 0; i < attributesOriginal.length; i++) {
                        let current = attributesOriginal[i];
                        if (current.name.match(/data-fantafilter/))
                            attributesOriginalArray.push([
                                current.name.replace(/data-fantafilter-/, ''),
                                current.value,
                            ]);
                    }

                    let attributesObject = convertAttributesToObject(attributesOriginal, defaultOptions);
                    const attributesObjectArray: any = [];
                    attributesObject.forEach((value, key) => {
                        attributesObjectArray.push([key, value]);
                    });
                    expect(attributesObjectArray).to.have.lengthOf(attributesOriginalArray.length);
                    expect(attributesObjectArray).to.have.deep.members(attributesOriginalArray);
                });
            });
        });
        describe('typetests', function() {
            describe('isNodeList()', function() {
                it('Should return a boolean value representing whether an object is a NodeList', function() {
                    let NodeList = context.querySelectorAll('.js-fafi-input');
                    let notNodeList = context.querySelector('.js-fafi-input');

                    expect(isNodeList(NodeList)).to.be.true;
                    expect(isNodeList(notNodeList)).to.be.false;
                });
            });
        });
        describe('string', function() {
            describe('convertKebabToCamelCase()', function() {
                it('Should convert a KebabCase string to CamelCase (Default root specification)', function() {
                    let testString = 'attribute-value';

                    expect(convertKebabToCamelCase(testString)).to.equal('attributeValue');
                });
                it('Should convert a KebabCase string to CamelCase (Manual root specification)', function() {
                    let testRoot = 'data-test-';
                    let testString = testRoot + 'attribute-value';

                    expect(convertKebabToCamelCase(testString, testRoot)).to.equal('attributeValue');
                });
            });
        });
    });
});
