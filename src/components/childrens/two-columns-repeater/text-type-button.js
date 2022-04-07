import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { StyledLink } from '../../../styles/styles'

export default function TextTypeButton({ linkText, linkUrl, text, title }) {
    return (
        <Wrapper className='textPart'>
            <Title><StructuredText data={title} /></Title>
            <Text ><StructuredText data={text} /></Text>
            <Link to={linkUrl}>{linkText}</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 50px;
`

const Title = styled.div`
    h1,h2,h3,h4,h5,h6{
        font-weight: 700;
        font-size: clamp(32px, 6.4vw, 48px);
        line-height: 100%; 
        letter-spacing: -1px;
        color: #203662;

        @media (max-width: 360px) {
            font-size: 28px;
        }
    }
`

const Text = styled.div`
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 170%;
        color: #394C71;
        margin: 32px 0;
        max-width: 470px;
    }
`

const Link = styled(StyledLink)`
    @media (max-width: 500px){
        width: 100%;
    }
`