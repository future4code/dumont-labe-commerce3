import React from 'react';
import styled from 'styled-components';
import Filter from './components/Filter'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'

const MotherDiv = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  column-gap: 8px;
  text-align: center;
  padding: 16px 8px;
  border: 1px dotted black;
`

const ComponentDiv = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px dotted black;
  padding: 16px 0;
`

class App extends React.Component {
  state = {
    productsArray: []
  }


  render() {
    return (
      <MotherDiv>
        <ComponentDiv><Filter /></ComponentDiv>
        <ComponentDiv><Products /></ComponentDiv>
        <ComponentDiv><ShoppingCart /></ComponentDiv>
      </MotherDiv>
    );
  }
}

export default App;
