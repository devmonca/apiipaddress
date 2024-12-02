import { ErrorSpan, SearchBarButton, SearchBarFieldset, SearchBarForm, SearchBarInput } from "./styles";
import { getGeolocation } from "../../util/geoLocationApi";
import { useLocation } from "../../context/LocationContext";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const newSearchschema = z.object({
    ipordomain: z
    .string()
    .min(2,{message: "Digite ao menos 2 caracteres"})
    .max(26, {message: 'Entrada inválida, permitido até 26 caracteres'})
    .nonempty({message: "Valor inválido"})
    .refine(value=> !/^\s*$/.test(value), {message: "Espaço não é válido como entrada"})
    
})

type NewSearchIpProps = z.infer<typeof newSearchschema>

export function SearchBar(){

    const {setData} = useLocation()
    const { register, handleSubmit, reset, formState:{ errors } } = useForm<NewSearchIpProps>({
        resolver: zodResolver(newSearchschema),
        defaultValues:{
            ipordomain: ''
        }
    })

    function onSearch(data: NewSearchIpProps){
        const { ipordomain } = data
        getGeolocation(ipordomain, setData)
        reset()
    }

    return (
        <>
        <SearchBarForm onSubmit={handleSubmit(onSearch)}>
           <SearchBarFieldset>
            <SearchBarInput 
                    placeholder="Search for any IP address or domain"
                    {...register("ipordomain")}
                    type="text"
                    
                />
                <SearchBarButton 
                    type="submit"
                    // disabled={ipordomain}
                >	
                    &gt;
                </SearchBarButton>
            </SearchBarFieldset>
            {errors.ipordomain && <ErrorSpan>{errors.ipordomain.message}</ErrorSpan>}
        </SearchBarForm>
        </>
    )
}