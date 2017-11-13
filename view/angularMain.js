const AngularRoute = require('angular-route');
const CharacterList = require('../src/Characters/CharacterList');
const Character = require('../src/Characters/Character');
const IniList = require('../src/IniList');
const CharacterListUserPrompt = require('../src/CharacterListUserPrompt');
require('angular-ui-bootstrap');


let angularApp =  angular.module('app', [AngularRoute, 'ui.bootstrap']);

angularApp.controller('iniListMainController',['$scope', function($scope) {
    this.inilist = new IniList();

    $scope.$on('fight', (event, ...args) =>{
        this.inilist.encounterStarted = true;
        $scope.$broadcast('characters', args);
    });

    $scope.$on('fightEnd', (event, ...args) =>{
        this.inilist.encounterStarted = false;
    });

}]);

angularApp.controller('encounterListController',['$scope', function($scope) {
    this.userPrompt = new CharacterListUserPrompt($scope, false);
}]);

angularApp.controller('IniListController',['$scope', function($scope) {

    this.inilist = new IniList();
    $scope.$on('characters', (event, ...args) =>{
        this.inilist.getCharacterList().list = args;
        console.log(args);
    });




    // //Mock Sample Data
    this.inilist.getCharacterList().addCharacter(new Character('GuyA',3,'99','liegt #3 verflucht'));
    // this.inilist.getCharacterList().addCharacter(new Character('GuyB',20,'20','#5 zauber fliegen '));
    // this.inilist.getCharacterList().addCharacter(new Character('GuyC',-1,'-1','bewusstlos'));
    // this.inilist.getCharacterList().addCharacter(new Character('GuyD',33,'13',));
    // //
    //
    // this.inilist.getCharacterList().sortInitiative();

}]);

