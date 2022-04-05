import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from 'styled-components'
import { DateParser } from "../../functions/datae-parser"
import { Container } from "../../styles/styles"

export default function Hero({ data: { hero, post } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <Title>{hero.title}</Title>
                </Flex>
                <Link to={post.slug}>
                    <Content>
                        <Image image={post.coverImage.gatsbyImageData} alt={post.coverImage.alt} />
                        <PostCard>
                            <div className="new">
                                Nowy wpis
                            </div>
                            <h2>{post.title}</h2>
                            <p>{post.shortText}</p>
                            <div className="flex">
                                <span className="next">
                                    {'Czytaj dalej ->'}
                                </span>
                                <span className="date">
                                    {DateParser(post.date)}
                                </span>
                            </div>
                        </PostCard>
                    </Content>
                </Link>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    overflow: hidden;
`

const Flex = styled.div`

`

const Title = styled.h1`
    font-weight: 700;
    font-size: clamp(48px, 4.8vw, 64px);
    line-height: 100%;
    text-align: left;
    letter-spacing: -2px;
    color: #203662;
    margin-top: 160px;
`

const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 125%;
    margin-top: 50px;

    @media (max-width: 760px) {
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        margin: 50px auto 0;
    }
`

const PostCard = styled.div`
    width: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border: 1px solid #F3F5F8;
    border-radius: 25px;
    padding: 32px;
    height: fit-content;

    .new{
        background: #DB2777;
        border-radius: 100px;
        padding: 14.5px 32px;
        width: fit-content;
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        line-height: 170%;
        text-align: center;
    }

    h2{
        font-weight: 700;
        font-size: 24px;
        line-height: 110%;
        letter-spacing: -0.5px;
        color: #394C71;
        margin-top: 24px;
    }

    p{
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #394C71;
        margin-top: 8px;
    }

    .flex{
        display: flex;
        justify-content: space-between;
        margin-top: 48px;
       
        .next{
            font-weight: 600;
            font-size: 16px;
            line-height: 170%;
            color: #DB2777;

        }

        .date{
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
            color: #394C71;

        }
    }

    @media (max-width: 760px) {
        transform: unset;
        width: 100%;
        border-top-left-radius: unset;
        border-top-right-radius: unset;

        .new{
            position: absolute;
            top: 28px;
            right: 16px;
        }

        h2{
            margin-top: 0;
        }
    }

    @media (max-width: 500px){
        padding: 16px;
    }
`

const Image = styled(GatsbyImage)`
    width: 75%;
    border-radius: 25px;

    @media (max-width: 760px) {
        width: 100%;
        border-bottom-left-radius: unset;
        border-bottom-right-radius: unset;
    }
`