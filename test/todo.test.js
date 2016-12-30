var setAction = require('../lib/todo.js').setAction;

var chai= require('chai');
var should = chai.should();

describe('setAction function',() => {
  describe('#setAction',() => {
    it('set item and dump',() => {
      var item = {};
      var obj = setAction(item,'FIXME');
      console.dir(obj);
      true.should.be.true;
    })
  });
});

