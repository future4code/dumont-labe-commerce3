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

        for(let product of this.props.propsArray){
            totalValue += product.value * product.quantity
        }
        return totalValue
    }
   
    render() {
        const filteredArray = this.props.propsArray.filter((product) => {
            if (product.inCart === true){
                return true
            } else {
                return false
            }
        })

        const printedArray = filteredArray.map((product) => {
            return (<ShoppingCartItem removeItem={this.props.removeItem} product={product}/>)
        })

        return <div>
            <h2>Carrinho:</h2>
            <CartListContainer>
                {printedArray}
                <p><b>Valor total: R${this.getTotalValue()}</b></p>
            </CartListContainer>
        </div>
    }
}

export default ShoppingCart
