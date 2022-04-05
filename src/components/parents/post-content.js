import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { PostLeft, PostRight } from "../../resources/svg"
import { Container } from "../../styles/styles"
import Quote from './../../resources/quotes.svg'

export default function Content({ data: { category, content, shortText, title, slug, date, coverImage } }) {
    return (
        <Wrapper>
            <Container>
                <Category>{category.name}</Category>
                <Title>{title}</Title>
                <SubTitle>{shortText}</SubTitle>
                <ImageWrapper>
                    <PostLeft />
                    <PostRight />
                    <Image image={coverImage.gatsbyImageData} />
                </ImageWrapper>
                <ContentBox>
                    <StructuredText data={content} />
                </ContentBox>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    position: relative;
    padding-top: clamp(140px, 15vw, 180px);
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

const Category = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 170%;
    text-align: center;
    color: #203662;
    padding: 14.5px 34px;
    background: #FFFFFF;
    border-radius: 100px;
    display: block;
    width: fit-content;
    margin: 0 auto;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 64px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -2px;
    color: #203662;
    margin: 32px;
`

const SubTitle = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #394C71;
    margin-bottom: 80px;
`

const ImageWrapper = styled.div`
    position: relative;
    margin-bottom: 140px;

    .left{
        position: absolute;
        z-index: -1;
        transform-origin: 100% 0;
        left: -87px;
        bottom: -73px;
    }

    .right{
        position: absolute;
        z-index: -1;
        top: -90px;
        right: -100px;
        transform-origin: 0 100%;
    }

    @media (max-width: 760px) {
        .left{
            transform: scale(.75);
            left: -115px;
            bottom: -107px;
        }

        .right{
            transform: scale(.75);
            top: -152px;
            right: -162px;

        }
    }

@media (max-width: 500px) {
    .left{
        transform: scale(.33);
        left: -183px;
        bottom: -168px;
    }

    .right{
        transform: scale(.33);
        right: -256px;
        top: -260px;
    }
}
`

const Image = styled(GatsbyImage)`
    border-radius: 25px;
`

const ContentBox = styled.div`
    max-width: 740px;
    margin: 0 auto;

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

    img{
        width: 100%;
        border-radius: 25px;
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
`