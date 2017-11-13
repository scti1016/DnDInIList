const AngularRoute = require('angular-route');
const CharacterList = require('../src/Characters/CharacterList');
const Character = require('../src/Characters/Character');
const IniList = require('../src/IniList');
const CharacterListUserPrompt = require('../src/CharacterListUserPrompt');
require('angular-ui-bootstrap');


let angularApp =  angular.module('app', [AngularRoute, 'ui.bootstrap']);

angularApp.controller('iniListMainController', function() {
    this.inilist = new IniList();

});

angularApp.controller('encounterListController', function() {
    this.userPrompt = new CharacterListUserPrompt(false);

});

angularApp.controller('IniListController', function() {
    this.inilist = new IniList();

    //Mock Sample Data
    this.inilist.getCharacterList().addCharacter(new Character('GuyA',3,'99','liegt #3 verflucht'));
    this.inilist.getCharacterList().addCharacter(new Character('GuyB',20,'20','#5 zauber fliegen '));
    this.inilist.getCharacterList().addCharacter(new Character('GuyC',-1,'-1','bewusstlos'));
    this.inilist.getCharacterList().addCharacter(new Character('GuyD',33,'13',));
    //

    this.inilist.getCharacterList().sortInitiative();

});

module.exports = angular;
