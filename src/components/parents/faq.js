import { GatsbyImage } from 'gatsby-plugin-image'
import { Container } from './../../styles/styles'
import React from 'react'
import styled from 'styled-components'
import { Answer, Question, QuestionWrapper } from './../childrens/faq'
import FaqArrow from './../../resources/faq.svg'
import { TypeOneLeft, TypeOneRight } from '../../resources/svg'

export default function Faq({ data: { img, questions, title } }) {
    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                <Flex>
                    <ImgContainer>
                        <TypeOneLeft />
                        <TypeOneRight />
                        <Image image={img.gatsbyImageData} />
                    </ImgContainer>
                    <QuestionsContainer>
                        {questions.map(el => (
                            <QuestionWrapper key={el.answer}>
                                <Question>
                                    {el.question}
                                </Question>
                                <Answer>
                                    {el.answer}
                                </Answer>
                            </QuestionWrapper>
                        ))}
                    </QuestionsContainer>
                </Flex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: clamp(80px, 10vw, 120px) 0;
    background-color: #F9FEFF;
    margin-top: clamp(100px, 25vw, 160px);
    margin-bottom: clamp(-160px, -25vw, -100px);
`

const Title = styled.h2`
    font-weight: 700;
    font-size: clamp(32px, 6vw, 48px);
    line-height: 100%;
    text-align: center;
    letter-spacing: -1px;
    color: #203662;
    margin-bottom: clamp(50px, 12vw, 100px);

`

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 615px;
    justify-content: space-between;
    align-items: center;    
    grid-column-gap: 50px;
    

    @media (max-width: 1200px) {
        grid-template-columns: 2fr 3fr;
    }

    @media (max-width: 1023px){
        grid-template-columns: 1fr;
        max-width: 800px;
        margin: 0 auto;
    }
`

const ImgContainer = styled.div`
    position: relative;
    width: fit-content;

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

    @media (max-width: 1023px){
        display: none;
    }
`

const Image = styled(GatsbyImage)`
    position: relative;
    z-index: 5;
    border-radius: 25px;
`

const QuestionsContainer = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    padding: 56px;
    border-radius: 25px;
    border: 1px solid #F3F5F8;


    details{
        margin-bottom: 50px;
        padding-right: 48px;
        position: relative;

        :last-child{
            margin-bottom: 0;
        }

        ::after{
            content: url(${FaqArrow});
            position: absolute;
            right: 0;
            top: 0;
            transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1)
        }

        &[open]{

            ::after{
                transform: rotateZ(180deg);
            }
        }

        summary{
            list-style: none;

            ::-webkit-details-marker {
                display:none;
            }

            span{
                font-weight: 700;
                font-size: clamp(16px, 3.2vw, 24px);
                line-height: 110%;
                letter-spacing: -0.5px;
                color: #203662;

            }
        }
        p{
            margin-top: 16px;

            span{
                font-weight: 500;
                font-size: 14px;
                line-height: 180%;
                color: #394C71;
            }
        }
    }

    @media (max-width: 500px) {
        padding: 32px 16px;
    }
`