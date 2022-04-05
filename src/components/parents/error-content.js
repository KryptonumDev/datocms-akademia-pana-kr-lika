import React from "react"
import styled from 'styled-components'
import { ErrorImg, ErrorRight } from "../../resources/svg"
import { Container, StyledLink } from "../../styles/styles"

export default function Content({ data: { title, text, buttonText } }) {
    return (
        <Wrapper>
            <ErrorRight />
            <Container>
                <Flex>
                    <ImageContainer>
                        <ErrorImg />
                    </ImageContainer>
                    <TextContainer>
                        <h1>404</h1>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        <StyledLink to="/">{buttonText}</StyledLink>
                    </TextContainer>
                </Flex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: clamp(140px, 20vw, 240px);
    margin-bottom: clamp(80px, 11.67vw, 140px);
    position: relative;
    .right{
        position: absolute;
        right: 0;
        top: 126px;
        z-index: -1;
    }

    @media (max-width: 600px){
        .right{
            display: none;
        }
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1023px) {
        flex-direction: column-reverse;
    }
`

const ImageContainer = styled.div`

    .img{
        width: 100%;
        height: fit-content;
    }
    @media (max-width: 1023px){
        margin-top: 56px;
    }
`

const TextContainer = styled.div`
    text-align: center;
    max-width: 500px;
    margin: 0 auto;

    h1{
        font-weight: 700;
        font-size: clamp(64px, 6vw, 72px);
        line-height: 75px;
        text-align: center;
        letter-spacing: -2px;
        color: #203662;
    }

    h2{
        font-weight: 700;
        font-size: clamp(24px, 3vw, 36px);
        line-height: 110%;
        text-align: center;
        letter-spacing: -1.5px;
        color: #203662;
    }

    p{
        margin: 16px 0;
        font-weight: 500;
        font-size: 16px;
        line-height: 170%;
        text-align: center;
        color: #394C71;
    }

    a{
        margin: 0 auto;
    }

    @media (max-width: 400px){
        a{
            width: 100%;
        }
    }
`
