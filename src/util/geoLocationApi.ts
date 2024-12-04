import { LocationDataType } from "../context/LocationContext"

function showTemporaryCard(message: string) {
    // Cria o elemento do card
    const card = document.createElement('div');
    card.textContent = message
    card.style.position = 'fixed';
    card.style.bottom = '20px';
    card.style.right = '10px';
    card.style.padding = '10px';
    card.style.backgroundColor = 'red';
    card.style.color = 'white';
    card.style.borderRadius = '5px';
    card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  
    // Adiciona o card ao body
    document.body.appendChild(card);
  
    // Remove o card após 3 segundos
    setTimeout(() => {
      card.remove();
    }, 3000);
  }
  
export const getGeolocation = async(ipAddress: string, setData: React.Dispatch<React.SetStateAction<LocationDataType>>) =>{
    const apiKey = import.meta.env.VITE_API_KEY;
    try{
        // Buscando com fetch
        const geolocation = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
        .then(data=>{
            if(!data.ok){
                throw new Error(`${data.status}`) // se der erro na busca
            }
            // Se a busca der certo retorna o objeto com dados
            return data.json()
        })
        .then(data=>{
            setData({
                ip: data.ip,
                city: data.location.city,
                region: data.location.region,
                timezone: data.location.timezone,
                lat: data.location.lat,
                lng: data.location.lng,
                isp: data.isp
            });
        })
        .catch(()=>{
            showTemporaryCard('Localização inválida, verifique se os dados inseridos estão corretos')
        })
    
    }catch{
        console.log('verificação (catch)Endereço não encontrado')
    }
}

export const getGeolocationUser = async(setData: React.Dispatch<React.SetStateAction<LocationDataType>>)=>{
    const apiKey = import.meta.env.VITE_API_KEY;
    try{
        const getIpUser = await fetch('https://api.ipify.org/?format=json');
        if (!getIpUser.ok) {
            throw new Error(`Erro ao buscar IP: ${getIpUser.status}`);
        }
        const { ip } = await getIpUser.json();

        // Busca a geolocalização pelo IP
        const geolocationResponse = await fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
        );
        if (!geolocationResponse.ok) {
            throw new Error(`Erro ao buscar geolocalização: ${geolocationResponse.status}`);
        }
        const data = await geolocationResponse.json();

        setData({
            ip: data.ip,
            city: data.location.city,
            region: data.location.region,
            timezone: data.location.timezone,
            lat: data.location.lat,
            lng: data.location.lng,
            isp: data.isp
        });
    } 
    catch{
        showTemporaryCard('Não foi possível solicitar a sua localização')
    }
}