import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { TypeOneLeft, TypeOneRight } from '../../../resources/type-one'

export default function ImageTypeOne({ mainImage }) {
    return (
        <Wrapper className='imgPart'>
            <TypeOneLeft />
            <TypeOneRight />
            <Image image={mainImage.gatsbyImageData} alt={mainImage.alt} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    flex: 50% 0 0;
    .left{
        position: absolute;
        z-index: 1;
        left: -34px;
        top: -45px;
        transform-origin: 0 0;
    }

    .right{
        position: absolute;
        z-index: 3;
        right: -25px;
        bottom: -27px;
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
   width: 100%;
   aspect-ratio: 1/0.9;
    img{
        transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1), opacity .25s linear !important;
    }

    :hover{
        img{
            transform-origin: 50% 50%;
            transform: scale(1.04);
        }
    }
`
