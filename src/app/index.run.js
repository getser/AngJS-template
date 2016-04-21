(function() {
  'use strict';

  angular
    .module('angUsersdb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
