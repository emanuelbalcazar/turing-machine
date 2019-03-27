angular.module('app').controller('navbarCtrl', ['$scope', navbarCtrl]);

// navbar controller
function navbarCtrl($scope) {
    $scope.redirectTo = function (route) {
        $location.path(route);
    };
}
