describe('Users factory', function () {
    var Users;

    var userList = [
        {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane'
        },
        {
            id: '2',
            name: 'Bob',
            role: 'Developer',
            location: 'New York',
            twitter: 'billybob'
        },
        {
            id: '3',
            name: 'Jim',
            role: 'Developer',
            location: 'Chicago',
            twitter: 'jimbo'
        },
        {
            id: '4',
            name: 'Bill',
            role: 'Designer',
            location: 'LA',
            twitter: 'dabill'
        }
    ];
    var singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
    };

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

    // A new sub-suite for the all() method. It's a getter
    describe('.all()', function () {
        // Does it exist?
        it('should exist', function () {
            expect(Users.all).toBeDefined();
        });
        it('should return a hard-coded list of users', function () {
            expect(Users.all()).toEqual(userList);
        });
    });

    // A new sub-suite to test a single-user retrieval by id
    describe('.findById()', function () {
        it('should exist', function () {
            expect(Users.findById).toBeDefined();
        });
        it('should return the correct data if it exists', function () {
            expect(Users.findById('2')).toEqual(singleUser);
        });
        it('should return undefined if the record is not found', function () {
            expect(Users.findById('ABC')).not.toBeDefined();
        })
    });

});