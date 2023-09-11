import "../../styles/leaflet.css";
import './map.scss';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import {Icon, divIcon, point} from "leaflet";
import LeftAccordion from "./left-accordion/LeftAccordion";

// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers
const markers = [
  {
    geocode: [55.754174, 37.620119],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [55.774174, 37.620119],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [55.754174, 37.690119],
    popUp: "Hello, I am pop up 3"
  }
];

export default function App() {
  return (
    <div className="map">
      <div className="map_left_nav">
        <LeftAccordion />
      </div>
      <div className="leaflet-container">
        <MapContainer center={[55.754174, 37.620119]} zoom={13}>
          {/* OPEN STREEN MAPS TILES */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            {/* Mapping through the markers */}
            {markers.map((marker) => (
              <Marker position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>

  );
}
