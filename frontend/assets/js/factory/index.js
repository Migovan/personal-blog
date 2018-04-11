angular.module('myApp').factory('mainFactory', function() {
    return  {
        arr: [],
        get articleList() {
            this.arr = JSON.parse(localStorage.getItem('key'));
            if (this.arr === null) this.arr = [];
            return this.arr;
        },
        set articleList(newValue) {
            localStorage.setItem('key', JSON.stringify(newValue));
            this.arr = newValue;
        }
    };
});