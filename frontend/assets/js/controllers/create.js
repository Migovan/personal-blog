const moment = require('moment');

angular.module('myApp').controller('createCtrl', function ($scope, mainFactory,$routeParams) {

    $scope.Id = $routeParams.Id;
    $scope.editMode = !!$routeParams.Id;
    $scope.flag = false;
    $scope.dataObject = {
        head: "",
        paper: "",
        img: "",
        dateFirst: "",
        dateEdit: "",
        value: 15
    };

    // $scope.$watch( function () {
    //
    //     if ($scope.dataObject.paper) {
    //
    //         $scope.tagTextarea = document.getElementsByClassName('textarea')[0];
    //
    //         $scope.tagTextarea.style.fontSize = $scope.dataObject.value + "px";
    //
    //         }
    //     }
    // );



    $scope.dataObject.dateEdit = "";
    moment.locale('ru');
    $scope.dataObject.dateFirst = moment().format('lll');

    if ($scope.Id) {
        $scope.dataObject = mainFactory.articleList[$scope.Id];

        $scope.dataObject.dateEdit = moment().format('lll');

        // $scope.$watch(function () {
        //     $scope.dataObject.head;
        //     $scope.dataObject.paper;
        //     console.log(
        //         $scope.dataObject.head,
        //         $scope.dataObject.paper,
        //     )
        // });

    }

    $scope.saveEditPaper = () => {

        let articleList = mainFactory.articleList;
        let newUrl = "#!/view/" + $scope.Id;

        if ($scope.dataObject.head && $scope.dataObject.paper) {
            articleList.splice($scope.Id, 1, $scope.dataObject);
            mainFactory.articleList = articleList;

            history.pushState('', '', newUrl);

        } else {
            alert("Все поля обязательны к заполнению.");
                $scope.flag = true;
        }
    }

    $scope.add = () => {

        if ($scope.dataObject.head && $scope.dataObject.paper) {

            let newUrl = "#!/";
            let articleList = mainFactory.articleList;
;
            articleList.push($scope.dataObject);
            mainFactory.articleList = articleList;

            history.pushState('', '', newUrl);
        } else {
            alert("Все поля обязательны к заполнению.");
        }
    }

    $scope.loadImage = (event) => {

        let reader = new FileReader();
        let file;

        if (event) {
            file = event.target.files[0];

            if (file) {
                reader.readAsDataURL(file);
            }

            reader.onloadend = () => {
                $scope.$apply(() => {
                    $scope.dataObject.img = reader.result;
                })
            }
        } else {
            document.querySelector('input[type=file]').onchange = $scope.loadImage;
        }
    }
});





