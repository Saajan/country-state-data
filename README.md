# countries-states-db

This package provides a simple country and state dataset for Node.js projects.

It exports two arrays:

- `countries`
- `states`

The data is intentionally lightweight and may not be a complete official source for every country or state.

## Install

```bash
pnpm add countries-states-db
```

## Usage

### CommonJS

```js
const { countries, states } = require('countries-states-db');

console.log(countries.length);
console.log(states.length);
```

### ES Modules

```js
import pkg from 'countries-states-db';

const { countries, states } = pkg;
```

## Data Shape

### `countries`

Each country entry includes:

- `id`
- `shortName`
- `name`
- `phoneCode`

### `states`

Each state entry includes:

- `id`
- `name`
- `countryId`

## Example

```js
const { countries, states } = require('countries-states-db');

const india = countries.find((country) => country.name === 'India');
const indiaStates = states.filter((state) => state.countryId === '101');

console.log(india);
console.log(indiaStates);
```

## Scripts

- `pnpm build` builds the package into `dist/`
- `pnpm test` runs the test suite with Vitest

## Notes

- The dataset is sourced from the repository data files.
- Minor spelling or data issues may still exist.
