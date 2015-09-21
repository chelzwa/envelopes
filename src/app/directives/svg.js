'use strict';

angular.module('envelopes').directive('injectSvg', [
function() {
  function link(scope, element, attrs) {
    new SVGInjector(element);
  }

  return {
    link: link
  };
}]);
