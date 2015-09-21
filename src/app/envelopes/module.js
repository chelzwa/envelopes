'use strict';

angular.module('env.envelopes', [
  'ui.router'])
.config(
function ($stateProvider) {
  $stateProvider
    .state('envelopes', {
      url: '/envelopes',
      views: {
        '@': {
          templateUrl: 'app/envelopes/view/envelopes.html',
          controller: 'EnvelopesCtrl as envelopesCtrl'
        }
      }
    });
});
