import { useEffect } from "react";
import { useLocation } from "../../context/LocationContext";
import { InfoCardItem, InfoCardList, InforCardDivisor } from "./styles";
import { getGeolocationUser } from '../../util/geoLocationApi.ts'

export function InfoCard(){

    const {setData} = useLocation()
    getGeolocationUser(setData)
    const {data} = useLocation()
    useEffect(() => {
        // A cada vez que os dados mudarem, o componente será re-renderizado
        console.log("Dados atualizados:", data);
    }, [data]); // Adicionando 'data' como dependência para detectar mudanças
    
    return (
        <InfoCardList onLoad={()=>getGeolocationUser}>
            <InfoCardItem>
                <label htmlFor="">ip address</label>
                <span>
                    {data.ip}
                    {/* injeção de dados da requisição*/}
                </span>
            </InfoCardItem>
            <InforCardDivisor/>
            <InfoCardItem>
                <label htmlFor="">location</label>
                <span>
                    {data.city},{data.region} 
                    {/* injeção de dados da requisição*/}
                </span>
            </InfoCardItem>
            <InforCardDivisor/>
            <InfoCardItem>
                <label htmlFor="">timezone</label>
                <span>
                    UTC - {data.region}
                    {/* injeção de dados da requisição*/}
                </span>
            </InfoCardItem>
            <InforCardDivisor/>
            <InfoCardItem>
                <label htmlFor="">isp</label>
                <span>
                    {data.isp}
                    {/* injeção de dados da requisição*/}
                </span>
            </InfoCardItem>
        </InfoCardList>
    )
}