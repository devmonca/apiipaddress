import { createContext, ReactNode, useContext, useState } from "react";

// Tipagem dos dados de localização
export interface LocationDataType{
    ip: string;
    city: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
    isp: string;
}

// Tipagem do contexto de localização
interface LocationContextType{
    data: LocationDataType,
    setData: React.Dispatch<React.SetStateAction<LocationDataType>>
}

// Valor padrão da localização
const defaultLocationData: LocationDataType = {
    ip: '192.212.174.101',
    city: 'Brookyln',
    region: 'NY 10001',
    timezone: '05:00',
    lat: 51.505,
    lng: -0.09,
    isp: 'SpaceX Starlink',
  };


const LocationContext = createContext<LocationContextType>({
    data: defaultLocationData,
    setData: ()=>{}
})

interface LocationProviderProps{
    children: ReactNode
}

export function LocationProvider ({children}: LocationProviderProps){
    const [data,setData] = useState<LocationDataType>(defaultLocationData)

    return (
        <LocationContext.Provider value={{data,setData}}>
            {children}
        </LocationContext.Provider>
    )
}

export const useLocation = ()=>{
    return useContext(LocationContext);
}

