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
        return <ItemContainer>
            <p>this.props.cartItem.quantity</p>
            <p>this.props.cartItem.name</p>
            <button onClick={() => this.props.removeProductFromCart(this.props.cartItem.id)}>Remover</button>
        </ItemContainer>
    }
}

export default ShoppingCartItem