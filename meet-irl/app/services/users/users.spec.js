describe('Users factory', function () {
    var Users;

    // Before each test, load the api.users module
    beforeEach(angular.mock.module('api.users'));

    // Before each test, set the Users variable to the factory
    beforeEach(inject(function (_Users_) {
        Users = _Users_;
    }));

    // Test for existence
    it('should exist', function () {
        expect(Users).toBeDefined();
    });

});