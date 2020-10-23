import React from 'react';
import styled from 'styled-components';
import ShoppingCartItem from './ShoppingCartItem'

const CartListContainer = styled.div`
    display: grid;
    gap: 10px;
    font-size: 12px;
`

class ShoppingCart extends React.Component {

    getTotalValue = () => {
        let totalValue = 0

        this.props.propsArray.forEach(element => {
            totalValue += element.value * element.quantity
        });
        return totalValue.toFixed(2)
    }
   
    render() {
        const filteredArray = this.props.propsArray.filter((product) => {
            if (product.quantity > 0){
                return true
            } else {
                return false
            }
        })

        const printedArray = filteredArray.map((product) => {
            return (<ShoppingCartItem sumCartItem={this.props.sumCartItem} subtractCartItem={this.props.subtractCartItem}  removeItem={this.props.removeItem} product={product}/>)
        })

        return <div>
            <h2>Carrinho:</h2>
            <CartListContainer>
                {printedArray}
                {<h2><b>Valor total: R${this.getTotalValue()}</b></h2>}
            </CartListContainer>
        </div>
    }
}

export default ShoppingCart
