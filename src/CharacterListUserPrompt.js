const CharacterList = require('./Characters/CharacterList');
const Character = require('./Characters/Character');


class CharacterListUserPrompt{

    constructor($scope, insertDefaultCharacters ){

        this.$scope = $scope;
        this.characterList = new CharacterList();
        if (insertDefaultCharacters){
            // insert default here... load from filesystem
        }
        this.currentCharacter = new Character();
        this.defaultName = "Villain_Name";
        this.iniPromptPlaceHolder = "Initiative";
    }

    getCurrentCharacter(){
        return this.currentCharacter;
    }

    getGeneratedCharacterList(){
        return this.characterList;
    }

    isFormValid(){

        return (this.currentCharacter.name &&(
            this.currentCharacter.initiative ||
            this.currentCharacter.initiative === 0 ))
    }

    next(){
        if (this.isFormValid()) {
            this.characterList.addCharacter(this.currentCharacter);
            this.currentCharacter = new Character();

        }
    }

    finish(){
        if (this.isFormValid()) {
            this.next();
            this.characterList.sortInitiative();
            this.$scope.$emit('fight', this.characterList);
        }
    }
}

module.exports = CharacterListUserPrompt;
