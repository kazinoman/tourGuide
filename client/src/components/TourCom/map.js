import React from "react";

import { Map, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapImp(props) {
  const {lat, lon } = props;
 
  return (
    <MapContainer
      style={{ 
        height: "30rem", 
        width: "100%",
        marginBottom: "1rem" }}
      center={[lat, lon]}
      zoom={13}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      ></TileLayer>
      <Marker position={[lat, lon]} style={{color:"red"}}>
        <Popup>
          {props.location}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
