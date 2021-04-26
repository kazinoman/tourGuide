import React from "react";

import { Map, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapImp() {
  return (
    <MapContainer
      style={{ 
        height: "30rem", 
        width: "100%",
        marginTop: "3rem",
        marginBottom: "1rem" }}
      center={[23.754858, 90.376425]}
      zoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      ></TileLayer>
      <Marker position={[23.754858, 90.376425]} style={{color:"red"}}>
        <Popup>
          Daffodil Internation University
        </Popup>
      </Marker>
    </MapContainer>
  );
}
