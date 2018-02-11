'use strict';
const assert = require('assert');
const CharacterList = require('../../src/Characters/CharacterList');
const Character = require('../../src/Characters/Character');
const CharacterListUserPrompt = require('../../src/CharacterListUserPrompt');
const angular = require('angular');

describe('CharacterList', () => {
    const characterListUserPrompt = new CharacterListUserPrompt();
    it('should catch emitted event', (done) => {

        characterListUserPrompt.finish();
        angular.on('fight', () =>{
            done();
        });
    });
});
