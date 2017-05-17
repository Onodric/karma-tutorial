describe('UsersController', function () {
  var $controller, UsersController, UsersFactory;

  // Mock list of users we expect to use in our controller
  var userList = [
    { id: '1', name: 'Jane', role: 'Designer', location: 'New York', twitter: 'gijane' },
    { id: '2', name: 'Bob', role: 'Developer', location: 'New York', twitter: 'billybob' },
    { id: '3', name: 'Jim', role: 'Developer', location: 'Chicago', twitter: 'jimbo' },
    { id: '4', name: 'Bill', role: 'Designer', location: 'LA', twitter: 'dabill' }
  ];

  // Load ui.router and our components.users module to be created
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.users'));
  // add the modules for our Users service
  beforeEach(angular.mock.module('api.users'));

  // Inject the $controller service to create instances of controllers
  beforeEach(inject(function (_$controller_, _Users_) {
    $controller = _$controller_;
    UsersFactory = _Users_;

    // spy and force the return value when UserFactory.all is called
    spyOn(UsersFactory, 'all').and.callFake(function () {
      return userList;
    });

    UsersController = $controller('UsersController', { Users: UsersFactory });
  }));

  // Verify that our controller exists
  it('should be defined', function () {
    expect(UsersController).toBeDefined();
  });

  // add a new test for our expected controller behavior
  it('should initialize with a call to Users.all()', function () {
    expect(UsersFactory.all).toHaveBeenCalled();
    expect(UsersController.users).toEqual(userList);
  });

});