'use strict';

angular.module('env.envelopes').controller('EnvelopesCtrl',
function (EnvelopeSrvc) {
  var ctrl = this;
  
  var initData = function() {
    EnvelopeSrvc.data.findAll()
      .then(function(envelopes) {
        ctrl.envelopes = envelopes;
      })
      .catch(function(err) {
        //TODO: Real alert
        console.log(err);
      });
  };

  ctrl.addEnvelope = function() {
    ctrl.newEnvelope = EnvelopeSrvc.data.createInstance();
    ctrl.addingEnvelope = true;
  };

  ctrl.saveEnvelope = function() {
    EnvelopeSrvc.data.create(ctrl.newEnvelope)
      .then(function(envelope) {
        ctrl.envelopes.push(envelope);
        ctrl.addEnvelope();
      })
      .catch(function(err) {
        //TODO: Real alert
        console.log(err);
      });
  };

  initData();
});
