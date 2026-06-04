import { describe, it, expect } from 'vitest';
import pkg from '../index.js';

const { countries, states } = pkg;

describe('States', function () {
    it('exports countries and states arrays', function () {
        expect(countries).toBeTypeOf('object');
        expect(states).toBeTypeOf('object');
        expect(Array.isArray(countries)).toBe(true);
        expect(Array.isArray(states)).toBe(true);
    });

    it('expect states to be an array ', function () {
        expect(Array.isArray(states)).toBe(true);
    });

    it('expect India no of states to be 36 ', function () {
        const indiaStatesList = states.filter((state) => state.countryId === "101");
        expect(indiaStatesList).toHaveLength(36);
    });

    it('expect USA no of states to be 50 ', function () {
        const USAStatesList = states.filter((state) => state.countryId === "231");
        expect(USAStatesList).toHaveLength(50);
    });
});
