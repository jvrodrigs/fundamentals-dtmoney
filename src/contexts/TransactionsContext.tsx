import { createContext, ReactNode, useState, useEffect } from "react";

interface TransactionsData {
    id: string;
    description: string;
    price: number;
    type: 'income' | 'outcome';
    category: string;
    createAt: string;
}

interface TransactionContextType {
    transactions: TransactionsData[]
}

interface TransactionProps{
    children: ReactNode
}

export const TransactionsContenxt = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProps){
    const [dataTransaction, setDataTransaction] = useState<TransactionsData[]>([]);
    
    async function loadData() {
        const res =  await fetch('http://localhost:3333/transactions');
        const data = await res.json(); 
        setDataTransaction(data);       
    }
    useEffect ( () => {

        loadData();

    }, [])

    return(
        <TransactionsContenxt.Provider value={{ transactions: dataTransaction}}>
            {children}
        </TransactionsContenxt.Provider>
    )
}