import { useContext } from 'react';
import * as z from 'zod';
import * as Dialog from '@radix-ui/react-dialog';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';

import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from './styles';
import { TransactionsContenxt } from '../../contexts/TransactionsContext';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionalModal() {
    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting }, 
        control, 
        reset
    } = useForm<NewTransactionInputs>({
        resolver: zodResolver(newTransactionFormSchema),
    });

    const { fetchCreateNewData } = useContext(TransactionsContenxt);

    async function handleCreateTransaction(data: NewTransactionInputs) {
        const promiseNewTransaction = fetchCreateNewData(data);
        toast.promise(promiseNewTransaction, {
            pending: 'Enviando requisição para o servidor...',
            success: 'Transação cadastrada com sucesso! 🚀',
            error: 'Error ao tentar enviar transação para o servidor. 🤯'
        });
        reset();
    }
    return(
        <Dialog.Portal>
            <Overlay />
            
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X  size={24}/>
                </CloseButton>
                <form action="" onSubmit={handleSubmit(handleCreateTransaction)}>
                    <input type="text" placeholder={'Descrição'} required {...register('description')}/>
                    <input type="number" placeholder={'Preço'} required {...register('price', { valueAsNumber: true })}/>
                    <input type="text" placeholder={'Categoria'} required {...register('category')}/>

                    <Controller
                        control={control}
                        name="type"
                        render={ ({field}) => {                            
                            return (
                                <TransactionTypeContainer 
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <TransactionTypeButton value='income' typeicon="income">
                                        <ArrowCircleUp size={24}/>
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton value='outcome' typeicon="outcome">
                                        <ArrowCircleDown size={24}/>
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionTypeContainer>
                            )
                        }}
                    />

                    <button type="submit" disabled={ isSubmitting }>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}