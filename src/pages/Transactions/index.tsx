import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td>
                                <PriceHighLight variant="income">
                                R$ 12.000,00
                                </PriceHighLight> 
                            </td>
                            <td>Venda</td>
                            <td>12/04/2002</td>
                        </tr>

                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}