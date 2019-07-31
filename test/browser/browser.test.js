/* global chai, fantaFilter */
var expect = chai.expect;

describe('FantaFilter', function () {
  it('should exist and be globally accessible', function () {
    expect(fantaFilter).to.exist;
  });
  describe('filterGroups', function () {
      describe("testGroup1", function() {
        it('should contain 3 items', function() {
          expect(fantaFilter.filterGroups.testGroup1.items).to.have.lengthOf(6);
        })
      })
    it('should contain 2 filterGroups', function () {
      expect(Object.values(fantaFilter.filterGroups).length).to.equal(2);
    });
  });
});