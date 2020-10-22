import React from 'react';
import styled from 'styled-components';
import ShoppingCartItem from './ShoppingCartItem'

const CartListContainer = styled.div`
    display: grid;
    gap: 10px;
`

class ShoppingCart extends React.Component {
   
    render() {
        return <div>
            <h2>Carrinho:</h2>
            <CartListContainer>
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <p><b>Valor total: R$500,00 </b></p>
            </CartListContainer>
        </div>
    }
}

export default ShoppingCart
