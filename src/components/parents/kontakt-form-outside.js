import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { KontaktLeft, KontaktRight } from '../../resources/kontakt'
import { Container } from '../../styles/styles'
import KontaktForm from '../childrens/kontakt'

export default function Kontakt({ data: { sectionTitle, text } }) {
    return (
        <Wrapper>
            <LocContainer>
                <Title><StructuredText data={sectionTitle} /></Title>
                <Text><StructuredText  data={text} /></Text>
                <KontaktWrapper>
                    <KontaktLeft />
                    <KontaktRight />
                    <KontaktForm />
                </KontaktWrapper>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: clamp(130px, 25vw, 160px);
    padding: 130px 0 160px;
    background-color: #F5FFF2;

    @media (max-width: 640px){
        padding: 130px 0 0;
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
        margin-bottom: 0;
    }

`

const Title = styled.div`
    h1,h2,h3,h4,h5,h6{
        margin: 0 auto;
        text-align: center;
        max-width: 535px;
        font-weight: 700;
        font-size: clamp(32px, 6vw, 48px);
        line-height: 100%;
        letter-spacing: -1px;
        color: #203662;
        padding: 0 16px;
    }
`

const Text = styled.div`
    p{
        margin: 32px auto 100px auto;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;  
        text-align: center;
        color: #394C71;
        max-width: 480px;
        @media (max-width: 640px){
            padding: 0 16px;
        }
    }
`

const KontaktWrapper = styled.div`
    position: relative;
    z-index: 2;
    margin: 0 clamp(100px, 15.6vw, 225px);

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

    @media(max-width: 1024px){
        margin: 0;
    }
`