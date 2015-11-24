'use strict';

angular.module('env.envelopes').controller('EnvelopesCtrl',
function (EnvelopeSrvc) {
  var ctrl = this;
  
  var initData = function() {
    // var envelope = {
    //   name: 'This is a test',
    //   goal: 12,
    //   user: 1
    // };

    // EnvelopeSrvc.data.create(envelope)
    //   .then(function(envelopes) {
    //     console.log('it worked');
    //     console.log(envelopes);
    //   })
    //   .catch(function() {
    //     console.log('something went wrong');
    //   });

    EnvelopeSrvc.data.findAll()
      .then(function(envelopes) {
        ctrl.envelopes = envelopes;
      })
      .catch(function() {
        console.log('something went wrong');
      });
  };

  ctrl.addEnvelope = function() {
    ctrl.newEnvelope = EnvelopeSrvc.data.createInstance();
    ctrl.addingEnvelope = true;
  };

  ctrl.saveEnvelope = function() {
    EnvelopeSrvc.data.create(ctrl.newEnvelope)
      .then(function(envelope) {
        console.log(envelope);
        ctrl.envelopes.push(envelope);
      });
  };

  initData();
});
