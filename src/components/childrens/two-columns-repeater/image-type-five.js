import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { TypeFiveLeft, TypeFiveRight } from '../../../resources/type-five'

export default function ImageTypeFour({ mainImage }) {
    return (
        <Wrapper className='imgPart'>
            <TypeFiveLeft />
            <Image image={mainImage.gatsbyImageData} alt={mainImage.alt}/>
            <TypeFiveRight />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    flex: 40% 0 0;
    
    .left{
        position: absolute;
        z-index: 1;
        left: -40px;
        bottom: 20px;
        transform-origin: 0 100%;
    }

    .right{
        position: absolute;
        z-index: 3;
        right: -15px;
        top: 64px;
        transform-origin: 100% 0;
    }

    @media (max-width:500px) {
        .left{
            left: 0;
            bottom: 10px;
            transform: scale(.75);
        }

        .right{
            transform: scale(.75);
            right: 23px;
            top: 40px;
        }
    }

    @media (max-width:400px) {
        .left{
            left: 0;
            bottom: 10px;
            transform: scale(.55);
        }

        .right{
            right: 23px;
            top: 40px;
            transform: scale(.55);
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
    margin-left: 60px;

    @media (max-width:500px){
        width: unset;
    }
`
