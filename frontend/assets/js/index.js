require('angular');

angular.module('myApp', [])
    .controller('firstCtrl', function ($scope) {
        $scope.head = "";
        $scope.paper = "";
        $scope.arrayHead = [];
        $scope.arrayPaper = [];


        $scope.add = () => {


            if ($scope.paper == ""){
                alert("Введите текст.");
            }
            else {
                $scope.arrayPaper.push($scope.paper);
            }

            $scope.paper = "";

            if ($scope.head == ""){
                alert("Введите текст.");
            }
            else {
                $scope.arrayHead.push($scope.head);
            }

            $scope.head = "";
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


