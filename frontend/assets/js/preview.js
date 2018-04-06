angular.module('myApp').controller('previewCtrl', function ($scope, mainFactory) {
    $scope.data = mainFactory.articleList;

    $scope.deletePaper = function(index) {
        var articleList = mainFactory.articleList
        articleList.splice(index, 1);
        mainFactory.articleList = articleList;
        $scope.data = articleList;
    }
})