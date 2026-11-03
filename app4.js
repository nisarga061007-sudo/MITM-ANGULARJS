
var app = angular.module("libraryApp", []);

// Parent Controller
app.controller("ParentController", function($scope) {

    // Multiple book names
    $scope.books = [
        "Java Programming",
        "Python Programming",
        "Web Technology",
        "Database Management",
        "Operating System"
    ];

    $scope.parentMessage = "Welcome to Library!";
    $scope.receivedMessage = "";

    // Add new book
    $scope.addBook = function() {

        if ($scope.newBook) {
            $scope.books.push($scope.newBook);
            $scope.newBook = "";
        }

    };

});

// Child Controller
app.controller("ChildController", function($scope) {

    $scope.childMessage = "";

    // Send message to parent
    $scope.sendMessage = function() {

        $scope.$parent.receivedMessage =
            $scope.childMessage;

    };

});
