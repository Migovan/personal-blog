angular.module('myApp').factory('mainFactory', function() {

    var returntData = {
        arr: [],
        get articleList() {
            this.arr = JSON.parse(localStorage.getItem('key'));
            return this.arr;
        },
        set articleList(newValue) {
            localStorage.setItem('key', JSON.stringify(newValue));
            this.arr = newValue;
        }
    };

    return returntData

});