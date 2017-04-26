var app = angular.module('mySchool', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
   .when('/',
    {
                templateUrl : 'dashboard.html',
                controller  : 'mainController'
    })
   .when('/Registration', {
                templateUrl : 'components/registration.html',
                controller  : 'registrationController'
    });
});
    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
 app.controller('registrationController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    
