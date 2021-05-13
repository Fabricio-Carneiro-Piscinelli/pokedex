
interface Url {
  limit : string;
}

const urlBuilder : Url = {
  limit : `limit=150`
}

class PokemonsUrlBuilder {
  getPokemonsName(){
    return `/pokemon?${urlBuilder.limit}`;
  }
  getPokemonItem(name: string) {
    return `/pokemon/${name}`;
  }
}

export default new PokemonsUrlBuilder();