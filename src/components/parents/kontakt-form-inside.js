import React from 'react'
import styled from 'styled-components'
import { KontaktImage, KontaktLeft, KontaktRight } from '../../resources/kontakt'
import { Container } from '../../styles/styles'
import KontaktForm from '../childrens/kontakt'

export default function Kontakt({ data: { title, text } }) {
    return (
        <Wrapper>
            <LocContainer>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Flex>
                    <ImageWrapper>
                        <KontaktImage />
                    </ImageWrapper>
                    <KontaktWrapper>
                        <KontaktLeft />
                        <KontaktRight />
                        <KontaktForm />
                    </KontaktWrapper>
                </Flex>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: clamp(180px, 18vw, 260px) 0 clamp(120px, 8.33vw, 160px) 0;
    background-color: #FFFBED;
    overflow: hidden;

    @media (max-width: 640px){
        padding: 180px 0 120px 0;
    }
`

const ImageWrapper = styled.div`
    margin-right: 30px;
    svg{
        width: 100%
    }

    @media (max-width: 1023px) {
        display: none;
    }
`


const LocContainer = styled(Container)`
    @media(max-width: 1024px){
        overflow: hidden;
        margin-bottom: -120px;
        padding-bottom: 120px;
    }

    @media (max-width: 640px){
        padding:  0;
        margin-bottom: -120px;
        padding-bottom: 120px;
    }
`

const Title = styled.h2`
    margin: 0 auto;
    text-align: center;
    max-width: 535px;
    font-weight: 700;
    font-size: clamp(32px, 6vw, 48px);
    line-height: 100%;
    letter-spacing: -1px;
    color: #203662;
    padding: 0 16px;
`

const Text = styled.p`
    margin: 32px 0 100px 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;  
    text-align: center;
    color: #394C71;
    @media (max-width: 640px){
        padding: 0 16px;
    }
`

const Flex = styled.div`
    display:  flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1023px) {
        display: block
    }
`

const KontaktWrapper = styled.div`
    position: relative;
    z-index: 2;
    min-width: 550px;
    box-shadow: 0px 20px 50px rgba(32, 31, 55, 0.08);


    .left{
        position: absolute;
        z-index: 1;
        left: -124px;
        bottom: -134px;
    }

    .right{
        position: absolute;
        z-index: 1;
        top: -136px;
        right: -117px;
    }

    @media(max-width: 1023px){
        margin: 0;
        min-width: unset;
    }
`