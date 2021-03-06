'use strict';

module.exports = function(casper, scenario, vp) {
  casper.echo('onReady.js', 'INFO');
  casper.evaluate(function(){
    console.log('This custom script is running inside your web app!');
    console.log('Add your own casper commands here to simulate user interacions or logging in.');
  });
  casper.waitFor(function () {
    return this.evaluate(function () {
      return document.querySelector('#posts article:last-child').style.opacity === '1';
    });
  });
};
