const CharacterList = require('./Characters/CharacterList');
const Character = require('./Characters/Character');

class IniList {

    constructor($scope) {
        this.$scope = $scope;
        this.characterList = new CharacterList();
        this.tableheader = { Character: 'Character', Ini: 'Ini', HP: 'TP', hide: 'Verstecken', move_silently: 'Leise bewegen', Status: 'Status', Delete: 'Delete' };
        this.currentTurnCharacter = undefined;
        this.encounterStarted = false;

        this.newCharacterName = '';
        this.newCharacterIni = undefined;
    }

    addCharacter() {
        this.characterList.list.push(new Character(this.newCharacterName, this.newCharacterIni));
        this.newCharacterName = '';
    }

    getCharacterList() {
        return this.characterList;
    }

    getTableHeader() {
        return this.tableheader;
    }

    setCurrentTurnChracter(character) {
        this.currentTurnCharacter = character;
    }

    getCurrentTurnChracter() {
        return this.currentTurnCharacter;
    }

    remove(character) {
        const index = this.characterList.list.indexOf(character);
        this.characterList.list.splice(index, 1);
    }

    moveCharInList(direction) {

        const char = this.characterList.list.find((e) => {
            if (e.selected) return true;
            else return false;
        });
        if (char == undefined) return;

        if (this.characterList.list.length === 1) return;
        const indexchar = this.characterList.list.indexOf(char);

        if (this.characterList.list[indexchar + direction] != undefined) {
            const tmpCharacter = this.characterList.list[indexchar + direction];
            this.characterList.list[indexchar + direction] = char;
            this.characterList.list[indexchar] = tmpCharacter;
        }
    }

    movecharacter($event) {

        if ($event.key === 'Enter') {
            this.nextCharacter();
        }

        if ($event.key === 'ArrowUp') {
            this.moveCharInList(-1);
        }

        if ($event.key === 'ArrowDown') {
            this.moveCharInList(1);
        }
    }

    selectCharacter(character) {
        const oldselected = this.characterList.list.find((e) => {
            if (e.selected) return true;
            else return false;
        });

        if (oldselected) {
            oldselected.selected = false;
        }

        character.selected = true;
    }

    nextCharacter() {
        let i = this.getCharacterList().list.indexOf(this.getCurrentTurnChracter());
        if (i + 1 === this.getCharacterList().list.length) {
            i = 0;
        }
        else i += 1;

        this.setCurrentTurnChracter(this.characterList.list[i]);
        this.decrementValues(this.getCurrentTurnChracter());
    }

    decrementValues(currChar) {
        let statusText = currChar.statusString;
        if (statusText == null) return;
        const numbersToDecrement = statusText.match(/#-*[0-9]+/g);
        if (numbersToDecrement == null) return;
        let decrementedNumbers = [];
        let numberPositions = [];
        for (let number of numbersToDecrement) {
            numberPositions.push(statusText.indexOf(number));
        }
        for (let numberString of numbersToDecrement) {
            numberString = numberString.substring(1);
            let decrementedNumber = ((parseInt(numberString)) - 1);
            decrementedNumber = '#' + decrementedNumber;
            decrementedNumbers.push(decrementedNumber)
        }

        decrementedNumbers.forEach((decrementedNumber, i) => {
            statusText = statusText.replace(numbersToDecrement[i], decrementedNumber);
        });
        this.getCurrentTurnChracter().statusString = statusText;
    }

    finishFight() {
        this.$scope.$emit('fightEnd');
    }
}

module.exports = IniList;