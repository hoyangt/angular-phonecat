'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
]);

phonecatApp.run(['$rootScope', function($rootScope) {
  var _getTopScope = function() {
    return $rootScope;
    //return angular.element(document).scope();
  };

  $rootScope.ready = function() {
    var $scope = _getTopScope();
    $scope.status = 'ready';
    if(!$scope.$$phase) $scope.$apply();
  };
  $rootScope.loading = function() {
    var $scope = _getTopScope();
    $scope.status = 'loading';
    if(!$scope.$$phase) $scope.$apply();
  };
  $rootScope.$on('$routeChangeStart', function() {
    _getTopScope().loading();
  });
}]);


phonecatApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $location) {

    $routeProvider.when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
    });

    $routeProvider.when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    });

    $routeProvider.otherwise({
      redirectTo: '/phones'
    });

    // $location.html5Mode(true);

    // $location.hashPrefix('!');

    // $routes.otherwise({
    //   redirectTo : '/'
    // });

  }]
);

