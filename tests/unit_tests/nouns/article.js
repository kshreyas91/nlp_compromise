
'use strict';
let nlp = require('../../../src/index.js');

describe('article', function() {

  it('noun article', function(done) {
    let tests = [
      ['duck', 'a'],
      ['eavesdropper', 'an'],
      ['alligator', 'an'],
      ['hour', 'an'],
      ['NDA', 'an'],
      ['F.B.I', 'an'],
      ['N.D.A.', 'an'],
      ['eulogy', 'a'],
      ['ukalele', 'a'],
    ];
    tests.forEach(function(a) {
      let n = nlp.Noun(a[0]);
      console.log(a);
      console.log(n.article());
      n.article().should.equal(a[1]);
    });
    done();
  });

});
