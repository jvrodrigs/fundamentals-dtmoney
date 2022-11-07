import { createContext, ReactNode, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../hooks/lib/axios";

interface TransactionsData {
    id: string;
    description: string;
    price: number;
    type: 'income' | 'outcome';
    category: string;
    createAt: string;
}

interface CreateNewTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome'
}

interface TransactionContextType {
    transactions: TransactionsData[],
    fetchData: (query?: string) => Promise<void>;
    fetchCreateNewData: (data: CreateNewTransactionInput) => Promise<void>;
}

interface TransactionProps{
    children: ReactNode
}

export const TransactionsContenxt = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProps){
    const [dataTransaction, setDataTransaction] = useState<TransactionsData[]>([]);
    
    async function fetchData(query?: string) {
        const res = await api.get('/transactions', {
            params: {
                _sort: 'createAt',
                _order: 'desc',
                q: query,
            }
        })
        setDataTransaction(res.data);       
    }

    async function fetchCreateNewData(data: CreateNewTransactionInput) {
        const { description, price, category, type } = data;

        const res = await api.post('transactions', {
            description,
            price, 
            category, 
            type,
            createAt: new Date()
        });

        setDataTransaction( (state) => [res.data, ...state])
    }

    useEffect ( () => {

        const myPromise = fetchData();

        toast.promise(myPromise, {
            pending: 'Conectando com o servidor...',
            success: 'Informações recebidas! 🚀',
            error: 'Error ao tentar se conectar com o servidor. 🤯'
        })

    }, [])

    return(
        <TransactionsContenxt.Provider value={{ 
                transactions: dataTransaction,
                fetchData,
                fetchCreateNewData
            }}>
            {children}
        </TransactionsContenxt.Provider>
    )
}