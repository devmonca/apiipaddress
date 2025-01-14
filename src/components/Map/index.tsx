import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "./styles.css"
import { useEffect, useState } from "react";
import { useLocation } from "../../context/LocationContext";

interface PositionProps{
    position: [
        lat: number, 
        lng:number,
        
    ]
    zoom: number,
}

export function Map(){
    const {data} = useLocation()
    const [position, setPosition] = useState<[number,number]>([data.lat, data.lng])
    const zoom = 17;

    function UpdateMapView({ position, zoom }: PositionProps) {
        const map = useMap(); 
        useEffect(() => {
            map.setView(position, zoom); // Atualiza a visualização
        }, [position, zoom,map]); // Executa toda vez que 'position' mudar
        return null
    }

    useEffect(() => {
        setPosition( [data.lat, data.lng]) // A cada vez que os dados mudarem, o componente será re-renderizado
    }, [data]);

    return (
        <div>
            <MapContainer>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <UpdateMapView position={position} zoom={zoom}/>
            </MapContainer>
        </div>
    )
}