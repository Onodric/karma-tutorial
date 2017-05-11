(function () {
    'use strict';

    // Creating a module and a factory that is referenced int the test suite block
    angular.module('api.users', [])
    .factory('Users', function () {
        var Users = {};

        // Users.method = function () {};

        return Users;
    });
})();