Character = require('./Characters/Character');
CharacterList = require('./Characters/CharacterList');

angular.module('app', [])
    .controller('controller', function($scope) {
        let list = this;

        $scope.name = 'abc';

        list.addCharacter(new Character('1',1));
        list.addCharacter(new Character('2',2));
        list.addCharacter(new Character('3',3));

        list.func = () => {

            return 'abc';
        };


    });
