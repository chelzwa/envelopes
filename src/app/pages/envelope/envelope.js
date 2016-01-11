'use strict';

angular.module('env.envelopes').controller('EnvelopeCtrl',
function ($stateParams, $q, TransactionSrvc, EnvelopeSrvc) {
  var ctrl = this;
  
  var initData = function() {
    var promises = {
      envelope: EnvelopeSrvc.data.find($stateParams.id),
      transactions: TransactionSrvc.data.findAll({where: {envelope: $stateParams.id}, sort: 'createdAt'})
    };

    $q.all(promises)
      .then(function(response) {
        ctrl.envelope = response.envelope;
        ctrl.envelope.transactions = response.transactions;
      })
      .catch(function(err) {
        //TODO: Real alert
        console.log(err);
      });
  };

  ctrl.addTransaction = function() {
    if (!ctrl.newTransaction) {
      ctrl.newTransaction = TransactionSrvc.data.createInstance();
      ctrl.newTransaction.envelope = $stateParams.id;
      ctrl.newTransaction.amount = 0;
    }
    
    ctrl.addingTransaction = true;
  };

  ctrl.saveTransaction = function() {
    TransactionSrvc.data.create(ctrl.newTransaction)
      .then(function(transaction) {
        ctrl.envelope.transactions.push(transaction);
        
        delete ctrl.newTransaction;
        ctrl.addTransaction();
      })
      .catch(function(err) {
        //TODO: Real alert
        console.log(err);
      });
  };

  ctrl.updateTransaction = function(transaction) {
    TransactionSrvc.data.update(transaction.id, _.pick(transaction, ['description', 'amount']))
      .then(function() {
        transaction.editing = false;
      })
      .catch(function(err) {
        //TODO: Real alert
        console.log(err);
      });
  };

  ctrl.updateEnvelope = function() {
    EnvelopeSrvc.data.update(ctrl.envelope.id, {name: ctrl.envelope.name})
      .then(function(envelope) {
        ctrl.envelope = _.merge(envelope, ctrl.envelope);

        ctrl.envelope.editing = false;
      })
      .catch(function(err) {
        //TODO: Real alert
        console.log(err);
      });
  };

  initData();
});
