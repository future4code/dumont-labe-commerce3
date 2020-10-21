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
    productsArray: [{
      id: Date.now(),
      name: "U.S.S. Discovery: NCC-1031",
      value: 349.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/228043_246x306.png",
      inCart: false,
    },
    {
      id: Date.now() - 1,
      name: "USS Enterprise NCC-1701-D",
      value: 349.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/99306_246x306.png",
      inCart: false,
    },
    {
      id: Date.now() - 2,
      name: "Romulan Warbird Special Issue",
      value: 349.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/187059_246x306.png",
      inCart: false,
    },
    {
      id: Date.now() - 3,
      name: "Cylon Heavy Raider",
      value: 239.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/228122_246x306.png",
      inCart: false,
    },
    {
      id: Date.now() - 4,
      name: " Viper (Blood and Chrome)",
      value: 239.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/202940_246x306.png",
      inCart: false,
    },
    {
      id: Date.now() - 5,
      name: "U.S.S. Orville — ECV-197",
      value: 299.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/223235_246x306.png",
      inCart: false,
    },
    {
      id: Date.now() - 6,
      name: "Spocks Jellyfish",
      value: 139.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/179308_246x306.png",
      inCart: false,
    },
    {
      id: Date.now() - 7,
      name: "Klingon Iks Negh'Var",
      value: 119.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/205901_246x306.png",
      inCart: false,
    },
    ],
    minFilterValue: "",
    maxFilterValue: "",
  }

  // ---------------------------------------------------------//
  // Funções do FILTER //
  filterByValue = (min, max) => {
    const filteredByMinValueArray = this.state.productsArray.filter((product) => {
      if (min) { // Se min não for zero ou vazio        
        return product.value >= min
      } else {
        return true
      }
    })

    const newFilteredByValueArray = filteredByMinValueArray.filter((product) => {
      if (max) { // Se max não for zero ou vazio 
        return product.value <= max
      } else {
        return true
      }
    })

    return newFilteredByValueArray
  }
  // ---------------------------------------------------------//
  
  render() {
    console.log(this.filterByValue(0,0))
    return (
      <MotherDiv>
        <ComponentDiv>
          <Filter />
        </ComponentDiv>
        <ComponentDiv>
          <Products propsArray={this.state.productsArray} />
        </ComponentDiv>
        <ComponentDiv>
          <ShoppingCart propsArray={this.state.productsArray} />
        </ComponentDiv>
      </MotherDiv>
    );
  }
}

export default App;
