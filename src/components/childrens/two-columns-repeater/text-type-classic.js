import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'

export default function TextTypeClassic({ text, title }) {
    return (
        <Wrapper className='textPart' >
            <Title>{title} </Title>
            <Text><StructuredText data={text} /></Text >
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 50px;

    @media (max-width: 764px) {
        margin-top: 120px;
    }
`

const Title = styled.h3`
    font-weight: 700;
    font-size: clamp(32px, 6.4vw, 48px);
    line-height: 100%; 
    letter-spacing: -1px;
    color: #203662;
`

const Text = styled.div`
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 170%;
        color: #394C71;
        margin: 32px 0;
    }
`