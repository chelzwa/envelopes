'use strict';

angular.module('env.envelopes').controller('EnvelopesCtrl',
function (EnvelopeSrvc) {
  var ctrl = this;
  
  var initData = function() {
    var envelope = {
      name: 'This is a test',
      goal: 12,
      user: 1
    };

    EnvelopeSrvc.data.create(envelope)
      .then(function(envelopes) {
        console.log('it worked');
        console.log(envelopes);
      })
      .catch(function() {
        console.log('something went wrong');
      });

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
