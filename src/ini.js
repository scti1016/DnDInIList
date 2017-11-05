Character = require('./Characters/Character');
angular.module('ini', [])
    .controller('_controller', () => {
        const list = [];

        list.push(new Character('1',1));
        list.push(new Character('2',2));
        list.push(new Character('3',3));

       const getCharList = () =>{
            return list;
        }



    });