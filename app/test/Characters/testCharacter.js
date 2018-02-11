'use strict';
const assert = require('assert');
const Character = require('../../src/Characters/Character');

describe('Character', () => {
    it('should instantiate a new character', () => {

        const c = new Character('someName', 15);
        assert(c.initiative);
        assert(c.name);
    });
});