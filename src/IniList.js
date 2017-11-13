const CharacterList = require('./Characters/CharacterList');

class IniList{

    constructor($scope){
        this.$scope = $scope;
        this.characterList = new CharacterList();
        this.tableheader = {Character:'Character',HP:'HP',Status:'Status'};
        this.currentTurnCharacter = undefined;
        this.encounterStarted = false;
    }

    getCharacterList(){
        return this.characterList;
    }

    getTableHeader(){
        return this.tableheader;
    }

    setCurrentTurnChracter(character){
        this.currentTurnCharacter = character;
    }

    getCurrentTurnChracter(){
        return this.currentTurnCharacter;
    }

    isEncounterStarted(){
        return this.encounterStarted;
    }
    nextCharacter(){

    }
    finishFight(){
        console.log('finish');
        this.$scope.$emit('fightEnd');
    }
}

module.exports = IniList;