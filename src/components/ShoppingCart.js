import React from 'react';
import styled from 'styled-components';
import ShoppingCartItem from './ShoppingCartItem'

const CartListContainer = styled.div`
    display: grid;
    gap: 10px
`

class ShoppingCart extends React.Component {

    render() {
        return <div>
            <h3>Carrinho:</h3>
            <CartListContainer>
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <p>Valor total: R$500,00 </p>
            </CartListContainer>
        </div>
    }
}

export default ShoppingCart
