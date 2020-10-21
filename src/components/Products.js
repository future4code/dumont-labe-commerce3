import React from 'react';
import styled from 'styled-components';
import ProductsCards from './ProductsCards'

const ProductsContainer = styled.div`
    background-color: black;
    color: white;
`;

const ProductsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px
`
const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
`    

class Products extends React.Component {

    render() {
        return <ProductsContainer>
            <ProductsHeader>
                <p>Quantidade de Produtos: 8</p>
                <label>
                    Ordenar: 
                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                </label>
            </ProductsHeader>
            <ProductsGrid>
                <ProductsCards/>
                <ProductsCards/>
                <ProductsCards/>
            </ProductsGrid>
        </ProductsContainer>

    }
}

export default Products