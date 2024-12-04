import { BoxDefault, ErrorSpan, SearchBarButton, SearchBarFieldset, SearchBarForm, SearchBarInput } from "./styles";
import { getGeolocation } from "../../util/geoLocationApi";
import { useLocation } from "../../context/LocationContext";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import loadingicon from "../../assets/loadingicon.svg"

type NewSearchIpProps = z.infer<typeof newSearchschema>

const newSearchschema = z.object({
    ipordomain: z
    .string()
    .min(2,{message: "Digite ao menos 2 caracteres"})
    .max(26, {message: 'Entrada inválida, permitido até 26 caracteres'})
    .nonempty({message: "Valor inválido"})
    .refine(value=> !/^\s*$/.test(value), {message: "Espaço não é válido como entrada"})
})

export function SearchBar(){
    const [loading, setLoading] = useState(false)
    const {setData} = useLocation()
    const { 
        register,
        handleSubmit,
        reset,
        formState:{ errors }
    } 
    = useForm<NewSearchIpProps>({
        resolver: zodResolver(newSearchschema),
            defaultValues:{
                ipordomain: '' // valor padrão do input
            }
    })

    function onSearch(data: NewSearchIpProps){
        const { ipordomain } = data
        setLoading(!loading) // faz aparecer a animação de carregamento
        setTimeout(()=>{ // esperando 3 segundos para chamar função que faz a requisição
            getGeolocation(ipordomain, setData)
            setLoading(false) // faz desaparecer a animação de carregamento
        },3000)
        reset()
        focus()
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
                
                {/* Informação de validação e carregamento */}
                <BoxDefault>
                    <ErrorSpan>
                        {errors.ipordomain?.message}
                    </ErrorSpan>
                    {loading? 
                        <img src={loadingicon} alt="" />
                        :
                        null
                    }
                </BoxDefault>
            
            </SearchBarForm>
        </>
    )
}