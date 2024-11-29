import { SearchBarButton, SearchBarForm, SearchBarInput } from "./styles";
import { FormEvent } from "react";

function submitForm (event : FormEvent){
    event.preventDefault()
    console.log("handleSubmitForm funcionando")
}

function handleSearchButton(){
    
}

export function SearchBar(){

    return (
        <SearchBarForm onSubmit={submitForm}>
            <SearchBarInput placeholder="Search for any IP address or domain" required/>
            <SearchBarButton type="submit" onClick={handleSearchButton}>	
                &gt;
            </SearchBarButton>
        </SearchBarForm>
    )
}