import AppDispatcher from '../dispatcher/AppDispatcher'

export const FILTER_POKEMONS = 'FILTER_POKEMONS'
export const FOCUS_POKEMON = 'FOCUS_POKEMON'

const PokemonActions = {
  filter(search) {
    AppDispatcher.dispatch({
      type: FILTER_POKEMONS,
      search
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
