angular.module('myApp').controller('previewCtrl', function ($scope, mainFactory) {
    $scope.data = mainFactory;

    $scope.deletePaper = (index) =>{
        $scope.data.splice(index, 1)
    }
})