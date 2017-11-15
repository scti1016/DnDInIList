'use strict';

class Character{
    constructor(name, initiative, hp, statusString){
        this.name = name;
        this.initiative = initiative;
        this.hp = hp;
        this.statusString = statusString;
    }
}

module.exports = Character;