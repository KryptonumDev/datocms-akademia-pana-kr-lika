import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container, StyledLink } from '../../styles/styles'

export default function Hero({ data: { title, linkText, linkSlug, img } }) {
    return (
        <Wrapper>
            <LocContainer>
                <Title>{title}</Title>
                <LocLink to={linkSlug}>{linkText}</LocLink>
                <Image image={img.gatsbyImageData} alt={img.alt} />
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding-top: clamp(160px, 20vw, 240px); 
    position: relative;

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
`

const Title = styled.h1`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-weight: 700;
    font-size: clamp(36px, 6vw, 64px);
    line-height: 100%;
    letter-spacing: -2px;
    color: #203662;
`

const LocLink = styled(StyledLink)`
    margin: 40px auto 80px auto;

    @media (max-width: 500px) {
        width: 100%;
    }
`

const Image = styled(GatsbyImage)`
    border-radius: clamp(25px, 6vw, 50px);
`

