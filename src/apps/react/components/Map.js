import React from 'react'

import {
  GoogleMapLoader, GoogleMap, Marker
} from 'react-google-maps'

class Map extends React.Component {
  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div className="map" />
        }
        googleMapElement={
          <GoogleMap {...this.options()}>
            {this.renderMarkers()}
          </GoogleMap>
        }
      />
    )
  }

  renderMarkers() {
    return this.props.pokemons.map((pokemon) =>
      <Marker
        key={ pokemon.id }
        position={ pokemon.location }
        title={ pokemon.name }
        icon={ pokemon.pin }
        onClick={ () => this.props.onMarkerClick(pokemon) } />
    )
  }

  options() {
    return {
      zoom: 12,
      center: this.props.location,
      options: {
        scrollwheel: true
      }
    }
  }
}

export default Map
