import countriesData from '../countries.json';
import statesData from '../states.json';

export interface Country {
  id: number;
  shortName: string;
  name: string;
  phoneCode: number;
}

export interface State {
  id: string;
  name: string;
  countryId: string;
}

const countries = (countriesData as { countries: Country[] }).countries;
const states = (statesData as { states: State[] }).states;

export { countries, states };
