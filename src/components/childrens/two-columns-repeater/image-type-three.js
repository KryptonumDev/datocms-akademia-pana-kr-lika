import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { TypeThreeLeft, TypeThreeRight } from '../../../resources/type-three'

export default function ImageTypeThree({ mainImage }) {
    return (
        <Wrapper className='imgPart'>
            <TypeThreeLeft />
            <Image image={mainImage.gatsbyImageData} alt={mainImage.alt} />
            <TypeThreeRight />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    flex: 50% 0 0;
    .left{
        position: absolute;
        z-index: 3;
        left: -34px;
        top: -55px;
        transform-origin: 0 0;
    }

    .right{
        position: absolute;
        z-index: 1;
        right: -107px;
        bottom: -45px;
        transform-origin: 100% 100%;
    }

    @media (max-width:500px) {
        .left{
            left: -24px;
            top: -35px;
            transform: scale(.75);
        }

        .right{
            right: -14px;
            bottom: -15px;
            transform: scale(.75);
        }
    }

    @media (max-width:400px) {
        .left{
            left: -16px;
            top: -25px;
            transform: scale(.55);
        }

        .right{
            right: -20px;
            bottom: -22px;
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
