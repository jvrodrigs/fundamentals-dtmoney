import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react';

import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { TransactionsContenxt } from "../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
    const { fetchData } = useContext(TransactionsContenxt);
    
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

     
    async function handleFormTransactions(data: SearchFormInputs){
        await fetchData(data.query);
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleFormTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações"
                {...register('query')} 
            />

            <button disabled={ isSubmitting } type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}