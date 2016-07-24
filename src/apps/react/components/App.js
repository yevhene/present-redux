import React from 'react'

import Map from './Map'
import Search from './Search'
import List from './List'

import search from '../lib/search'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemons: this.props.pokemons,
      location: {
        lat: 49.2330407,
        lng: 28.4683191
      }
    }
  }

  search(q) {
    this.setState({ pokemons: search(this.props.pokemons, q) })
  }

  setLocation(location) {
    this.setState({ location })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand">Pokemon</a>
        </nav>

        <div className="container">
          <Map pokemons={this.state.pokemons}
               location={this.state.location}
               onMarkerClick={(pokemon) =>
                 this.setLocation(pokemon.location)
               } />

          <Search onChange={this.search.bind(this)} />

          <List pokemons={this.state.pokemons}
                onItemClick={(pokemon) =>
                  this.setLocation(pokemon.location)
                } />
        </div>
      </div>
    )
  }
}

export default App
