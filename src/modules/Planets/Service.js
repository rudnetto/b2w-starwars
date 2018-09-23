// @flow

import HttpClient from '../../utils/HttpClient';
import Random from '../../utils/Random';
import { Planet } from './Models';

const getRandomPlanet = async () => {
  const number = Random.generateRandomNumber(1, 61);

  const result = await HttpClient.get(`/planets/${number}`);
  const planet: Planet = {
    name: result.data.name,
    climate: result.data.climate,
    population: result.data.population,
    terrain: result.data.terrain,
    filmsFeatured: result.data.films.length,
  };

  return planet;
};

export default {
  getRandomPlanet,
};
