import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
    align-items: center;
    
    p {
        margin:0;
    }
`

class ShoppingCartItem extends React.Component {

    render() {
        console.log(this.props.product)
        return <ItemContainer>
            <p>1x</p>
            <p>{this.props.product.name}</p>
            <p>R${this.props.product.value}</p>
            <button>Remover</button>
        </ItemContainer>
    }
}

export default ShoppingCartItem