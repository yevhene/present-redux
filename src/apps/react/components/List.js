import React from 'react'

import Item from './Item'

const List = ({
  pokemons
}) => (
  <div>
    {pokemons.map(pokemon => (
      <Item key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
)

export default List
