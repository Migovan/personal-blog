angular.module('myApp').controller('viewCtrl', function ($scope, mainFactory, $routeParams) {
    $scope.data = mainFactory.articleList[$routeParams.Id];
    $scope.Id = $routeParams.Id;

    $scope.tagParagraph = document.getElementsByClassName('paragraph')[0];
    $scope.tagParagraph.style.fontSize = $scope.data.value + "px";

    let n = $routeParams.Id;

    $scope.sliderPlus = () => {

        let newUrl;

        if (mainFactory.articleList.length-1 > n) {
            newUrl = "#!/view/" + ++n;
            history.pushState('', '', newUrl);
        } else if (mainFactory.articleList.length-1 == n) {
            $scope.flag = true;
        }
        console.log('mainFactory.articleList.length-1', mainFactory.articleList.length-1);
        console.log('n', n);

    }

    $scope.sliderMinus = () => {

        let newUrl;

        if (n >= 1 ) {
            newUrl = "#!/view/" + --n;
            history.pushState('', '', newUrl);
        } else if (n == 0) {
            $scope.flag1 = true;
        }
    }

})