import { configure, defaultOptions, convertAttributeNamesToOptions } from '../../../src/ts/lib/util';
import { mocks } from 'mock-browser';
import * as should from 'should';
import * as fs from 'fs';
import * as path from 'path';

describe('configure', async function() {
    let mockBrowser: any;
    let targetElement: HTMLElement;

    before('Set up mock browser', async function() {
        mockBrowser = new mocks.MockBrowser();
        const document = mockBrowser.getDocument();
        let externalHTMLPath = path.resolve(__dirname, '..', 'fantaFilter.spec.html');
        document.body.innerHTML = fs.readFileSync(externalHTMLPath, 'utf8');
        targetElement = document.querySelector('.js-fafi-input[data-fantafilter-group=testGroup1]');
    });
    it('Should merge default options and attributes from an element', async function() {
        let configured = configure(defaultOptions, targetElement);

        should.exist(configured);
        let attributeNames = Object.values(configured.attributeNames);
        let targetAttributes = convertAttributeNamesToOptions(targetElement.attributes, configured);
        let targetAttributeNames = Object.values(targetAttributes);
        attributeNames.should.containDeep(targetAttributeNames);
    });

    it('Should include user overrides when merging', async function() {
        let configured = configure(defaultOptions, targetElement, { attributeNames: { testThing: 'test-thing' } });

        should.exist(configured);
        let attributeNames = Object.values(configured.attributeNames);
        attributeNames.should.containDeep(['test-thing']);
    });
});
