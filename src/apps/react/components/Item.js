import React from 'react'

const Item = ({
  pokemon
}) => (
  <div className="card">
    <img className="card-img-top" src={pokemon.image} alt={pokemon.name} />

    <div className="card-block">
      <h4 className="card-title">{pokemon.name}</h4>
      <p className="card-text"></p>
      <a href="#" className="btn btn-primary">On map</a>
    </div>
  </div>
)

export default Item
