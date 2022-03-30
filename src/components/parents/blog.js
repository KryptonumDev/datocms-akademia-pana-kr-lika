import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/styles'

export default function Blog({ data: { title, linkText, linkUrl } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <Title>{title}</Title>

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
`

const Title = styled.h2`
    font-weight: 700;
    font-size: clamp(32px, 6.4vw, 48px);
    line-height: 100%;
    letter-spacing: -1px;
    color: #203662;
`