import api from '../service/api';

import PokemonsUrlBuilder from './url-builder/pokemon-list.ts';

class PokemonRequest {
  getPokemonsGeneral() {
    const url = PokemonsUrlBuilder.getPokemonsName();
    return api.get(url);
  }

  getPokemonSingle(name){
    const url = PokemonsUrlBuilder.getPokemonItem(name);
    return api.get(url);
  }
}

export default new PokemonRequest();