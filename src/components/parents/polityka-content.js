import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { PolitykaLeft, PolitykaRight } from "../../resources/svg"
import { Container } from "../../styles/styles"
import Quote from './../../resources/quotes.svg'

export default function PolitykaContent({ data: { title, content } }) {
    return (
        <Wrapper>
            <LocContainer>
                <Title>{title}</Title>
                <Content>
                    <PolitykaLeft />
                    <PolitykaRight />
                    <StructuredText data={content} />
                </Content>
            </LocContainer>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    padding-top: clamp(160px, 20vw, 240px); 
    padding-bottom: clamp(100px, 15px, 180px);  
    position: relative;
    overflow: hidden;

    &::before{
        content: "";
        position: absolute;
        height: 670px;
        top: 0;
        left: 0;
        right: 0;
        background: #FFFBED;
        z-index: -1;
    }
`

const LocContainer = styled.div`
    overflow: unset;
`


const Title = styled.h1`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;
    text-align: center;
    font-weight: 700;
    font-size: clamp(48px, 6vw, 64px);
    line-height: 100%;
    letter-spacing: -2px;
    color: #203662;

    @media (max-width: 500px) {
        letter-spacing: -1.5px;
    }
`

const Content = styled.div`
    padding: 45px 28px;
    background: #FFFFFF;
    border: 1px solid #F3F5F8;
    box-sizing: border-box;
    box-shadow: 0px 20px 50px rgba(32, 31, 55, 0.08);
    border-radius: 25px;
    max-width: 1020px;
    margin: clamp(60px, 10vw, 120px) auto 0 auto;
    position: relative;

    .left{
        position: absolute;
        z-index: -1;
        left: -90px;
        top: -90px;
        transform-origin: 0 0;
    }

    .right{
        position: absolute;
        z-index: -1;
        transform-origin: 100% 0;
        top: -260px;
        right: -80px;

    }

    h1, h2{
        font-weight: 700;
        font-size: clamp(24px, 3vw, 36px);
        line-height: 110%;
        letter-spacing: -1.5px;
        color: #203662;
        margin-bottom: 16px;
    }

    h3, h4, h5, h6 {
        font-weight: 700;
        font-size: clamp(18px, 2.67vw, 32px);
        line-height: 110%;
        letter-spacing: -1px;
        color: #203662;
        margin-bottom: 16px;
    }

    p{
        margin-bottom: 30px;
        font-weight: 500;
        font-size: clamp(16px, 1.66vw, 20px);
        line-height: 180%;
        color: #394C71;

        :last-child{
            margin-bottom: 0;
        }
    }

    p + h2{
        margin-top: 56px;
    }

    blockquote{
        max-width: 660px;
        padding: 0 0 0 44px;
        margin:  66px 0;
        position: relative;

        &::before{
            content: url(${Quote});
            position: absolute;
            left: 0;
            top: 5px;
        }

        p{
            margin: 0;
            font-weight: 700;
            font-size: 24px;
            line-height: 110%;
            letter-spacing: -0.5px;
            color: #203662;
        }

        footer{
            display: none;
        }
    }

    ul{
        margin: 26px 0;
        display: grid;
        grid-gap: 16px;

        li{
            padding-left: 28px;
            position: relative;

            &::before{
                content: "●";
                position: absolute;
                left: 0;
                color: #F4EEE6;
                font-size: 20px;
                line-height: 180%;
            }
        }
    }

    @media (max-width: 600px) {
        .left{
            
            left: -379px;
            top: -286px;
        }
        .right{
            display: none;
        }
    }
` 