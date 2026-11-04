var app = angular.module('myapp',[]);
var app = angular.module('myApp', []);

app.controller('MyController',function($scope){
    $scope.name="manvi";
});
//parent controller

app.controller('CollegeController', function($scope) {
    $scope.collegeName = "MIT college";
});

//child controller

app.controller(
    "StudentController", function($scope) {
        $scope.name = "Dhanush";
        $scope.department = "Computer Science";
        $scope.semester = 3;

        //aray
        $scope.students =[
            "MANVITHA",
        ];
    }
);