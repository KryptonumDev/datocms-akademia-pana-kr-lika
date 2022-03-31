import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { TypeThreeLeft, TypeThreeRight } from '../../../resources/svg'

export default function ImageTypeThree({ mainImage }) {
    return (
        <Wrapper className='imgPart'>
            <TypeThreeLeft />
            <Image image={mainImage.gatsbyImageData} />
            <TypeThreeRight />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    flex: 40% 0 0;
    .left{
        position: absolute;
        z-index: 1;
        left: -60px;
        bottom: 140px;
        transform-origin: 0 100%;
    }

    .right{
        position: absolute;
        z-index: 3;
        right: 10px;
        top: 10px;
        transform-origin: 100% 0;
    }

    @media (max-width:500px) {
        .left{
            left: -31px;
            bottom: -66px;
            top: unset;
        }

        .right{
            right: 0px;
            transform: scale(.75);
        }
    }
`

const Image = styled(GatsbyImage)`
   border-radius: 25px;
   position: relative;
   z-index: 2;
   max-width: 500px;
   width: 100%;
   aspect-ratio: 1/1;
   @media (max-width:500px){
       width: unset;
       margin: 0 30px;
   }
`
