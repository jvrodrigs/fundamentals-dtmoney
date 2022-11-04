import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import { PriceTextColor, TransacitonsContainer, TransacitonsTable } from "./styles";

export function Transactions() {
    return( 
        <>
            <Header/>
            <Summary />

            <TransacitonsContainer>
                <SearchForm />
                
                <TransacitonsTable>
                    <tbody>
                        <tr>
                            <td width={"50%"}>Desenvolvimento de site</td>
                            <td>
                                <PriceTextColor typeColor="green">R$ 17.400,00</PriceTextColor>
                            </td>
                            <td>Desenvolvimento</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </TransacitonsTable>
            </TransacitonsContainer>
        </>
    )
}