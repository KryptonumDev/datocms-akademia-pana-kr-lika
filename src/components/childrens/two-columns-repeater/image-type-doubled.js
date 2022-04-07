import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { TypeDoubledLeft, TypeDoubledRight } from '../../../resources/type-doubled'

export default function ImageTypeThree({ mainImage, additionalImage }) {
    return (
        <Wrapper className='imgPart'>
            <TypeDoubledLeft />
            <MainImage image={mainImage.gatsbyImageData} alt={mainImage.alt}/>
            <AdditionalImage image={additionalImage.gatsbyImageData} alt={additionalImage.alt}/>
            <TypeDoubledRight />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    flex: 50% 0 0;
    .left{
        position: absolute;
        z-index: 3;
        left: -26px;
        bottom: 21px;
        transform-origin: 0 100%;
    }

    .right{
        position: absolute;
        z-index: 1;
        right: -12px;
        top: 28px;
        transform-origin: 100% 0;
    }

    @media (max-width: 500px){
        .left{
            transform: scale(.75);
            left: -16px;
            bottom: 5px;
        }

        .right{
            transform: scale(.75);
            right: -23px;
            top: 13px;
        }
    }

    @media (max-width: 400px){
        .left{
            transform: scale(.55);
            left: -16px;
            bottom: 12px;
        }

        .right{
            transform: scale(.55);
            top: 24px;
            right: -5px;
        }
    }
    
    img{
        transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1), opacity .25s linear !important;
    }

    /* :hover{
        img{
            transform-origin: 50% 50%;
            transform: scale(1.04);
        }
    } */
`

const MainImage = styled(GatsbyImage)`
    border-radius: 25px;
    position: relative;
    z-index: 2;
    margin-right: 76px;
    margin-bottom: 37px;

    @media (max-width: 500px){
        margin-right: 43px;
        margin-bottom: 21px;

    }
`


const AdditionalImage = styled(GatsbyImage)`
    width: 43.5%;
    border-radius: 25px;
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 0;
`