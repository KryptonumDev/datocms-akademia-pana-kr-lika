import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { Container } from '../../styles/styles'

export default function Hero({ data: { pageTitle, textParagraph, img, content } }) {
    return (
        <Wrapper>
            <Container>
                <Image image={img.gatsbyImageData} alt={img.alt} />
                <Flex>
                    <div>
                        <Title ><StructuredText data={pageTitle} /></Title>
                        <Text data={textParagraph} />
                    </div>
                    <List>
                        <StructuredText data={content} />
                    </List>
                </Flex>
            </Container>
        </Wrapper>

    )
}

const Wrapper = styled.div`
    margin-top: clamp(120px, 20vw, 180px);

`

const Image = styled(GatsbyImage)`
    border-radius: 25px;
    min-height: 230px;
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-column-gap: clamp(0px, 13.8vw, 200px);
    margin-top: 60px;

    @media (max-width: 1200px) {
        grid-column-gap: clamp(0px, 6vw, 200px);
    }

    @media (max-width: 764px) {
        grid-template-columns: 1fr;
        grid-row-gap: 32px;
    }
`

const Title = styled.div`
    h1,h2,h3,h4,h5,h6{
        font-weight: 700;
        font-size: clamp(32px, 6vw, 48px);
        line-height: 100%;
        letter-spacing: -1px;
        color: #203662;
        margin-bottom: 32px;
    }
`

const Text = styled(StructuredText)`
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 170%;
        color: #394C71;
    }
`

const List = styled.div`
    p{
        margin-bottom: 9px;
    }
`