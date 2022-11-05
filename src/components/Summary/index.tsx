import { useContext } from 'react';
import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';
import { TransactionsContenxt } from "../../contexts/TransactionsContext";
import { moneyFormatter } from '../../utils/formatter';

export function Summary() {
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

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>

                <strong> {moneyFormatter.format(summary.income)} </strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>  {moneyFormatter.format(summary.outcome)} </strong>
            </SummaryCard>

            <SummaryCard variantColor="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>  {moneyFormatter.format(summary.total)} </strong>
            </SummaryCard>
        </SummaryContainer>
    )
}