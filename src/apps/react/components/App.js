import React from 'react'

import List from './List'

const App = ({
  pokemons
}) => (
  <div>
    <h1>Pokemon</h1>

    <List pokemons={pokemons} />
  </div>
)

export default App
