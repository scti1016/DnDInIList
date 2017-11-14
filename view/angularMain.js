const AngularRoute = require('angular-route');
const CharacterList = require('../src/Characters/CharacterList');
const Character = require('../src/Characters/Character');
const IniList = require('../src/IniList');
const CharacterListUserPrompt = require('../src/CharacterListUserPrompt');
require('angular-ui-bootstrap');


let angularApp =  angular.module('app', [AngularRoute, 'ui.bootstrap']);

angularApp.controller('iniListMainController',['$scope', function($scope) {
    this.encounterStarted = false;

    $scope.$on('fight', (event, ...args) =>{
        this.encounterStarted = true;
        $scope.$broadcast('characters', args);
    });

    $scope.$on('fightEnd', (event) =>{
        this.encounterStarted = false;
        $scope.$broadcast('startNewList');
    });

}]);

angularApp.controller('encounterListController',['$scope', function($scope) {
    this.userPrompt = new CharacterListUserPrompt($scope, false);

    $scope.$on('startNewList', (event) =>{
        this.userPrompt = new CharacterListUserPrompt($scope);
    });

}]);

angularApp.controller('IniListController',['$scope', function($scope) {

    this.inilist = new IniList($scope);

    $scope.$on('characters', (event, characterlistAsArgs) =>{
        this.inilist.getCharacterList().list = characterlistAsArgs[0];
        this.encounterStarted = true;
        this.inilist.setCurrentTurnChracter(this.inilist.getCharacterList().list[0]);
    });

     this.inilist.getCharacterList().sortInitiative();
}]);

