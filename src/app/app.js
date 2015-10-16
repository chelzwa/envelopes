'use strict';

angular.module('envelopes', [
  'ui.router',
  'ui.bootstrap',
  'js-data',
  'env.envelopes',
  'pr.auth'
])
.config(
function ($urlRouterProvider, DSProvider, authProvider) {
  $urlRouterProvider.otherwise('/envelopes');

  DSProvider.defaults.basePath = '/api';
  DSProvider.defaults.bypassCache = true;
  DSProvider.defaults.cacheResponse = false;

  authProvider.init({
    domain: 'envelopes.auth0.com',
    clientID: '0y3NJ9cxmADeDjZYLzMBXt9uOPuQqiYu'
  });
})
.run(
function () {

});

