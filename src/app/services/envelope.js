'use strict';

angular.module('env.envelopes').service('EnvelopeSrvc',
function(DS) {
  var EnvelopeSrvc = this;
  
  EnvelopeSrvc.data = DS.defineResource('envelope');
});
