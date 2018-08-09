'use strict';

class CharacterList {
    constructor() {
        this.list = [];
    }

    getCharacterArray() {
        return this.list;
    }

    addCharacter(character) {
        this.list.push(character);
        return this.list;
    }

    sortInitiative() {
        this.list = this.list.sort((a, b) => {
            return (b.initiative - a.initiative);
        });
        return this.list;
    }

    serializeCharacterList(onlyNames) {

        if (onlyNames){
            const serializedNames = [];
            for (const char of this.list){
                serializedNames.push(char.name);
            }
            return JSON.stringify(serializedNames);
        }

        else return JSON.stringify(this.list);
    }

    deserializeCharacterList(listAsString) {
        try {
            this.list = JSON.parse(listAsString);
        }
        catch (e) { console.log('List could not be parsed. Reason: ' + e) }
    }
}

module.exports = CharacterList;