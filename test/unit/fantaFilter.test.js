import {expect} from 'chai';
import { mocks } from 'mock-browser';

import configure from '../../src/js/lib/configure';
import defaultOptions from '../../src/js/lib/default-options';

import FantaFilter from '../../src/js/lib/fantaFilter';

const mockBrowser = new mocks.MockBrowser();
const document = mockBrowser.getDocument();
const defaultDependencies = {
  configure,
  context: document,
  defaultOptions
};

let context;
let fantaFilterParent1;
let fantaFilterParent2;
let fantaFilterParent2_1;
let fantaFilterItems1;
let fantaFilterItems2;
let fantaFilterItems2_1;
let fantaFilterInputs1;
let fantaFilterInputs2;
let fantaFilterInputs2_1;
let dependencies;
let fantaFilterInstance;

function createTestContext(){
  context = document.createElement('div');
  fantaFilterParent1 = document.createElement('div');
  fantaFilterParent2 = document.createElement('div');
  fantaFilterParent2_1 = document.createElement('div');
  fantaFilterItems1 = [document.createElement('span'),document.createElement('span'),document.createElement('span')];
  fantaFilterItems2 = [document.createElement('div'), document.createElement('div')];
  fantaFilterItems2_1 = [document.createElement('span'),document.createElement('span'),document.createElement('span')];
  fantaFilterInputs1 = [document.createElement('input')];
  fantaFilterInputs2 = [document.createElement('input')];
  fantaFilterInputs2_1 = [document.createElement('input')];
  dependencies = Object.assign({}, defaultDependencies, {context});

  fantaFilterParent1.classList.add('js-fafi');
  fantaFilterParent1.classList.add('js-fafi-parent');
  fantaFilterParent1.setAttribute("data-fantafilter-group",'testGroup1');  

  fantaFilterParent2.classList.add('js-fafi');
  fantaFilterParent2.classList.add('js-fafi-parent');
  fantaFilterParent2.setAttribute("data-fantafilter-group",'testGroup2');

  fantaFilterParent2_1.classList.add('js-fafi');
  fantaFilterParent2_1.classList.add('js-fafi-parent');
  fantaFilterParent2_1.setAttribute("data-fantafilter-group",'testGroup2');

  fantaFilterItems1.forEach(function(value,index,array){
    array[index].classList.add('js-fafi-item');
    array[index].setAttribute("data-fantafilter-group",'testGroup1');
    array[index].textContent = `testGroup1, Item ${index}`;
  })
  
  fantaFilterItems2.concat(fantaFilterItems2_1).forEach(function(value,index,array){
    array[index].classList.add('js-fafi-item');
    array[index].setAttribute("data-fantafilter-group",'testGroup2');
    array[index].textContent = `testGroup2, Item ${index}`;
  })

  fantaFilterInputs1.forEach(function(value,index,array){
    array[index].classList.add('js-fafi-input');
    array[index].setAttribute("data-fantafilter-group",'testGroup1');
    array[index].title = `testGroup1, Input ${index}`;
  })
  
  fantaFilterInputs2.concat(fantaFilterInputs2_1).forEach(function(value,index,array){
    array[index].classList.add('js-fafi-input');
    array[index].setAttribute("data-fantafilter-group",'testGroup2');
    array[index].title = `testGroup2, Input ${index}`;
  })
}
createTestContext();
fantaFilterItems1.forEach(item => fantaFilterParent1.appendChild(item));
fantaFilterItems2.forEach(item => fantaFilterParent2.appendChild(item));
fantaFilterItems2_1.forEach(item => fantaFilterParent2_1.appendChild(item));
[fantaFilterInputs1,fantaFilterInputs2,fantaFilterInputs2_1].forEach(inputGroup => inputGroup.forEach(input => context.appendChild(input)));
[fantaFilterParent1,fantaFilterParent2,fantaFilterParent2_1].forEach(parent => context.appendChild(parent));
fantaFilterInstance = new FantaFilter(dependencies, '.js-fafi');

describe('FantaFilter',function() {
  describe('function constructor()',function(){
    it('Should be a function', function(){
      expect(FantaFilter).to.be.a('function');
    });
    
    it('Should instantiate and find instances of CSS selector \'.js-fafi\'', function(){
      expect(fantaFilterInstance).to.exist;
      expect(fantaFilterInstance).to.not.be.null;
    });

    it('Should combine filters (and their elements) with the same group name', function(){
      let testGroup2Filters = FantaFilter.CURRENTFILTERS.filter(item => item.name == 'testGroup2');
      let testGroup2Elements = fantaFilterItems2.concat(fantaFilterItems2_1,fantaFilterInputs2,fantaFilterInputs2_1);
      expect(testGroup2Filters).to.not.have.lengthOf.greaterThan(1);
      expect(testGroup2Filters[0].items.concat(testGroup2Filters[0].inputs)).to.contain.members(testGroup2Elements).and.have.lengthOf(testGroup2Elements.length);
    });
  })

  describe('static get CURRENTFILTERS()',function(){
    it('Should return an array of all active FantaFilter instances', function(){
      expect(fantaFilterInstance).to.have.lengthOf(2);
      expect(FantaFilter.CURRENTFILTERS).to.have.lengthOf(2);
    });
  });
  
  describe('[Properties]',function(){
    describe('items',function(){
      it('Should contain js-fafi-item objects of matching group',function() {
        expect(fantaFilterInstance[0].items).to.contain.members(fantaFilterItems1);
      });
    });
  });  
});