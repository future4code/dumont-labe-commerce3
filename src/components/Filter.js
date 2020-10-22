import React from 'react';
import styled from 'styled-components';

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`
const NumberInput = styled.input`
    box-sizing: border-box;
    width: 80px;
    max-width: 90%;
    margin-top: 0;
    margin-bottom: 16px;
    padding: 0;
`
const FreeTextInput = styled.input`
    box-sizing: border-box;
    text-align: center;
    width: 160px;
    max-width: 95%;    
    margin-top: 0;
    padding: 0;
`
const InputTittle = styled.p`
    word-wrap: break-word;
    max-width: 100%;
    margin: 4px;
`
const SectionTittle = styled.h2`
    word-wrap: break-word;
    max-width: 100%;
`
const H3Tittle = styled.h3`    
    word-wrap: break-word;
    max-width: 100%;
`

class Filter extends React.Component {

    render() {
        return (
            <InputDiv>
                <SectionTittle>Filtros:</SectionTittle>

                <InputTittle>Valor mínimo</InputTittle>

                <NumberInput type="number"
                    value={this.props.minValue}
                    onChange={this.props.onChangeMin}
                />

                <InputTittle>Valor máximo</InputTittle>

                <NumberInput type="number"
                    value={this.props.maxValue}
                    onChange={this.props.onChangeMax}
                />

                <H3Tittle>ou...</H3Tittle>

                <InputTittle>Busque por produto:</InputTittle>

                <FreeTextInput placeholder="Nome do produto"
                    value={this.props.textValue}
                    onChange={this.props.onChangeText}
                />
            </InputDiv>
        )
    }
}

export default Filter