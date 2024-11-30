import { SearchBarButton, SearchBarForm, SearchBarInput } from "./styles";
import { ChangeEvent, FormEvent, useState } from "react";
import { getGeolocation } from "../../util/geoLocationApi";
import { useLocation } from "../../context/LocationContext";

export function SearchBar(){
    const [inputIp, setInputIp] = useState('');
    const {setData} = useLocation()

function submitForm (event : FormEvent){
    event.preventDefault()
    console.log("handleSubmitForm funcionando")
}

function handleNewIp(event: ChangeEvent<HTMLInputElement>){
    setInputIp(event.target.value)
}

const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); 
    if (inputIp) {
        getGeolocation(inputIp, setData)
    }
    
  };

    return (
        <SearchBarForm onSubmit={submitForm}>
            <SearchBarInput 
                placeholder="Search for any IP address or domain"
                onChange={handleNewIp}
                required
            />
            <SearchBarButton type="submit" onClick={handleSubmit}>	
                &gt;
            </SearchBarButton>
        </SearchBarForm>
    )
}