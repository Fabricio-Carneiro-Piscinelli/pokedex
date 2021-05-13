
import { combineReducers } from 'redux';
import reducerGetPokemon from './list-pokemons/list-pokemons.reducers';

const rootReducer = combineReducers({
  ListPokemon: reducerGetPokemon
});

export default rootReducer;