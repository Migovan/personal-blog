angular.module('myApp').controller('editCtrl', function ($scope, mainFactory, $routeParams) {
    $scope.data = mainFactory[$routeParams.Id];
    $scope.Id = $routeParams.Id
    $scope.saveEditPaper = () => {
        mainFactory.splice($routeParams.Id, 1, $scope.da);
    }
})