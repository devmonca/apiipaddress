import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "./styles.css"
import { useEffect, useState } from "react";
import { useLocation } from "../../context/LocationContext";

export function Map(){
    const {data} = useLocation()
    const [position, setPosition] = useState([data.lat, data.lng])

    function UpdateMapView({ position }) {
        const map = useMap(); 
        useEffect(() => {
            map.setView(position, map.getZoom()); // Atualiza a visualização
        }, [position, map]); // Executa toda vez que 'position' mudar
    }

    useEffect(() => {
        setPosition( [data.lat, data.lng]) // A cada vez que os dados mudarem, o componente será re-renderizado
    }, [data]);

    return (
        <div>
            <MapContainer center={position} render={position} zoom={17} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <UpdateMapView position={position} />
            </MapContainer>
        </div>
    )
}