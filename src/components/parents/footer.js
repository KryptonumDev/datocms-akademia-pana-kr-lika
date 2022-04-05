import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { Facebook, FooterLeft, FooterRight, Instagram, Twitter } from '../../resources/footer'
import { Container } from '../../styles/styles'
import { SOCIAL_ICONS } from './../../constants/types'

export default function Footer({ data: { logo, navigation, socialLinks, text, authors } }) {
    return (
        <Wrapper>
            <FooterLeft />
            <FooterRight />
            <Container>
                <Logo image={logo.gatsbyImageData} alt={logo.alt} />
                <LogoText>{text}</LogoText>
                <Navigation itemsCount={navigation.length}>
                    <ul>
                        {navigation.map(el => (
                            <li key={el.text}>
                                <Link to={'/' + el.slug} >{el.text}</Link>
                            </li>
                        ))}
                    </ul>
                </Navigation>   
                <Social>
                    {socialLinks.map(el => (
                        <li key={el.link}>
                            <Link to={ el.link} aria-label={el.ariaLabel}>
                                {(() => {
                                    switch (el.icon) {
                                        case SOCIAL_ICONS.FACEBOOK:
                                            return <Facebook />
                                        case SOCIAL_ICONS.TWITTER:
                                            return <Twitter />
                                        case SOCIAL_ICONS.INSTAGRAM:
                                            return <Instagram />
                                        default:
                                            return null
                                    }
                                })()}
                            </Link>
                        </li>
                    ))}
                </Social>
                <Authors>
                    <StructuredText data={authors}/>
                </Authors>
            </Container>
        </Wrapper>
    )
}

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

    @media (max-width: 1024px){
        padding: 80px 0 50px 0;
        overflow: hidden;

        .left{
            top: 0;
            transform: translateY(-80%);
            bottom: unset;
        }

        .right{
            right: 10px;
        }
    }
`

const Logo = styled(GatsbyImage)`
    max-width: 230px;
    margin: 0 auto;
    display: block;
    position: relative;

    @media (max-width: 1024px){
        margin: 0;

    }

`

const LogoText = styled.p`
    max-width: 380px;
    margin: 10px auto 50px auto;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 170%;
    color: #394C71;
    position: relative;

    @media (max-width: 1024px){
        margin: 10px 0 0 0;
        text-align: left;
    }
`

const Navigation = styled.nav`
    margin-bottom: 55px;
    position: relative;

    ul{
        display: flex;
        width: fit-content;
        margin: 0 auto;
        li{
            margin:  0 clamp(0px, 1.1vw, 14px);

            a{
                border-radius: 50px;
                padding: 13px 31px;
                font-weight: 600;
                font-size: 16px;
                line-height: 170%;
                color: #394C71;
                transition: background-color .2s cubic-bezier(0.215, 0.610, 0.355, 1);
                border: 1px solid transparent;

                &:hover{
                    background-color: rgba(18, 17, 39, 0.04);
                }

                &:focus{
                    background-color: rgba(18, 17, 39, 0.04);
                    border-color: rgba(18, 17, 39, 0.04);
                }
            }
        }
    }

    @media (max-width: 1024px) {
        margin-bottom: 16px;

        ul{
            flex-direction: column;
            margin: 0;

            li{
                margin-left: 0;
                margin-top: 16px;

                a{
                    padding: 0;
                    &:hover{
                        background-color: transparent;
                    }   

                    &:focus{
                        background-color: transparent;
                        border-color: transparent;
                    }
                }
            }
        }
    }   
`

const Social = styled.ul`
    display: flex;
    width: fit-content;
    margin: 0 auto;
    position: relative;

    li{
        margin-left: 40px;

        :first-child{
            margin-left: 0;
        }

        a{

        }
    }

    @media (max-width: 1024px){
        margin: 0;
    }
`

const Authors = styled.div`
    text-align: center;
    margin: 30px auto 0;
    position: relative;

    p{
        font-size: 16px;
        line-height: 170%;
        color: #394C71;

        strong{
            font-weight: 500;

        }

        a{
            color: #394C71;

        }
    }

    @media (max-width: 1024px){
        margin: 16px 0 0 0;
        text-align: left;
    }
`