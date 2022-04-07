import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { testomontialsSliderData } from '../../constants/sliders-data'
import { Container } from '../../styles/styles'
import Slider from './../childrens/slider'
import { TestomntialsRight, TestomontialsQuote } from '../../resources/testomontial'
import { StructuredText } from 'react-datocms'

export default function Testomontials({ data: { sectionTitle, opinji } }) {
    return (
        <Wrapper>
            <Container>
                <Title><StructuredText data={sectionTitle} /></Title>
                <Slider data={testomontialsSliderData}>
                    {opinji.map(el => (
                        <React.Fragment key={el.autor}>
                            <SliderItem>
                                <TextPart>
                                    <TestomontialsQuote />
                                    <QuoteText ><StructuredText data={el.recenzja} /></QuoteText>
                                    <QuoteAuthor ><StructuredText data={el.autor} /></QuoteAuthor>
                                    <QuotePlace ><StructuredText data={el.place} /></QuotePlace>
                                </TextPart>
                                <ImageWrapper>
                                    <Image image={el.img.gatsbyImageData} alt={el.img.alt} />
                                    <TestomntialsRight />
                                </ImageWrapper>
                            </SliderItem>
                        </React.Fragment>
                    ))}
                </Slider>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: clamp(100px, 25vw, 160px);
`

const Title = styled.div`    
    h1,h2,h3,h4,h5,h6{
        margin: 0 auto;
        text-align: center;
        max-width: 535px;
        font-weight: 700;
        font-size: clamp(32px, 6vw, 48px);
        line-height: 100%;
        letter-spacing: -1px;
        color: #203662;
        margin-bottom: 80px;

        @media (max-width: 764px){
            margin-bottom: 40px;
        }

        @media (max-width: 500px) {
                text-align: left;
        }
    }
`

const SliderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 764px) {
        flex-direction: column-reverse;
    }
`

const TextPart = styled.div`
    max-width: 470px;
`
const QuoteText = styled.div`
    p{
        font-weight: 500;
        font-size: clamp(16px, 3vw, 20px);
        line-height: 180%;
        color: #394C71;
        margin: 30px 0;
    }
`

const QuoteAuthor = styled.div`
    p{
        padding-left: 50px;
        display: block;
        font-weight: 700;
        font-size: clamp(16px, 3vw, 24px);
        line-height: 110%;
        letter-spacing: -0.5px;
        color: #203662;
        position: relative;

        &::before{
            content:'';
            width: 35px;
            height: 3px;
            background-color: #EC4899;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50px;
        }
    }
`

const QuotePlace = styled.div`
    p{
        margin-left: 50px;
        display: block;
        font-weight: 500;
        font-size: clamp(14px, 2.8vw, 16px);
        line-height: 170%;
        color: #394C71; 
        margin-top: 8px;
    }
`

const Image = styled(GatsbyImage)`
    max-width: 340px;

    @media (max-width: 764px){
        margin-bottom: 50px;
        width: 100%;
        max-width: 340px;
        min-width: unset;
    }
`

const ImageWrapper = styled.div`
    position: relative;

    .right{
        position: absolute;
        top: 50px;
        right: 10px;    
        z-index: -1;
    }
`