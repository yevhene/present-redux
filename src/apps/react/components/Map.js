import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends React.Component {
  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div className="map" />
        }
        googleMapElement={
          <GoogleMap zoom={ 12 } center={ this.props.location }>
            {this.props.pokemons.map(pokemon => this.renderMarker(pokemon))}
          </GoogleMap>
        }
      />
    )
  }

  renderMarker(pokemon) {
    return (
      <Marker
        key={ pokemon.id }
        position={ pokemon.location }
        title={ pokemon.name }
        icon={ pokemon.pin }
        onClick={ () => this.props.onMarkerClick(pokemon) } />
    )
  }
}

export default Map
