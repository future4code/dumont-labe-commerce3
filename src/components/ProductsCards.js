import React from 'react';
import styled from 'styled-components';

const CardsContainer = styled.div`
    border: 2px solid white;
    display: flex;
    flex-direction: column;
`;

const CardsInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;

    p{
     margin: 4px 0;
    }
`;

const AddToCartButton = styled.button`
    align-self: center;
    margin-top: 4px;
`;


class ProductsCards extends React.Component {

    render() {
        const product = this.props.product
        return <CardsContainer>
            <img src={product.imageUrl}/>
            <CardsInfo>
                <p>{product.name}</p>
                <p>R$ {product.value}</p>
                <button onClick = {() => this.props.addToCart(product.id)}>Adicionar ao Carrinho</button>
            </CardsInfo>
        </CardsContainer>
                }
}

export default ProductsCards
