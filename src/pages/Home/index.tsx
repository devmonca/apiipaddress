import { Header } from "../../components/Header";
import { InfoCard } from "../../components/InfoCard";
import { Map } from "../../components/Map";
import { SearchBar } from "../../components/SearchBar";
import { BackgroundImage, LowerLayer, UpperLayer } from "./styles";

export function Home(){

    return (
        <>
            < LowerLayer>
                {/* <img src="src/assets/desktop.png" alt="" /> */}
                <BackgroundImage src="src/assets/desktop.png"/>
                <Map/>
            </LowerLayer>
            
            < UpperLayer>
                <Header/>
                <SearchBar/>
                <InfoCard/>
            </UpperLayer>
        </>
    )
}