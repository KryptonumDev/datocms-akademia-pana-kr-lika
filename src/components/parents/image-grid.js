import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { ImageGridBottom, ImageGridLeft, ImageGridRight } from '../../resources/image-grid'
import { Container } from '../../styles/styles'

export default function ImageGrid({ data: { images, sectionTitle } }) {
    return (
        <Wrapper>
            <LocContainer>
                <Title><StructuredText data={sectionTitle} /></Title>
                <GridWrapper>
                    <ImageGridBottom />
                    <ImageGridLeft />
                    <ImageGridRight />
                    <Grid>
                        {images.map(el => (
                            <Image image={el.gatsbyImageData} alt={el.alt} />
                        ))}
                    </Grid>
                </GridWrapper>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(100px, 25vw, 160px);
`

const LocContainer = styled(Container)`
    overflow: hidden;
    padding-bottom: 100px;
    margin-bottom: -100px;
`


const GridWrapper = styled.div`

    position: relative;
    z-index: 2;

    .left{
        position: absolute;
        z-index: 1;
        left: -100px;
        top: -80px;
        transform-origin: 0 0;
    }

    .right{
        position: absolute;
        z-index: 1;
        top: 40px;
        right: -64px;
        transform-origin: 100% 0;
    }

    .bottom{
        position: absolute;
        z-index: 1;
        left: 50%;
        transform: translateX(-25%);
        bottom: 15px;
    }

    @media (max-width: 800px){

        .left{
            left: -60px;
            top: -55px;
            transform: scale(.75);
        }

        .right{
            top: -25px;
            right: -20px;
        }

        .bottom{
            left: 50%;
            transform: translate(-40%, 40%);
            bottom: 0;
        }
    }

    @media (max-width: 500px){

        .left{
            transform: scale(.55);
        }

        .right{
            transform: scale(.75);
        }

    }
`

const Grid = styled.div`
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-areas: 
        "a ."
        "a c"
        "a c"
        "a c"
        "a c"
        "b c"
        "b c"
        "b c"
        "b c"
        "b .";
    grid-gap: 50px;

    @media (max-width: 800px) {
        grid-template-areas:
        '. a a a .'
        '. b b b .'
        '. c c c .';
        grid-gap: 24px;
    }

    @media (max-width: 600px){
        grid-template-areas:
        'a'
        'b'
        'c';
    }
`

const Image = styled(GatsbyImage)`
    border-radius: 25px;
    img{
        transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1), opacity .25s linear !important;
    }


    :nth-child(1){
        grid-area: a;
    }

    :nth-child(2){
        grid-area: b;
    }

    :nth-child(3) {
        grid-area: c;
    }

`

const Title = styled.div`
    h1,h2,h3,h4,h5,h6{
        margin-bottom: clamp(40px, 16vw, 120px);
        font-weight: 700;
        font-size: clamp(32px, 6vw, 48px);
        line-height: 100%;
        text-align: center;
        letter-spacing: -1px;
        color: #203662;
    }
`