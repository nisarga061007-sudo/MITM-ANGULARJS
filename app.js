/* 
  Name: Your Full Name
  Department: Your Department
*/

var app = angular.module('studentApp', []);

// Parent Controller
app.controller('CollegeController', ['$scope', function($scope) {
    $scope.collegeName = "City Engineering College";
}]);

// Child Controller
app.controller('StudentController', ['$scope', function($scope) {
    // Initial sample student list with details
    $scope.students = [
        { name: 'Alice Smith', department: 'Computer Science', semester: '4th' },
        { name: 'Bob Jones', department: 'Mechanical Engineering', semester: '2nd' },
        { name: 'Charlie Brown', department: 'Electronics', semester: '6th' }
    ];

    // Initial visibility state for details section (hidden by default)
    $scope.showDetails = false;

    // Function to toggle details visibility
    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    };

    // Function to add a student to the list and clear inputs
    $scope.addStudent = function() {
        if ($scope.inputName && $scope.inputName.trim() !== "") {
            $scope.students.push({
                name: $scope.inputName,
                department: $scope.inputDepartment || 'General',
                semester: $scope.inputSemester || '1st'
            });

            // Clear input fields and marks after adding
            $scope.inputName = "";
            $scope.inputDepartment = "";
            $scope.inputSemester = "";
            $scope.inputMarks = undefined;
        }
    };
}]);