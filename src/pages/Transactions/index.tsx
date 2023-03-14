import { useContext, MouseEvent } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { ButtonTrash, PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    const { transactions, deleteTransaction } = useContext(TransactionsContext)

    return (
        
        <div>
            
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchForm/>
                
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
                                const buttonValue = e.target.value;
                                
                                deleteTransaction(parseInt(buttonValue))
                        
                            }
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
                                    <td>
                                     <ButtonTrash
                                        value={transaction.id}
                                        onClick={(e) => {
                                            // @ts-expect-error
                                            handleInput(e) 
                                        }}
                                      >
                                        Excluir
                                      </ButtonTrash>
                                    </td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}