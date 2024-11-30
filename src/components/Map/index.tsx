import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "./styles.css"
import { useState } from "react";
import { useLocation } from "../../context/LocationContext";
export function Map(){
    const {data} = useLocation()
    const [center] = useState(
        [data.lat, data.lng]
    )

    return (
        <div>
            <MapContainer center={center} zoom={20} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}