import {
    convertAttributesToObject,
    configure,
    defaultOptions,
    convertAttributeNamesToOptions,
} from '../src/ts/lib/util';
import { mocks } from 'mock-browser';
import should from 'should';
import * as fs from 'fs';
import * as path from 'path';
import { iFantaOptions } from 'src/ts/lib/interfaces';

describe('dom', async function() {
    let mockBrowser: any;
    let targetElement: HTMLElement;
    let configured: iFantaOptions;
    let attributes: NamedNodeMap;
    let attributeNames: string[];

    before('Set up mock browser', async function() {
        mockBrowser = new mocks.MockBrowser();
        const document = mockBrowser.getDocument();
        let externalHTMLPath = path.resolve(__dirname, '..', 'fantaFilter.spec.html');
        document.body.innerHTML = fs.readFileSync(externalHTMLPath, 'utf8');
        targetElement = document.querySelector('.js-fafi-input[data-fantafilter-group=testGroup1]');
        configured = configure(Object.assign(defaultOptions), targetElement);
        attributes = targetElement.attributes;
        attributeNames = configured.getAttribute();
    });
    describe('convertAttributesToObject', function() {
        it("Should convert an element's attributes to an object", async function() {
            should.exist(configured);
            should(configured).not.be.undefined;
            should.exist(targetElement);
            should(targetElement).not.be.undefined;
            should.exist(attributes);
            should(attributes).not.be.undefined;
            should.exist(attributeNames);
            should(attributeNames).not.be.undefined;

            let attributesObject = convertAttributesToObject(targetElement.attributes, configured);
            for (let i = 0; i < attributes.length; i++) {
                let attr = attributes.item(i);
                if (attributeNames.includes(attr.name)) {
                    let tempObject: { [key: string]: any } = {};
                    tempObject[attr.name.replace(`${configured.attributeNames.root}-`, '')] = attr.value;
                    attributesObject.should.containDeep(tempObject);
                }
            }
        });
    });

    describe('convertAttributeNamesToOptions', function() {
        it("Should convert an element's attributes to a name map", async function() {
            should.exist(configured);
            should(configured).not.be.undefined;
            should.exist(targetElement);
            should(targetElement).not.be.undefined;
            should.exist(attributes);
            should(attributes).not.be.undefined;
            should.exist(attributeNames);
            should(attributeNames).not.be.undefined;

            let attributesOptions = convertAttributeNamesToOptions(attributes, configured);
            for (let i = 0; i < attributes.length; i++) {
                let attr = attributes.item(i);
                if (attributeNames.includes(attr.name)) {
                    
                    Object.values(attributesOptions).should.containDeep([attr.name.replace(`${configured.attributeNames.root}-`,'')]);
                }
            }
        });
    });
});
