import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

export class Map extends Component {
  mapContainer = React.createRef();

  render() {
    return (
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={this.mapContainer}></div>
      </div>
    );
  }
}
