const moment = require('moment');

angular.module('myApp').controller('createCtrl', function ($scope, mainFactory,$routeParams) {

    $scope.Id = $routeParams.Id;
    $scope.editMode = !!$routeParams.Id;
    $scope.dataObject = {
        head: "",
        paper: "",
        img: "",
        dateFirst: "",
        dateEdit: ""
    };

    $scope.dataObject.dateEdit = "";
    moment.locale('ru');
    $scope.dataObject.dateFirst = moment().format('lll');

    if ($scope.Id) {
        $scope.dataObject = mainFactory.articleList[$scope.Id];

        $scope.dataObject.dateEdit = ' ' + '-' + ' ' + 'изменено' + ' ' + moment().format('lll');
    }

    $scope.saveEditPaper = () => {
        let articleList = mainFactory.articleList;
        articleList.splice($scope.Id, 1, $scope.dataObject);
        mainFactory.articleList = articleList;
    }

    $scope.add = () => {
        if ($scope.dataObject.head || $scope.dataObject.paper || $scope.dataObject.img) {
            let newUrl = "#!/";
            let articleList = mainFactory.articleList;

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





