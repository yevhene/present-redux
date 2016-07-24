import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import pokemons from './pokemons'
import focus from './focus'
import search from './search'

const rootReducer = combineReducers({
  pokemons, focus, search
})

export default rootReducer
