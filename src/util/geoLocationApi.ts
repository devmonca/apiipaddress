import { LocationDataType } from "../context/LocationContext"

function showTemporaryCard() {
    // Cria o elemento do card
    const card = document.createElement('div');
    card.textContent = 'Localização inválida, verifique se os dados inseridos estão corretos';
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
            showTemporaryCard()
        })
    
    }catch{
        console.log('verificação (catch)Endereço não encontrado')
    }
}