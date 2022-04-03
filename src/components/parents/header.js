import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import Navigation from '../childrens/header'
import { Container } from './../../styles/styles'

export default function Header({ data: { logo, menu } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <ImageWrapper>
                        <Image image={logo.gatsbyImageData} />
                    </ImageWrapper>
                    <Nav>
                        <ul>
                            <Navigation menu={menu} />
                        </ul>
                    </Nav>
                </Flex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    height: 53px;
    padding: 28.5px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ImageWrapper = styled.div`
    max-height: 53px;

`

const Image = styled(GatsbyImage)`
    max-width: 283px;
`

const Nav = styled.nav`
    ul{
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-column-gap: 8px;

        li{

            a{
                
            }
        }
    }
`