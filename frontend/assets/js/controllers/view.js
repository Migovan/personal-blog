angular.module('myApp').controller('viewCtrl', function ($scope, mainFactory, $routeParams, $timeout) {
    $scope.data = mainFactory.articleList[$routeParams.Id];
    $scope.Id = $routeParams.Id;

    $scope.tagParagraph = document.getElementsByClassName('paragraph')[0];
    $scope.tagParagraph.style.fontSize = $scope.data.value + "px";
    $scope.classForBlur = "";

    $scope.sliderPlus = () => {

        let newUrl;

        $scope.classForBlur = 'blur';

        // if (mainFactory.articleList.length-1 > $scope.Id) {
        //     setTimeout(function () {
        //         newUrl = "#!/view/" + ++$scope.Id;
        //         history.pushState('', '', newUrl);
        //     }, 250);
        // };

            // let a = setTimeout(function () {
            //     newUrl = "#!/view/" + ++$scope.Id;
            //     history.pushState('', '', newUrl);
            //     clearTimeout(a);
            // }, 250);

            $timeout(function () {
                newUrl = "#!/view/" + ++$scope.Id;
                history.pushState('', '', newUrl);
                clearTimeout(a);
            }, 250);

    }

    $scope.sliderMinus = () => {

        let newUrl;

        if ($scope.Id > 0 ) {
            newUrl = "#!/view/" + --$scope.Id;
            history.pushState('', '', newUrl);
        }
    }

    if ($scope.Id == mainFactory.articleList.length-1 && mainFactory.articleList.length !== 1) {
        $scope.flag = true;
    }
    if (Number($scope.Id) !== mainFactory.articleList.length-1 && $scope.Id !== '0') {
        $scope.flag1 = true;
    }
    if ($scope.Id == '0' && mainFactory.articleList.length !== 1) {
        $scope.flag2 = true;
    }
})