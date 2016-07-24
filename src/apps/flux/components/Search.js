import React from 'react'

import PokemonActions from '../actions/PokemonActions'

const Search = ({
  onChange
}) => (
  <div className="input-group search">
    <input type="text"
           className="form-control"
           placeholder="Enter Pokemon Name"
           onChange={e => PokemonActions.filter(e.target.value)} />
    <div className="input-group-addon">🔍</div>
  </div>
)

export default Search
