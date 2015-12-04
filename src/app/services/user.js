// 'use strict';

// angular.module('env.envelopes').service('UserSrvc',
// function($q, $rootScope, auth, authSrvc, DS) {
//   var UserSrvc = this;
//   var currentUser = getCurrentUserPromise();
  
//   UserSrvc.data = DS.defineResource('user');

//   UserSrvc.getCurrentUser = function() {
//     return $q.when(currentUser);
//   };

//   function getCurrentUserPromise() {
//   	console.log('test');
//     var deferred = $q.defer();
    
//     $rootScope.$on('authSuccess', function() {
//       UserSrvc.data.findAll({email: auth.profile.email})
//         .then(function(users) {
//           deferred.resolve(users[0]);
//         })
//         .catch(function() {
//           authSrvc.logout();

//           deferred.reject();
//         });
//     });

//     return deferred.promise;
//   };
// });

