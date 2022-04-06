import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container, OutlinedLink } from '../../styles/styles'
import { Link } from 'gatsby'
import { DateParser } from '../../functions/datae-parser'

export default function Blog({ data: { title, linkText, linkUrl }, posts: { nodes: posts } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <Title>{title}</Title>
                    <SLink to={linkUrl}>{linkText}</SLink>
                </Flex>
                <Grid>
                    {posts.map(el => (
                        <Link key={el.slug} to={'/blog/' + el.slug}>
                            <GridItem>
                                <div className='category'>{el.category.name}</div>
                                <div>
                                    <Image image={el.coverImage.small} />
                                    <h3>{el.title}</h3>
                                    <p>{el.shortText}</p>
                                </div>
                                <div className="flex">
                                    <span className="next">
                                        {'Czytaj dalej ->'}
                                    </span>
                                    <span className="date">
                                        {DateParser(el.date)}
                                    </span>
                                </div>
                            </GridItem>
                        </Link>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: clamp(100px, 25vw, 160px) 0;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 764px){
        display: block;
    }
`

const Title = styled.h2`
    font-weight: 700;
    font-size: clamp(32px, 6.4vw, 48px);
    line-height: 100%;
    letter-spacing: -1px;
    color: #203662;
    
    @media(max-width: 764px){
        margin-bottom: 30px;
    }
`

const SLink = styled(OutlinedLink)`
    @media(max-width: 500px){
        width: 100%;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin-top: clamp(60px, 14.4vw, 100px);

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        max-width: 500px;
        margin: clamp(50px, 7.6vw, 100px) auto;
        
    }
`

const GridItem = styled.div`
    border: 1px solid #F3F5F8;
    box-sizing: border-box;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .category{
        position: absolute;
        font-weight: 600;
        font-size: 16px;
        line-height: 170%;
        text-align: center;
        color: #203662;
        background: #FFFFFF;
        border-radius: 100px;
        padding: 13.5px 33px;
        top: 28px;
        right: 22px;
        z-index: 3;
    }

    h3{
        padding: 32px 32px 8px 32px;
        font-weight: 700;
        font-size: 24px;
        line-height: 110%;
        letter-spacing: -0.5px;
        color: #394C71;

    }

    p{
        padding: 0 32px;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #394C71;

    }

    .flex{
        padding: 48px 32px 32px 32px;
        display: flex;
        justify-content: space-between;
       
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

    @media (max-width: 500px) {
        h3{
            padding: 16px 16px 8px 16px;
        }
        p{
            padding: 0 16px;
        }
        .flex{
            padding: 48px 16px 16px 16px;
        }
    }
`

const Image = styled(GatsbyImage)`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    height: 340px;
    @media (max-width: 500px) {  
        height: 259px;
    }
`