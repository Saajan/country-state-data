const expect = require('expect.js');
const { states } = require('../states.json');
const countries = require('../countries.json');

describe('States', function () {

    it('expect states to be an array ', function () {
        expect(states).to.be.an('array');
    });

    it('expect India no of states to be 36 ', function () {
        let indiaStatesList = states.filter((state) => state.countryId === "101");
        expect(indiaStatesList).to.have.length(36);
    });

    it('expect USA no of states to be 50 ', function () {
        let USAStatesList = states.filter((state) => state.countryId === "231");
        expect(USAStatesList).to.have.length(50);
    });
});
