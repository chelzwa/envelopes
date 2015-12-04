'use strict';

angular.module('env.envelopes', [
  'ui.router'])
.config(
function ($stateProvider) {
  $stateProvider
    .state('envelope', {
      parent: 'envelopes',
      url: '^/envelopes/:id',
      views: {
        '@': {
          templateUrl: 'app/pages/envelope/envelope.html',
          controller: 'EnvelopeCtrl as envelopeCtrl'
        }
      }
    })
    .state('envelopes', {
      url: '/envelopes',
      views: {
        '@': {
          templateUrl: 'app/pages/envelopes/envelopes.html',
          controller: 'EnvelopesCtrl as envelopesCtrl'
        }
      }
    });
});
