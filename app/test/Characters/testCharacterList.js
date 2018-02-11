'use strict';
const assert = require('assert');
const CharacterList = require('../../src/Characters/CharacterList');
const Character = require('../../src/Characters/Character');

describe('CharacterList', () => {
    it('should instantiate a new characterList', () => {
        const cList = new CharacterList();
        assert.ok(cList instanceof CharacterList);
    });

    it('should sort a new characterList', () => {
        const cList = new CharacterList();

        cList.addCharacter(new Character('a', 20));
        cList.addCharacter(new Character('b', 11));
        cList.addCharacter(new Character('c', -3));
        cList.addCharacter(new Character('d', 99));

        cList.sortInitiative();
        let visited = 0;
        cList.list.forEach((character, index, arr) => {
            if (index+1 <= arr.length){
                if(arr[index+1]!= null) {
                    assert.ok(character.initiative >= arr[index + 1].initiative);
                }
                visited++;
            }
        });
        assert(visited === cList.list.length);
    });
});
