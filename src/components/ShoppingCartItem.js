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
            <p>1x</p>
            <p>Produto</p>
            <button>Remover</button>
        </ItemContainer>
    }
}

export default ShoppingCartItem