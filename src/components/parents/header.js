import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import styled from 'styled-components'
import Navigation from '../childrens/header'
import { Container } from './../../styles/styles'

export default function Header({ data: { logo, menu } }) {

    const [isOpened, changeIsOpened] = useState(false)
    return (
        <Wrapper>
            <LocContainer>
                <Flex>
                    <ImageWrapper>
                        <Link to='/'>
                            <Image image={logo.gatsbyImageData} />
                        </Link>
                        <MobileOpen onClick={() => { changeIsOpened(!isOpened) }}></MobileOpen>
                    </ImageWrapper>
                    <Nav isOpened={isOpened}>
                        <ul>
                            <Navigation changeIsOpened={changeIsOpened} menu={menu} />
                        </ul>
                    </Nav>
                </Flex>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    height: 53px;
    padding: 28.5px;
    box-sizing: unset;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    box-shadow: 0px 20px 50px rgba(32, 31, 55, 0.08);
    background: #fff;

    @media(max-width: 1100px){
        height: auto;
        overflow: scroll;
        position: static;
        padding: 0;
    }
`

const MobileOpen = styled.button`
    @media(min-width: 1101px){
        display: none;
    }

    width: 36px;
    height: 36px;
    background: #55B83B;
    border-radius: 50px;
`


const LocContainer = styled(Container)`
    @media(max-width: 1100px){
        padding: 0;
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 1100px){
        display: block;
    }
`

const ImageWrapper = styled.div`
    max-height: 53px;

    @media(max-width: 1100px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: #fff;
        padding: 28.5px;
        max-height: 110px;
        
        position: fixed;
        z-index: 100;
        top: 0;
    }

    @media(max-width: 500px){
        padding: 28.5px 16px;

    }
`

const Image = styled(GatsbyImage)`
    max-width: 283px;

    @media (max-width: 500px) {
        max-width: 230px;
    }
`

const Nav = styled.nav`
    ul{
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-column-gap: 8px;

        li{

            a{
                
            }
        }
    }

     @media(max-width: 1100px){
        transition: transform .6s cubic-bezier(0.215, 0.610, 0.355, 1);
        transform: ${props => props.isOpened ? 'translateX(0)' : 'translateX(-100%)'};
        background-color: #fff;

        position: fixed;
        overflow: hidden;
        top: 110px;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;

        ul{
            overflow: auto;
            padding:  0 28.5px  28.5px  28.5px;
            max-height: 100%;
            grid-template-columns: 1fr;
            width: 102%;
        }
     }   

     @media(max-width: 500px){
         top: 100px;
         ul{
             width: 100%;
            padding:  0 16px  28.5px  16px;

         }
     }
`