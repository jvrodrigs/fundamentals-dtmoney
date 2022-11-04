import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';

import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from './styles';

export function NewTransactionalModal() {
    return(
        <Dialog.Portal>
            <Overlay />
            
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X  size={24}/>
                </CloseButton>
                <form action="">
                    <input type="text" placeholder={'Descrição'} required/>
                    <input type="number" placeholder={'Preço'} required/>
                    <input type="text" placeholder={'Categoria'} required/>

                    <TransactionTypeContainer>
                        <TransactionTypeButton value='income' colorIcon='green'>
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton value='outcome' colorIcon='red'>
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TransactionTypeButton>
                    </TransactionTypeContainer>

                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}