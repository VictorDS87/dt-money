import { MouseEventHandler, useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { Trash } from "phosphor-react";


export function Transactions() {
    const { transactions } = useContext(TransactionsContext)
    
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchForm/>
                
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                               
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                        {priceFormatter.format( transaction.price)}
                                        </PriceHighLight> 
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                    <td><button><Trash size={32}/></button></td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}