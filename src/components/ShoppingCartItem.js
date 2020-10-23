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
            <p>{this.props.product.name}</p>
            <p>R${this.props.product.value}</p>
            <p>x {this.props.product.quantity}</p>
            <button onClick = {() => this.props.sumCartItem(this.props.product.id)}>+</button>
            <button onClick = {() => this.props.subtractCartItem(this.props.product.id)}>-</button>
            <button onClick = {() => this.props.removeItem(this.props.product.id)}>X</button>
        </ItemContainer>
    }
}

export default ShoppingCartItem