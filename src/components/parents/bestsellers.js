import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/styles'

export default function Bestsellers({ data: { title }, warsztaty }) {
    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                <Grid>
                    {warsztaty.map(({ node: el }) => (
                        <Link to={'/warsztaty/' + el.slug}>
                            <GridItem>
                                <Image image={el.previewImg.gatsbyImageData} />
                                <h3>{el.nazwaWarsztatu}</h3>
                                <p>{el.previewText}</p>
                            </GridItem>
                        </Link>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: clamp(100px, 25vw, 160px);

`

const Title = styled.h2`
    font-weight: 700;
    font-size: clamp(32px, 6vw, 48px);
    line-height: 100%;
    text-align: center;
    letter-spacing: -1px;
    color: #203662;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 18px;
    grid-row-gap: 48px;
    margin-top: 60px;   

    @media (max-width: 960px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 640px) {
        grid-row-gap: 24px;
        grid-template-columns: 1fr;
    }
`

const GridItem = styled.div`
    border: 1px solid #F3F5F8;
    box-sizing: border-box;
    border-radius: 25px;
    height: 100%;

    h3{
        font-weight: 700;
        font-size: 24px;
        line-height: 110%;
        text-align: center;
        letter-spacing: -0.5px;
        color: #203662;
        margin: 24px 20px 0 20px;
    }

    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 170%;
        text-align: center;
        color: #394C71;
        margin: 8px 20px 24px 20px;
    }
    
`

const Image = styled(GatsbyImage)`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`