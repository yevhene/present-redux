import AppDispatcher from '../dispatcher/AppDispatcher'

export const SEARCH_POKEMONS = 'SEARCH_POKEMONS'
export const FOCUS_POKEMON = 'FOCUS_POKEMON'

const PokemonActions = {
  search(q) {
    AppDispatcher.dispatch({
      type: SEARCH_POKEMONS,
      q
    })
  },

  focus(pokemon) {
    AppDispatcher.dispatch({
      type: FOCUS_POKEMON,
      pokemon
    })
  }
}

export default PokemonActions
