angular.module('myApp').controller('viewCtrl', function ($scope, mainFactory, $routeParams) {
    $scope.data = mainFactory.articleList[$routeParams.Id];
    $scope.Id = $routeParams.Id;

    $scope.tagParagraph = document.getElementsByClassName('paragraph')[0];
    $scope.tagParagraph.style.fontSize = $scope.data.value + "px";

    $scope.sliderPlus = () => {

        let newUrl;

        if (mainFactory.articleList.length-1 > $scope.Id) {

            newUrl = "#!/view/" + ++$scope.Id;
            history.pushState('', '', newUrl);
        };
    }

    $scope.sliderMinus = () => {

        let newUrl;

        if ($scope.Id > 0 ) {
            newUrl = "#!/view/" + --$scope.Id;
            history.pushState('', '', newUrl);
        } 
    }

    if ($scope.Id == mainFactory.articleList.length-1) {
        $scope.flag = true;
    }
    if (Number($scope.Id) !== mainFactory.articleList.length-1 && $scope.Id !== '0') {
        $scope.flag1 = true;
        console.log("Id",$scope.Id, "mainFactory.articleList.length-1", mainFactory.articleList.length-1);
    }
    if ($scope.Id == '0') {
        $scope.flag2 = true;
    }
})