import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container, StyledLink } from '../../styles/styles'
import { HeroMainPageLeft, HeroMainPageRight } from '../../resources/hero-main-page'
import { StructuredText } from 'react-datocms'

export default function Hero({ data: { pageTitle, linkText, linkSlug, img } }) {
    return (
        <Wrapper>
            <LocContainer>
                <Title><StructuredText data={pageTitle} /></Title>
                <LocLink to={linkSlug}>{linkText}</LocLink>
                <ImageContainer>
                    <HeroMainPageLeft />
                    <HeroMainPageRight />
                    <Image image={img.gatsbyImageData} alt={img.alt} />
                </ImageContainer>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding-top: clamp(160px, 20vw, 240px); 
    position: relative;
    overflow: hidden;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: clamp(8px, 17vw, 250px);
        background-color: #FDF2F8;
        z-index: -1;
    }
`

const LocContainer = styled(Container)`
    max-width: 984px;

    @media(max-width: 1170px){
        
    }
`

const Title = styled.div`
    h1,h2,h3,h4,h5,h6{
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        font-weight: 700;
        font-size: clamp(36px, 6vw, 64px);
        line-height: 100%;
        letter-spacing: -2px;
        color: #203662;

        @media (max-width: 500px) {
            letter-spacing: -1.5px;
        }
    }
`

const LocLink = styled(StyledLink)`
    margin: 40px auto 80px auto;

    @media (max-width: 500px) {
        width: 100%;
    }
`

const Image = styled(GatsbyImage)`
    border-radius: clamp(25px, 6vw, 50px);
    img{
        transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1), opacity .25s linear !important;
    }

    :hover{
        img{
            transform-origin: 50% 50%;
            transform: scale(1.03);
        }
    }
`

const ImageContainer = styled.div`
    position: relative;

    .left{
        position: absolute;
        top: -73px;
        left: -168px;
        transform-origin: 0 0;
    }

    .right{
        position: absolute;
        transform-origin: 100% 0;
        top: -190px;
        right: -120px;
    }

    @media (max-width: 760px) {
        .left{
            transform: scale(.75);
            top: -40px;
            left: -60px;
        }

        .right{
            transform: scale(.75);
            top: -58px;
            right: -45px;
        }
    }

    @media (max-width: 500px) {
        .left{
            transform: scale(.30);
            top: -18px;
            left: -16px;
        }

        .right{
            transform: scale(.33);
            top: -26px;
            right: -16px;
        }
        
    }
`

