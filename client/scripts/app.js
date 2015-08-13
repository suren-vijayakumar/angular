var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', function($scope){
    $scope.heading = "Here is your message: ";

    $scope.updateMessage = function(){
        $scope.message = "Hello " + $scope.name +  "!!";
    };
}]);