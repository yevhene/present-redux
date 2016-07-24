import { createStore } from 'redux'

import rootReducer from './reducers/index'

import pokemons from '../../data/pokemons.json'

const defaultState = {
  pokemons,
  search: '',
  focus: null
};

const store = createStore(rootReducer, defaultState)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
