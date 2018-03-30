require('angular');

angular.module('myApp', [])
    .controller('firstCtrl', function ($scope) {

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
        }

        document.getElementById('files').addEventListener('change',  $scope.addImage, false);


    });


