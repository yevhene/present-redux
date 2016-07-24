import React from 'react'

import Item from './Item'

const List = ({
  pokemons
}) => (
  <section className="row">
    {pokemons.map(pokemon => (
      <Item key={pokemon.id} pokemon={pokemon} />
    ))}
  </section>
)

export default List
