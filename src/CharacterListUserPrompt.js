const CharacterList = require('./Characters/CharacterList');
const Character = require('./Characters/Character');


class CharacterListUserPrompt{

    constructor(insertDefaultCharacters){

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
            return this.characterList;
            //Emit event ?
        }

    }
}

module.exports = CharacterListUserPrompt;