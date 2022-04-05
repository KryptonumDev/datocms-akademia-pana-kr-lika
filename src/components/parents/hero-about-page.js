import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { AboutHeroBackgroundLeft, AboutHeroBackgroundRight, AboutHeroRightTop, AboutHeroRightBottom, AboutHeroLeft } from '../../resources/about-hero'
import { Container } from '../../styles/styles'

export default function Hero({ data: { title, subTitle, subText } }) {
    return (
        <Wrapper>
            <AboutHeroBackgroundLeft />
            <AboutHeroBackgroundRight />
            <LocContainer>
                <Title>{title}</Title>
                <Content>
                    <AboutHeroRightTop />
                    <AboutHeroRightBottom />
                    <AboutHeroLeft />
                    <h2>{subTitle}</h2>
                    <StructuredText data={subText} />
                </Content>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding-top: clamp(160px, 20vw, 280px); 
    max-width: 1440px;
    margin: 0 auto;
    position: relative;

    &::before{
        content: '';
        background-color: #FDF2F8;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100vw;
        height: 600px;
    }

    .hero-left{
        position: absolute;
        left: -40px;
        top: 125px;
    }

    .hero-right{
        position: absolute;
        right: 36px;
        top: 160px;
    }
    
    .hero-background{
        position: absolute;
        z-index: -1;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
    }

    @media (max-width: 1240px) {
        .hero-right{
            display: none;
        }
    }

@media (max-width: 1024px) {
    .hero-left{
        left: -150px;
        top: 205px;
    }
}

@media(max-width: 760px){
    .hero-left{
        top: 133px;
    }
}
`

const LocContainer = styled(Container)`
    padding:  0 0 160px 0;
    margin-bottom: -160px;

    @media (max-width: 1390px) {
        overflow: hidden !important;  
    }
`

const Title = styled.h1`
    font-weight: 700;
    font-size: clamp(48px, 4.8vw, 64px);
    line-height: 100%;
    text-align: center;
    letter-spacing: -2px;
    color: #203662;
`

const Content = styled.div`
    position: relative;
    padding: 45px 28px;
    margin: 160px clamp(0px, 7vw, 100px) 0 clamp(0px, 7vw, 100px);
    box-shadow: 0px 20px 50px rgba(32, 31, 55, 0.08);
    border-radius: 25px;
    border: 1px solid #F3F5F8;
    background-color: #fff;

    h2{
        margin-bottom: 32px;
        font-weight: 700;
        font-size: clamp(24px, 4.8vw, 36px);
        line-height: 100%;
        color: #203662;
    }

    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 170%;
        color: #394C71;

    }

    .left{
        position: absolute;
        z-index: -1;
        transform-origin: 0 100%;
        left: -90px;
        bottom: -135px;
    }

    .rightTop{
        position: absolute;
        z-index: -1;
        transform-origin: 100% 0;
        right: -135px;
        top: -165px;
    }

    .rightBottom{
        position: absolute;
        z-index: -1;
        transform-origin: 100% 100%;
        bottom: 67px;
        right: -50px;
    }

    @media(max-width: 764px){
        margin: clamp(60px, 15.7vw, 160px) clamp(0px, 4vw, 100px) 0 clamp(0px, 4vw, 100px);

        .rightTop{
            display: none;
        }

        .rightBottom{
            display: none;
        }

        .left{
            left: -50px;
            bottom: -95px;
        }
    }

    @media(max-width: 500px){
        margin: clamp(60px, 15.7vw, 160px) 0 0 0;
    }
`