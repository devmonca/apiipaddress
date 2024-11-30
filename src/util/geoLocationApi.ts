import { LocationDataType } from "../context/LocationContext"

export const getGeolocation = async(ipAddress: string, setData: React.Dispatch<React.SetStateAction<LocationDataType>>) =>{
    const apiKey = import.meta.env.VITE_API_KEY;
    try{
        const testResponse = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
        console.log(testResponse)

        // Buscando com fetch
        const geolocation = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
        .then(data=>{
            return data.json()
        })
    
        // Conferindo resultados
        console.log(geolocation)
        setData({
            ip: geolocation.ip,
            city: geolocation.location.city,
            region: geolocation.location.region,
            timezone: geolocation.location.timezone,
            lat: geolocation.location.lat,
            lng: geolocation.location.lng,
            isp: geolocation.isp
        });
        
    
    }catch(error){
        console.error('Erro ao obert localização', error)
    }
}