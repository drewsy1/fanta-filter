import defaultOptions from '../src/js/lib/default-options';
import {expect} from 'chai';

describe('default-options', function () {
  it('Should be an object', function () {
    expect(defaultOptions).to.be.a(`object`);
  });
});
