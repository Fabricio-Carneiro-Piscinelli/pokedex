import PokemonRequest from '../../service-shared/requests/list-pokemin.req';

export const GET_ACTION_SUCCESS = 'GET_ACTION_SUCCESS';
export const GET_ACTION_FAILURE = 'GET_ACTION_FAILURE';
export const GET_ACTION_REQUESTING = 'GET_ACTION_REQUESTING';

export function fetchPokemons() {
  return async function(dispatch) {
    dispatch(fetching()); 
    try {
      let res = await PokemonRequest.getPokemonsGeneral();
      let arrPokemon = [];
      for (let item of res.results){
        let pokemon = await PokemonRequest.getPokemonSingle(item.name);
        arrPokemon.push(pokemon);
      };
      dispatch(success(arrPokemon));
    } catch (err) {
      dispatch(failure(err));
    }
  };
}

function success(response) { //request success
  return {
    response,
    type: GET_ACTION_SUCCESS
  };
}

function failure(error) { //request error
  return {
    error,
    type: GET_ACTION_FAILURE
  };
}

function fetching() {  //request pending...
  return { 
    type: GET_ACTION_REQUESTING 
  };
}
  