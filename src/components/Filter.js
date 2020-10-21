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
    width: 160px;
    max-width: 95%;    
    margin-top: 0;
    padding: 0;
`
const InputTitle = styled.p`
    word-wrap: break-word;
    max-width: 100%;
    margin: 4px;
`
const SectionTitle = styled.h2`
    word-wrap: break-word;
    max-width: 100%;
`

class Filter extends React.Component {

    render() {
        return (
            <InputDiv>
                <SectionTitle>Filtros:</SectionTitle>

                <InputTitle>Valor mínimo</InputTitle>

                <NumberInput />

                <InputTitle>Valor máximo</InputTitle>

                <NumberInput />

                <InputTitle>Buscar por produto</InputTitle>
                
                <FreeTextInput />
            </InputDiv>
        )
    }
}

export default Filter