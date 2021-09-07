import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

export class Map extends Component {
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmVkb3I5OTMiLCJhIjoiY2t0YWh3c2gyMWY5NTJwcGhlb3Ixbmk2ZCJ9.0tOu7SLM1bKeXpkibT1CaQ';
  }

  render() {
    return (
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={this.mapContainer}></div>
      </div>
    );
  }
}
