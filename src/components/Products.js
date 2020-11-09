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
    padding: 0 16px;
`
const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
`    

class Products extends React.Component {

    state = {
        order: 'CRESCENTE'
    }
    
    onChange = (event) => {
        const choice = event.target.value
        this.setState({order: choice})
    }

    orderArray = () => {
        const newArray = this.props.propsArray.sort((a,b) => this.state.order === 'CRESCENTE' ? a.value - b.value : b.value - a.value)
    return newArray
    }

    
	

    render() {
        let printedArray = this.orderArray()
        return <ProductsContainer>
            <ProductsHeader>
                <p>Quantidade de Produtos: {printedArray.length}</p>
                <label>
                    Ordenar: 
                    <select onChange = {this.onChange}>
                        <option value={'CRESCENTE'}>Crescente</option>
                        <option value={'DECRESCENTE'}>Decrescente</option>
                    </select>
                </label>
            </ProductsHeader>
            <ProductsGrid>
                {printedArray.map((product) => {
                  return <ProductsCards addToCart={this.props.addToCart} product={product}/>
                })}
            </ProductsGrid>
        </ProductsContainer>

    }
}

export default Products