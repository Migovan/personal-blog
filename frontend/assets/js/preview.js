angular.module('myApp').controller('viewCtrl', function ($scope, mainFactory) {
    $scope.data = mainFactory;
    console.log($scope.data)
})