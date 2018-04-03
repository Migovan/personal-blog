angular.module('myApp').controller('viewCtrl', function ($scope, mainFactory, $routeParams) {
    $scope.data = mainFactory[$routeParams.Id];
    console.log('params',$routeParams);
})