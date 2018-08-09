const fs = require('fs');
const path = require('path');
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
        this.defaultName = "Name";
        this.iniPromptPlaceHolder = "Initiative";
    }

    getCurrentCharacter(){
        return this.currentCharacter;
    }

    getGeneratedCharacterList(){
        return this.characterList;
    }

    isFormValid(){

        return (this.currentCharacter.name
            && (this.currentCharacter.initiative || this.currentCharacter.initiative === 0 ))
    }

    isFinishValid(){
        return (this.characterList.list.length > 0);
    }

    next(){
        if (this.isFormValid()) {
            this.characterList.addCharacter(this.currentCharacter);
            this.currentCharacter = new Character();
        }
    }

    _logFight(){
       const savePath = path.join(__dirname, '..', '..', 'Old_Fights') 
       if (!fs.existsSync(savePath)){
           fs.mkdirSync(savePath);
           console.log('Created ' + savePath);
       }
       fs.writeFileSync(path.join(savePath, 'Fight_' + Date.now() + '.txt'), this.characterList.serializeCharacterList(true))

    }

    finish(){
        if (this.isFinishValid()) {
            try {
            this._logFight()
            }
            catch(e) {console.log('Could not save fight. Reason: ' + e) }

            this.characterList.sortInitiative();
            this.$scope.$emit('fight', this.characterList.list);
        }
    }
}

module.exports = CharacterListUserPrompt;
