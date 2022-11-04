import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>

                <strong>R$ 00,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>R$ 00,00</strong>
            </SummaryCard>

            <SummaryCard variantColor="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>R$ 00,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}