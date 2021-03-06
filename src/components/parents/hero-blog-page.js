import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from 'styled-components'
import { DateParser } from "../../functions/datae-parser"
import { Arrow } from "../../resources/arrow"
import { Container } from "../../styles/styles"

export default function Hero({ data: { hero, post } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <Title><StructuredText data={hero.sectionTitle} /></Title>
                    {/* <input placeholder="Szukaj" /> */}
                </Flex>
                <Content className='desctop'>
                    <Link tabIndex='-1' to={post.slug}>
                        <Image image={post.coverImage.gatsbyImageData} alt={post.coverImage.alt} />
                    </Link>
                    <PostCard to={post.slug}>
                        <div className="new">
                            Nowy wpis
                        </div>
                        <h2>{post.title}</h2>
                        <p>{post.shortText}</p>
                        <div className="flex">
                            <span className="next">
                                Czytaj dalej<Arrow />
                            </span>
                            <span className="date">
                                {DateParser(post.date)}
                            </span>
                        </div>
                    </PostCard>
                </Content>
                <Content className='mobile'>
                    <Link to={post.slug}>
                        <Image image={post.coverImage.gatsbyImageData} alt={post.coverImage.alt} />
                        <PostCard as='div' >
                            <div className="new">
                                Nowy wpis
                            </div>
                            <h2>{post.title}</h2>
                            <p>{post.shortText}</p>
                            <div className="flex">
                                <span className="next">
                                    Czytaj dalej<Arrow />
                                </span>
                                <span className="date">
                                    {DateParser(post.date)}
                                </span>
                            </div>
                        </PostCard>
                    </Link>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    overflow: hidden;
    margin-top: 160px; 
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    input{
        min-width: 350px;
        border-radius: 50px;
        padding: 13.5px 31px;
        border: 1px solid #F3F5F8;

        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #394C71;

        &::placeholder{
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
            color: #394C7180;
        }

    }

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: flex-start;
        input{
            margin-top: 24px;
        }
    }
`

const Title = styled.div`
    h1,h2,h3,h4,h5,h6{
        font-weight: 700;
        font-size: clamp(36px, 4.8vw, 64px);
        line-height: 100%;
        text-align: left;
        letter-spacing: -2px;
        color: #203662;
    }
`

const Image = styled(GatsbyImage)`
    width: 100%;
    border-radius: 25px;
    height: 340px;

    @media (max-width: 760px) {
        width: 100%;
        border-bottom-left-radius: unset;
        border-bottom-right-radius: unset;
    }

    @media (max-width: 500px){
        height: 259px;
    }
`

const PostCard = styled(Link)`
    display: block;
    min-width: 400px;
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
            display: flex;
            align-items: center;
            svg{
                margin-left: 8px;
                transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);
            }

        }

        .date{
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
            color: #394C71;

        }
    }     
    
    @media (min-width: 601px) {
        &:hover{
            .flex{
                .next{
                    svg{
                        transform: translateX(10px);
                    }
                }
            }
        }
    }

    
    @media (max-width: 760px) {
        transform: unset;
        width: 100%;
        border-top-left-radius: unset;
        border-top-right-radius: unset;
        min-width: unset;

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

    @media (max-width: 320px) {
        .flex{
            flex-direction: column-reverse;

            .date{
                margin-bottom: 8px;
            }
        }
    }
`

const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 125%;
    margin-top: 50px;

    a{
        border-radius: 25px;
    }

    &.mobile{
        display: none;
    }


    @media (max-width: 760px) {
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        margin: 50px 0 0 0;

        &.desctop{
            display: none;
        }

        &.mobile{
            display: block;
            margin-bottom: 4px;
            a{
                display: block;
            }
        }
    }

    @media (max-width: 600px) {
        
        &:hover{
            ${Image}{
                img{
                    scale: 1.04;
                }
            }
            .flex{
                .next{
                    svg{
                        transform: translateX(10px);
                    }
                }
            }
        }
    }
`
