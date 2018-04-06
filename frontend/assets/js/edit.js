angular.module('myApp').controller('editCtrl', function ($scope, mainFactory, $routeParams) {
    $scope.data = mainFactory.articleList[$routeParams.Id];
    $scope.Id = $routeParams.Id
    console.log($scope.data);
    $scope.saveEditPaper = () => {
        let articleList = mainFactory.articleList;
        articleList.splice($routeParams.Id, 1, $scope.data);
        mainFactory.articleList = articleList;

        // let newUrl = "#!/view/{{Id}}";
        // history.pushState('', '', newUrl);
    }
})