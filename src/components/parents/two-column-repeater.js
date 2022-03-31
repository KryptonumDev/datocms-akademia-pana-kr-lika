import React from 'react'
import styled, { css } from 'styled-components'
import { Container } from '../../styles/styles'
import { ImagePart, TextPart } from '../childrens/two-columns-repeater'

export default function TwoColumnRepeater({ repeaterType, data: { title, repeater } }) {
    return (
        <Wrapper>
            <Container>
                {title ?
                    <Title>{title}</Title>
                    : null
                }
                <div>
                    {repeater.map(el => (
                        <Item repeaterType={repeaterType} key={el.text}>
                            <ImagePart imgType={el.imgType} mainImg={el.img} additionalImg={el.additionalImage} />
                            <TextPart repeaterType={repeaterType} linkText={el.linkText} linkUrl={el.linkUrl} text={el.textParagraph} title={el.title} />
                        </Item>
                    ))}
                </div>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`

const Title = styled.h2`
    margin: clamp(100px, 25vw, 160px) clamp(0px,7vw,100px) 100px clamp(0px,7vw,100px);
    font-weight: 700;
    font-size: clamp(32px, 6.4vw, 48px);
    line-height: 100%;
    text-align: center;
    letter-spacing: -1px;
    color: #203662;


`

const Item = styled.div`
    display: flex;
    align-items: center;
    margin-top: clamp(100px, 25vw, 160px);
    position: relative;


    ${({ repeaterType }) => repeaterType === 'classic' && css`
    :nth-child(2n - 1) {
        flex-direction: row-reverse; 
        .imgPart{
            margin-left: clamp(110px, 15.2vw, 220px);
        }
    }

    :nth-child(2n) {
        .imgPart{
            margin-right: clamp(60px, 8.3vw, 120px);
        }
    }

    @media(max-width: 1023px){
        :nth-child(n){
            flex-direction: column;
            margin: 0 clamp(0px,7vw,100px);

            .imgPart{
                margin: 0;
            }
        }
    }

    @media(max-width: 764px){
        :nth-child(n){
            max-width: unset;
            margin: 0 ;
        }

    }
    `}

    ${({ repeaterType }) => repeaterType === 'button' && css`
    :nth-child(2n - 1){
        .imgPart{
            margin-right: clamp(50px, 7.6vw, 110px);
        }
    }
    :nth-child(2n){
        flex-direction: row-reverse;
        .imgPart{
            margin-left: 30px;
        }

        &::before{
            content: "";
            border-radius: 25px;
            width: 80%;
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

    @media(max-width: 876px){
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
    `}



@media(max-width: 876px) {
    flex-direction: column;
    max-width: 630px;
    margin: clamp(100px, 25vw, 160px) auto 0;
}

@media(max-width: 700px) {
        
}

@media(max-width: 500px) {
        
}
`   