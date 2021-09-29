import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

export default class Map extends Component {
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZmVkb3I5OTMiLCJhIjoiY2t0YWh3c2gyMWY5NTJwcGhlb3Ixbmk2ZCJ9.0tOu7SLM1bKeXpkibT1CaQ";

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/fedor993/cku2z24v505wp17qe9qjg8ysm",
      center: [27.5592, 53.9023],
      zoom: 11,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div>
        <div data-testid="map" className="map" ref={this.mapContainer}></div>
      </div>
    );
  }
}
