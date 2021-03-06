import React from 'react'
import { StructuredText } from 'react-datocms'
import styled, { keyframes } from 'styled-components'
import { OfferSteps, OfferHeroLeft, OfferHeroLeftBottom, OfferHeroRight } from '../../resources/offer'
import { Container } from '../../styles/styles'
import { animStart } from './../../functions/animation-start'

export default function Hero({ data: { pageTitle, sectionTitle, steps } }) {

    return (
        <Wrapper>
            <OfferHeroLeft />
            <OfferHeroLeftBottom />
            <OfferHeroRight />
            <Container>
                <Title ><StructuredText data={pageTitle} /></Title>
                <StepsTitle><StructuredText data={sectionTitle} /></StepsTitle>
                <Steps>
                    {steps.map((el, index) => (
                        <StepsItem onMouseEnter={(el) => { animStart(el) }} key={el.title}>
                            <StepNumber numColor={el.color.hex}>
                                <OfferSteps />
                                {'0' + (index + 1)}
                            </StepNumber>
                            <StructuredText data={el.stepTitle}/>
                            <StructuredText data={el.stepText}/>
                        </StepsItem>
                    ))}
                </Steps>
            </Container>
        </Wrapper >
    )
}

const trambling = keyframes`
	0%,50%,100%{
		transform:rotate(0deg);
	}
	10%,30%{
		transform:rotate(-1deg);
	}
	20%,40%{
		transform:rotate(1deg);
	}
`

const Wrapper = styled.section`
    position: relative;
    background-color: #F5FFF2;
    overflow: hidden;

    &::before{
        content: "";
        position: absolute;
        z-index: 0;
        background-color: #FDF2F8;
        left: 0;
        right: 0;
        top: 0;
        height: 500px;
    }

    .left{
        position: absolute;
        z-index: 1;
        left: -20px;
        top: 110px;
    }

    .leftBottom{
        position: absolute;
        z-index: 0;
        left: 44px;
        top: 362px;
    }

    .right{
        position: absolute;
        z-index: 0;
        right: -82px;
        top: 110px;
    }

    @media (max-width: 640px){
        .right{
            display: none;
        }

        .left{
        }

        .leftBottom{
            left: -50px;
            top: 330px;
        }
    }
`

const Title = styled.div`
    h1,h2,h3,h4,h5,h6{
        padding: 280px 0 250px 0;
        font-weight: 700;
        font-size: clamp(48px, 4.8vw, 64px);
        line-height: 100%;
        text-align: center;
        letter-spacing: -2px;
        color: #203662;
        position: relative;
        z-index: 4;

        @media (max-width: 960px) {
            padding: 220px 0 315px 0;
            
        }

        @media (max-width: 640px) {
            padding: 160px 0 380px 0;
            
        }
    }
`

const StepsTitle = styled.div`
    h1,h2,h3,h4,h5,h6{
        font-weight: 700;
        font-size: clamp(32px, 6vw, 48px);
        line-height: 100%;
        text-align: center;
        letter-spacing: -1px;
        color: #203662;
        max-width: 750px;
        margin: 0 auto;
    }
 `

const Steps = styled.div`
    padding: 100px 0 120px 0;
    display: grid;
    grid-column-gap: 18px;
    grid-row-gap: 48px;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 960px) {
        grid-template-columns: 1fr 1fr;
        padding: 75px 0 90px 0;
    }

    @media (max-width: 640px){
        grid-template-columns: 1fr;
        grid-row-gap: 24px;
        padding: 50px 0 60px 0;
    }
`

const StepsItem = styled.div`
    background: #FFFFFF;
    border: 1px solid #F3F5F8;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 33px 36px;

    &.animated{
        animation: 1s ${trambling} ease-out;
    }

    h3{
        margin-bottom: 16px;
        font-weight: 700;
        font-size: 24px;
        line-height: 100%;
        color: #203662;
    }

    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 170%;
        color: #394C71;
    }

    @media (max-width: 500px){
        padding: 32px 16px;
    }
`

const StepNumber = styled.span`
    color: ${props => props.numColor};
    font-weight: 700;
    font-size: 48px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -1px;
    width: 86px;
    height: 80px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;

    svg{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        path{
            fill: ${props => props.numColor};
            opacity: .1;
        }
    }
`