var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
    $scope.name = "khan";
});
//parent controller

app.controller('CollegeController', function($scope) {
    $scope.collegeName = "abc college";
});

//child controller

app.controller(
    "StudentController", function($scope) {
        $scope.name = "john";
        $scope.department = "Computer Science";
    }
);