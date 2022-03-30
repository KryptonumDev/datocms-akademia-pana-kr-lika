import { GatsbyImage } from 'gatsby-plugin-image'
import { Container } from './../../styles/styles'
import React from 'react'
import styled from 'styled-components'
import { Answer, Question, QuestionWrapper } from './../childrens/faq'

export default function Faq({ data: { gatsbyImage, questions } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <ImgContainer>
                        <GatsbyImage image={''} />
                    </ImgContainer>
                    <QuestionsContainer>
                        {questions.map(el => (
                            <QuestionWrapper>
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
    padding: 120px 0;
    background-color: #F9FEFF;
`

const Flex = styled.div`

`

const ImgContainer = styled.div`

`

const QuestionsContainer = styled.div`

`