import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { FooterLeft, FooterRight } from '../../resources/svg'
import { Container } from '../../styles/styles'

export default function Footer({ data: { logo, navigation, socialLinks, text } }) {
    debugger
    return (
        <Wrapper>
            <FooterLeft />
            <FooterRight />
            <Container>
                <Logo image={logo.gatsbyImageData} alt={logo.alt} />
                <LogoText>{text}</LogoText>
                <Navigation>
                    <ul>
                        {/* {data.map(el => (
                            <li>
                                <Link to={''} />
                            </li>
                        ))} */}
                    </ul>
                </Navigation>
            </Container>
        </Wrapper>
    )
}

// logo: {gatsbyImageData: {…}, alt: null}
// navigation: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// socialLinks: (3) [{…}, {…}, {…}]
// text:

const Wrapper = styled.footer`
    background: #FDF2F8;
    padding: 80px 0 100px 0;
    position: relative;

    .left{
        position: absolute;
        left: 0;
        bottom: 50px;
    }

    .right{
        position: absolute;
        top: -54px;
        right: 104px;
    }
`

const Logo = styled(GatsbyImage)`

`

const LogoText = styled.p`

`

const Navigation = styled.nav`
    ul{

        li{

            a{

            }
        }
    }
`