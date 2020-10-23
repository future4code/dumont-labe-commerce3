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
      id: 0,
      name: "U.S.S. Discovery: NCC-1031",
      value: 349.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/228043_246x306.png",
      inCart: false,
      quantity: 0,
    },
    {
      id: 1,
      name: "USS Enterprise NCC-1701-D",
      value: 349.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/99306_246x306.png",
      inCart: false,
      quantity: 0,
    },
    {
      id: 2,
      name: "Romulan Warbird Special",
      value: 349.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/187059_246x306.png",
      inCart: false,
      quantity: 0,
    },
    {
      id: 3,
      name: "Cylon Heavy Raider",
      value: 239.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/228122_246x306.png",
      inCart: false,
      quantity: 0,
    },
    {
      id: 4,
      name: " Viper (Blood and Chrome)",
      value: 239.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/202940_246x306.png",
      inCart: false,
      quantity: 0,
    },
    {
      id: 5,
      name: "U.S.S. Orville — ECV-197",
      value: 299.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/223235_246x306.png",
      inCart: false,
      quantity: 0,
    },
    {
      id: 6,
      name: "Spocks Jellyfish",
      value: 139.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/179308_246x306.png",
      inCart: false,
      quantity: 0,
    },
    {
      id: 7,
      name: "Klingon Iks Negh'Var",
      value: 119.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/205901_246x306.png",
      inCart: false,
      quantity: 0,
    },
    ],
    minFilterValue: "",
    maxFilterValue: "",
    textFilterValue: "",
  }

  addToCart = (id) => {
    const cartArray = this.state.productsArray.map((product) => {
      if (product.id === id) {
        const newQuantity = product.quantity + 1
        const newProduct = { ...product, quantity: newQuantity }
        return newProduct
      } else {
        return product
      }
    })
    this.setState({ productsArray: cartArray })
  }

  removeItem = (id) => {
    const cartArray = this.state.productsArray.map((product) => {
      if (product.id === id) {
        const newProduct = { ...product, quantity: 0}
        return newProduct
      } else {
        return product
      }
    })
    this.setState({ productsArray: cartArray })
  }

  subtractCartItem = (id) => {
    const cartArray = this.state.productsArray.map((product) => {
      if (product.id === id) {
        const newQuantity = product.quantity - 1
        const newProduct = { ...product, quantity: newQuantity }
        return newProduct
      } else {
        return product
      }
    })
    this.setState({ productsArray: cartArray })
  }

  // ---------------------------------------------------------//
  // Funções do FILTER //
  onChangeMin = (event) => {
    const newMinValue = event.target.value
    this.setState({ minFilterValue: newMinValue })
  }

  onChangeMax = (event) => {
    const newMaxValue = event.target.value
    this.setState({ maxFilterValue: newMaxValue })
  }

  onChangeText = (event) => {
    const newTextValue = event.target.value
    this.setState({ textFilterValue: newTextValue })
  }

  filterProductsArray = (min, max, text) => {
    let filteredByValueArray
    if (min || max) {
      // Se min ou max não forem zero ou vazio. Senão, pula o filtro por valor.
      filteredByValueArray = this.state.productsArray.filter((product) => {
        if (min && !max) {
          // Se min não for zero ou vazio e max for.       
          return product.value >= min
        } else if (!min && max) {
          // Se max não for zero ou vazio e min for.
          return product.value <= max
        } else if (min && max) {
          // Se ambos min e max tem um valor diferente de vazio ou zero.
          return ((product.value >= min) && (product.value <= max))
        }
      })

    } else {
      filteredByValueArray = this.state.productsArray
    }

    let fullyFilteredArray
    if (text) {
      // Se o campo "Buscar por produto" não estiver vazio. Senão, pula o filtro por texto.
      fullyFilteredArray = filteredByValueArray.filter((product) => {
        return product.name.toLowerCase().includes(`${text.toLowerCase()}`)
      })
    } else {
      fullyFilteredArray = filteredByValueArray
    }

    return fullyFilteredArray
  }
  // ---------------------------------------------------------//

  render() {
    let arrayFilter = (this.filterProductsArray(this.state.minFilterValue, this.state.maxFilterValue, this.state.textFilterValue))
    return (
      <MotherDiv>
        <ComponentDiv>
          <Filter
            onChangeMin={this.onChangeMin}
            onChangeMax={this.onChangeMax}
            onChangeText={this.onChangeText}

            minValue={this.state.minFilterValue}
            maxValue={this.state.maxFilterValue}
            textValue={this.state.textFilterValue}
          />
        </ComponentDiv>
        <ComponentDiv>
          <Products addToCart={this.addToCart} propsArray={arrayFilter} />
        </ComponentDiv>
        <ComponentDiv>
          <ShoppingCart  sumCartItem={this.addToCart} subtractCartItem={this.subtractCartItem} removeItem={this.removeItem} propsArray={this.state.productsArray} />
        </ComponentDiv>
      </MotherDiv>
    );
  }
}

export default App;
