import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import Arrow from './../../../resources/arrow.svg'

export default function TextTypeList({ text, title, textType }) {
    return (
        <Wrapper className='textPart' >
            <Title><StructuredText data={title} /></Title>
            <Text><StructuredText data={text} /></Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    @media (max-width: 876px){
        margin-top: 50px;
    }

    @media (max-width: 764px) {
        margin-top: 120px;
    }
`

const Title = styled.div`
    h2{
        font-weight: 700;
        font-size: clamp(36px, 6.4vw, 48px);
        line-height: 100%; 
        letter-spacing: -1px;
        color: #203662;

        @media (max-width: 340px) {
            font-size: 28px;
        }
    }
`

const Text = styled.div`
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 170%;
        color: #394C71;
        margin: 32px 0;
        max-width: 470px;
    }

    ul{
        margin-top: 40px;
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 16px;

        li{
            padding-left: 40px;
            position: relative;

            &::before{
                content: url(${Arrow});
                position: absolute;
                left: 0;
                top: 0;
                transition: transform .4s cubic-bezier(0.215, 0.610, 0.355, 1);
                transform: translateY(16%);
            }

            &:hover{
                &::before{
                    transform: translateY(16%) translateX(8px);
                }
            }

            p{
                margin: 0;
            }
        }
    }
`