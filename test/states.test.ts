import { describe, it, expect } from 'vitest';
import { countries, states } from '../src/index.ts';

describe('Countries and States', function () {
  it('exports countries and states arrays', function () {
    expect(countries).toBeTypeOf('object');
    expect(states).toBeTypeOf('object');
    expect(Array.isArray(countries)).toBe(true);
    expect(Array.isArray(states)).toBe(true);
  });

  it('India has 36 states', function () {
    const indiaStatesList = states.filter((state) => state.countryId === '101');
    expect(indiaStatesList).toHaveLength(36);
  });

  it('USA has 50 states', function () {
    const usaStatesList = states.filter((state) => state.countryId === '231');
    expect(usaStatesList).toHaveLength(50);
  });
});
