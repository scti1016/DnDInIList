
angular.module('app', [])
    .controller('controller', function() {
        let list = this;

        this.name = 'abc';

        list.func = () => {

            return 'abc';
        };


    });
