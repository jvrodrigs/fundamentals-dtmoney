import { useContext } from "react";
import { TransactionsContenxt } from "../contexts/TransactionsContext";

export function useSummary() {
    const { transactions } = useContext(TransactionsContenxt);

    const summary = transactions.reduce( 
        (count, transactions) => {
            if(transactions.type === 'income'){
                count.income += transactions.price;
                count.total += transactions.price;
            } else {
                count.outcome += transactions.price;
                count.total -= transactions.price;
            }
            return count;
        },
        {   
            income: 0,
            outcome: 0, 
            total: 0 
        }
    );

    return summary;
}