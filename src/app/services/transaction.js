'use strict';

angular.module('env.envelopes').service('TransactionSrvc',
function(DS) {
  var TransactionSrvc = this;
  
  TransactionSrvc.data = DS.defineResource('transaction');
});
