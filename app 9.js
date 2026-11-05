/**
 * Project 03: To-Do List & Task Prioritization Manager
 * Controller and Module Initialization
 */

angular.module('todoApp', []).controller('TodoController', function($scope) {
    
    // Initial Seed Data matching the handbook specification
    $scope.tasks = [
        { id: 1, title: "Submit AngularJS Assignment", priority: "High", completed: false, dueDate: "2026-11-10" },
        { id: 2, title: "Read Supabase Docs", priority: "Medium", completed: true, dueDate: "2026-11-05" }
    ];

    $scope.newTaskPriority = "Medium";
    $scope.statusFilter = ""; // Default view shows all tasks

    /**
     * Add a new task to the array
     */
    $scope.addTask = function() {
        if ($scope.newTaskTitle && $scope.newTaskTitle.trim() !== "") {
            var newId = $scope.tasks.length > 0 ? $scope.tasks[$scope.tasks.length - 1].id + 1 : 1;
            
            $scope.tasks.push({
                id: newId,
                title: $scope.newTaskTitle.trim(),
                priority: $scope.newTaskPriority,
                completed: false
            });

            // Reset input fields
            $scope.newTaskTitle = ""; 
            $scope.newTaskPriority = "Medium";
        }
    };

    /**
     * Delete an individual task by its unique ID
     */
    $scope.deleteTask = function(id) {
        var index = $scope.tasks.findIndex(function(t) {
            return t.id === id;
        });
        
        if (index !== -1) {
            $scope.tasks.splice(index, 1);
        }
    };

    /**
     * Remove all completed tasks from the ledger
     */
    $scope.clearCompleted = function() {
        $scope.tasks = $scope.tasks.filter(function(t) {
            return !t.completed;
        });
    };

    /**
     * Mark all listed tasks as completed in bulk
     */
    $scope.markAllDone = function() {
        angular.forEach($scope.tasks, function(task) {
            task.completed = true;
        });
    };
});