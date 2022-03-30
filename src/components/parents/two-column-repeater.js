import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/styles'
import { ImagePart, TextPart } from '../childrens/two-columns-repeater.js'

export default function TwoColumnRepeater({ repeaterType, data: { title, repeater } }) {
    return (
        <Wrapper>
            <Container>
                {title ?
                    <Title>{title}</Title>
                    : null
                }
                {repeater.map(el => (
                    <Item>
                        <ImagePart imgType={el.imgType} mainImg={el.img} additionalImg={el.additionalImage} />
                        <TextPart repeaterType={repeaterType} linkText={el.linkText} linkUrl={el.linkUrl} text={el.text} title={el.title} />
                    </Item>
                ))}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`

const Title = styled.section`

`

const Item = styled.div`
    display: flex;
    align-items: center;
    margin-top: clamp(100px, 25vw, 160px);
    position: relative;

    .imgPart{
        margin-right: clamp(50px, 7.6vw, 110px);
        margin-left: 0;
    }

    :nth-child(2n){
        flex-direction: row-reverse;
        .imgPart{
            margin-right: 0;
            margin-left: 30px;
        }

        &::before{
            content: "";
            border-radius: 25px;
            width: 100%;
            max-width: 872px;
            margin: 0 auto;
            position: absolute;
            z-index: -1;
            top: -40px;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #ECFDF7;
        }
    }

    @media (max-width: 876px) {
        flex-direction: column;
        max-width: 630px;
        margin: clamp(100px, 25vw, 160px) auto 0;
        .imgPart{
            margin: 0;
        }

        :nth-child(2n){
            flex-direction: column;

            .imgPart{
                margin: 0;
            }

            &::before{
                left: -50%;
                right: -50%;
                transform: unset;
                width: unset;
                max-width: unset;
            }
        }
    }

    @media (max-width: 700px) {
        :nth-child(2n){
            &::before{
                left: -32px;
                right: -32px;
            }
        }
    }

    @media (max-width: 500px) {
        :nth-child(2n){
            &::before{
                left: -16px;
                right: -16px;
            }
        }
    }
`   