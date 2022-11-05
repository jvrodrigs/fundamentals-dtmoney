import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContenxt } from "../../contexts/TransactionsContext";
import { dateFormatter, moneyFormatter } from "../../utils/formatter";
import { SearchForm } from "./SearchForm";
import { PriceTextColor, TransacitonsContainer, TransacitonsTable } from "./styles";

export function Transactions() {
    const { transactions } = useContext(TransactionsContenxt);
    
    return( 
        <>
            <Header />
            <Summary />

            <TransacitonsContainer>
                <SearchForm />
                
                <TransacitonsTable>
                    <tbody>
                        {
                            transactions.map(trans => {
                                return (
                                    <tr key={trans.id}>
                                        <td width={"50%"}>{trans.description}</td>
                                        <td>
                                            <PriceTextColor typeColor={trans.type}>
                                                {trans.type === 'outcome' && '- '}
                                                {moneyFormatter.format(trans.price)}
                                            </PriceTextColor>
                                        </td>
                                        <td>{trans.category}</td>
                                        <td>{dateFormatter.format( new Date(trans.createAt) )}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </TransacitonsTable>
            </TransacitonsContainer>
        </>
    )
}