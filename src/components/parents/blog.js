import React from 'react'
import styled from 'styled-components'
import { Container, OutlinedLink } from '../../styles/styles'

export default function Blog({ data: { title, linkText, linkUrl } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <Title>{title}</Title>
                    <Link to={linkUrl}>{linkText}</Link>
                </Flex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: clamp(100px, 25vw, 160px) 0;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 764px){
        display: block;
    }
`

const Title = styled.h2`
    font-weight: 700;
    font-size: clamp(32px, 6.4vw, 48px);
    line-height: 100%;
    letter-spacing: -1px;
    color: #203662;
    
    @media(max-width: 764px){
        margin-bottom: 30px;
    }
`

const Link = styled(OutlinedLink)`
    @media(max-width: 500px){
        width: 100%;
    }
`