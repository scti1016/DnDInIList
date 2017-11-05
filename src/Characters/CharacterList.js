'use strict';

class CharacterList{
    constructor(name, initiative){
        this.list = [];
    }

    addCharacter(character){
        this.list.push(character);
        return this.list;

    }

    sortInitiative(){
        this.list = this.list.sort((a, b) => {
            return (b.initiative - a.initiative);
        });
        return this.list;
    }

}

module.exports = CharacterList;