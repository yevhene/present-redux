import React from 'react'

import Item from './Item'

const List = ({
  pokemons, onItemClick
}) => (
  <section className="row">
    {pokemons.map(pokemon => (
      <Item key={pokemon.id} pokemon={pokemon} onClick={onItemClick} />
    ))}
  </section>
)

export default List
