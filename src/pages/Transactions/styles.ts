import styled from 'styled-components'

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separete;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
        padding: 1.25rem 2rem;
        background: ${props => props.theme['gray-700']};

        button {
            background: transparent;
            border: 0;
            border-radius: 0;

            cursor: pointer;

            &:hover {
                svg{
                    background: ${props => props.theme['red-300']};
                }
            }
        }

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`
export const ButtonTrash = styled.button`
    width: 100%;
    height: 100%;

    &:hover {
        color: ${props => props.theme['red-300']};

        transition: 0.3s;
    }
    /* background: red !important;; */

    
`

interface PriceHighLightProps {
    variant: "income" | "outcome";
}


export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme['red-300']};
`