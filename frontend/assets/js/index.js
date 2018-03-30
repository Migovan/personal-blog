require('angular');
require('angular-route');
const myApp = angular.module('myApp', ['ngRoute']);
// angular.module('myApp', [])

    myApp.config(function ($routeProvider) {
        $routeProvider
            .when("/create",{
                templateUrl: 'create.html',
                controller: "createCtrl"
            })
            .when("/",{
                templateUrl: 'view.html',
                // controller: "createCtrl"
            })
            .otherwise({
                template: '<h1>404 no such page</h1>'
            })
    });

    myApp.controller('createCtrl', function ($scope) {

        $scope.dataObject = {
            head:{
                input:"",
                element:[]
            },
            paper:{
                input:"",
                element:[]
            }
        }

        $scope.add = () => {

            if ($scope.dataObject.head.input == ""){
                alert("Введите текст.");
            } else {
                $scope.dataObject.head.element.push($scope.dataObject.head.input);
            }
            $scope.dataObject.head.input = "";

            if ($scope.dataObject.paper.input == ""){
                alert("Введите текст.");
            } else {
                $scope.dataObject.paper.element.push($scope.dataObject.paper.input);
            }
            $scope.dataObject.paper.input = "";
        }

        $scope.addImage = (evt) => {
            var files = evt.target.files;

            for (var i = 0, f; f = files[i]; i++) {

                var reader = new FileReader();

                reader.onload = (function(theFile) {
                    return function(e) {
                        var span = document.createElement('span');
                        span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
                        document.getElementById('list').insertBefore(span, null);
                    };
                })(f);

                reader.readAsDataURL(f);
            }
            //
            // if (span==''){
            //     alert("Добавьте картинку.")
            // }
        }

        document.getElementById('files').addEventListener('change',  $scope.addImage, false);


    });


