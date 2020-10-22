import React from 'react';
import styled from 'styled-components';
import ShoppingCartItem from './ShoppingCartItem'

const CartListContainer = styled.div`
    display: grid;
    gap: 10px;
`

class ShoppingCart extends React.Component {
    getTotalValue = () => {
        let totalValue = 0

        for (let product of this.props.productsInCart) {
            totalValue += product.price * product.quantity
        }

        return totalValue
    }

    render() {
        return <div>
            <h2>Carrinho:</h2>
            <CartListContainer>
                {this.props.productsInCart.map((product) => {
                    return <ShoppingCartItem cartItem={product} removeProductFromCart={this.props.removeProductFromCart}/>
                })}
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <ShoppingCartItem/>
                <p>Valor total: R${this.getTotalValue()},00 </p>
            </CartListContainer>
        </div>
    }
}

export default ShoppingCart
