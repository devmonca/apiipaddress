import { InfoCardItem, InfoCardList, InforCardDivisor } from "./styles";

export function InfoCard(){

    return (
        <InfoCardList>
            <InfoCardItem>
                <label htmlFor="">ip address</label>
                <span>
                    192.212.174.101
                    {/* injeção de dados da requisição*/}
                </span>
            </InfoCardItem>
            <InforCardDivisor/>
            <InfoCardItem>
                <label htmlFor="">location</label>
                <span>
                    Brooklyn, NY 10001
                    {/* injeção de dados da requisição*/}
                </span>
            </InfoCardItem>
            <InforCardDivisor/>
            <InfoCardItem>
                <label htmlFor="">timezone</label>
                <span>
                    UTC - 05:00
                    {/* injeção de dados da requisição*/}
                </span>
            </InfoCardItem>
            <InforCardDivisor/>
            <InfoCardItem>
                <label htmlFor="">isp</label>
                <span>
                    SpaceX Startlink
                    {/* injeção de dados da requisição*/}
                </span>
            </InfoCardItem>
        </InfoCardList>
    )
}