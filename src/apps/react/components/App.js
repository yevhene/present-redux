import React from 'react'

import Map from './Map'
import Search from './Search'
import List from './List'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      pokemons: this.props.pokemons,
      location: {
        lat: 49.2330407,
        lng: 28.4683191
      }
    }
  }

  filter(search) {
    const regexp = new RegExp(`.*${search || ''}.*`, 'i')

    this.setState({
      search: search,
      pokemons: this.props.pokemons.filter(pokemon =>
        pokemon.name.match(regexp)
      )
    })
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
               onMarkerClick={(pokemon) => this.setLocation(pokemon.location)}/>

          <Search onChange={this.filter.bind(this)} />

          <List pokemons={this.state.pokemons}
                onItemClick={(pokemon) => this.setLocation(pokemon.location)} />
        </div>
      </div>
    )
  }
}

export default App
