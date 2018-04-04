angular.module('myApp').controller('viewCtrl', function ($scope, mainFactory, $routeParams) {
    $scope.data = mainFactory[$routeParams.Id];
    $scope.Id = $routeParams.Id
})