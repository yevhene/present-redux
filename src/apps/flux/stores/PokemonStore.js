import { EventEmitter } from 'events'

import AppDispatcher from '../dispatcher/AppDispatcher'
import pokemons from '../../../data/pokemons.json'
import search from '../lib/search'

import { SEARCH_POKEMONS, FOCUS_POKEMON } from '../actions/PokemonActions'

const CHANGE_EVENT = 'change'

let filteredPokemons = pokemons
let focusedPokemon = null

const PokemonStore = Object.assign({}, EventEmitter.prototype, {
  list() {
    return filteredPokemons
  },

  focused() {
    return focusedPokemon
  }
}, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
})

AppDispatcher.register(action => {
  switch(action.type) {
    case SEARCH_POKEMONS:
      filteredPokemons = search(pokemons, action.q)
      PokemonStore.emit(CHANGE_EVENT)
      break

    case FOCUS_POKEMON:
      focusedPokemon = action.pokemon
      PokemonStore.emit(CHANGE_EVENT)
      break

    default:
      // no op
  }
})


export default PokemonStore
