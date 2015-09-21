'use strict';

angular.module('env.envelopes').controller('EnvelopesCtrl',
function (EnvelopeSrvc) {
  var ctrl = this;
  
  var initData = function() {
    EnvelopeSrvc.data.findAll()
      .then(function(envelopes) {
        console.log('it worked');
        console.log(envelopes);
      })
      .catch(function() {
        console.log('something went wrong');
      });
  };

  initData();
});
