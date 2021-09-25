import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

export default class Map extends Component {
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZmVkb3I5OTMiLCJhIjoiY2t0YWh3c2gyMWY5NTJwcGhlb3Ixbmk2ZCJ9.0tOu7SLM1bKeXpkibT1CaQ";

    this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [30.3056504, 59.9429126],
        zoom: 10
    })
  }

  componentWillUnmount() {
      this.map.remove()
  }

  render() {
    return (
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={this.mapContainer}></div>
      </div>
    );
  }
}
