'use strict';

angular.module('envelopes', [
  'ui.router',
  'ui.bootstrap',
  'js-data',
  'env.envelopes'
])
.config(
function ($urlRouterProvider, DSProvider) {
  $urlRouterProvider.otherwise('/envelopes');

  DSProvider.defaults.basePath = '/api';
  DSProvider.defaults.bypassCache = true;
  DSProvider.defaults.cacheResponse = false;
})
.run(
function () {

});

