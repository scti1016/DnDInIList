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

    nextCharacter(){
        let i = this.getCharacterList().list.indexOf(this.getCurrentTurnChracter());
        if (i+1 === this.getCharacterList().list.length){
            i = 0;
        }else {i+=1;}
        this.setCurrentTurnChracter(this.characterList.list[i]);
        this.decrementValues(this.getCurrentTurnChracter());

    }
    decrementValues(currChar){
        let statusText = currChar.statusString;
        if (statusText == null) return;
        const numbersToDecrement = statusText.match(/#-*[0-9]+/g);
        if (numbersToDecrement == null) return;
        let decrementedNumbers = [];
        let numberPositions = [];
        for (let number of numbersToDecrement){
           numberPositions.push(statusText.indexOf(number));
        }
        for (let numberString of numbersToDecrement){
            numberString = numberString.substring(1);
            let decrementedNumber = ((parseInt(numberString))-1);
            decrementedNumber = '#'+decrementedNumber;
            decrementedNumbers.push(decrementedNumber)
        }

        decrementedNumbers.forEach( (decrementedNumber, i) =>{
           statusText = statusText.replace(numbersToDecrement[i], decrementedNumber);
        });
        this.getCurrentTurnChracter().statusString = statusText;
    }

    finishFight(){
        this.$scope.$emit('fightEnd');
    }
}

module.exports = IniList;