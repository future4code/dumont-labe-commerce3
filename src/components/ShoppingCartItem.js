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

    state = {
        quantity: 1
    }

    addUnit = () => {
        let addQuantity = this.state.quantity + 1
        this.setState({quantity: addQuantity})
    }

    removeUnit = () => {
        const subQuantity = this.state.quantity - 1
        if (subQuantity === 0) {
            this.props.removeItem(this.props.product.id)
        }
        this.setState({quantity: subQuantity})
    }

    render() {
        console.log(this.props.product)
        return <ItemContainer>
<<<<<<< HEAD
            <p>{this.props.product.quantity}x</p>
            <p>{this.props.product.name}</p>
            <p>R${this.props.product.value}</p>
            <button onClick={() => this.props.removeFromCart(this.props.product.id)}>Remover</button>
=======
            <p>{this.props.product.name}</p>
            <p>R${this.props.product.value}</p>
            <p>x {this.state.quantity}</p>
            <button onClick = {this.addUnit()}>+</button>
            <button onClick = {this.removeUnit()}>-</button>
            <button onClick = {() => this.props.removeItem(this.props.product.id)}>X</button>
>>>>>>> c1ba3dc31a81def705f840f8913c1eaf829ba33c
        </ItemContainer>
    }
}

export default ShoppingCartItem