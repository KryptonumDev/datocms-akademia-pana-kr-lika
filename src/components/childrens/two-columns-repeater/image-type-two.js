import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { TypeTwoLeft, TypeTwoRightTop, TypeTwoRightBottom } from '../../../resources/type-two'

export default function ImageTypeTwo({ mainImage }) {
    return (
        <Wrapper className='imgPart'>
            <TypeTwoLeft />
            <Image image={mainImage.gatsbyImageData} alt={mainImage.alt} />
            <TypeTwoRightTop />
            <TypeTwoRightBottom />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    flex: 50% 0 0;
    .left{
        position: absolute;
        z-index: 1;
        left: -99px;
        top: -88px;
        transform-origin: 0 0;
    }

    .rightTop{
        position: absolute;
        z-index: 3;
        right: -47px;
        top: -32px;
        transform-origin: 100% 0;
    }

    .rightBottom{
        position: absolute;
        z-index: 3;
        right: -44px;
        bottom: -32px;
        transform-origin: 100% 100%;
    }

    @media (max-width: 500px) { 
        margin-left: 33px !important; 
        
        .left{
            left: -48px;
            top: -60px;
            transform: scale(.65);
        }

        .rightTop{
            right: -23px;
            top: -15px;
            transform: scale(.75);
        }

        .rightBottom{
            right: -32px;
            bottom: -28px;
            transform: scale(.75);
        }
    }

    @media (max-width: 400px) {
        
        .left{
            left: -43px;
            top: -49px;
            transform: scale(.55);
        }

        .rightTop{
            right: -23px;
            top: -15px;
            transform: scale(.55);
        }

        .rightBottom{
            right: -22px;
            bottom: -16px; 
            transform: scale(.55);
        }

    }
`

const Image = styled(GatsbyImage)`
   border-radius: 25px;
   position: relative;
   z-index: 2;
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
