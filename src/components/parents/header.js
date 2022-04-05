import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navigation from '../childrens/header'
import { Container } from './../../styles/styles'

export default function Header({ data: { logo, menu } }) {

    const eventListener = () => {
        if (window.scrollY > 0 && !isBackground) {
            changeIsBackground(true)
        } else {
            changeIsBackground(false)
        }
    }

    const [isOpened, changeIsOpened] = useState(false)
    const [isBackground, changeIsBackground] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.addEventListener('scroll', eventListener)
        }
    }, [])

    return (
        <Wrapper isBackground={isBackground} isOpened={isOpened}>
            <LocContainer>
                <Flex>
                    <ImageWrapper>
                        <Link aria-label='link do strony głównej' to='/'>
                            <Image image={logo.gatsbyImageData} />
                        </Link>
                        <MobileOpen id='mobileOpen' aria-label="otwórzyć lub zamknąć meni mobilne" isOpened={isOpened} onClick={() => { changeIsOpened(!isOpened) }}>
                            <span></span>
                        </MobileOpen>
                    </ImageWrapper>
                    <Nav isOpened={isOpened}>
                        <div>
                            <Navigation changeIsOpened={changeIsOpened} menu={menu} />
                        </div>
                    </Nav>
                </Flex>
            </LocContainer>
        </Wrapper>
    )
}

const ImageWrapper = styled.div`
    max-height: 53px;

    @media(max-width: 1100px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
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

const Wrapper = styled.header`
    height: 53px;
    padding: 28.5px;
    box-sizing: unset;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    @media (min-width: 1101px) {

        &::after{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            transition: opacity .6s cubic-bezier(0.215, 0.610, 0.355, 1);
            opacity: ${props => props.isBackground ? '1' : '0'};
            box-shadow: 0px 20px 50px rgba(32, 31, 55, 0.08);
            background: #fff;
            z-index: -1;
        }
        
    }

    @media(max-width: 1100px){
        height: auto;
        overflow: scroll;
        position: static;
        padding: 0;

        ${ImageWrapper}{
            &::after{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                transition: opacity .6s cubic-bezier(0.215, 0.610, 0.355, 1);
                opacity: ${props => props.isOpened || props.isBackground ? '1' : '0'};
                box-shadow: 0px 20px 50px rgba(32, 31, 55, 0.08);
                background: #fff;
                z-index: -1;
            }

        }

        

        &.active{
            ${ImageWrapper}{
                &::after{
                    opacity: 1;

                }

            }

        }
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
    position: relative;

    &::after{
        content: '';
        width: 14px;
        height: 2px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity:  ${props => props.isOpened ? '0' : '1'};
        transition: opacity .3 cubic-bezier(0.215, 0.610, 0.355, 1);
    }

    span{
        width: 14px;
        height: 2px;
        display: block;
        margin: 0 auto;
        position: relative;

        &::after{
            content: '';
            width: 14px;
            height: 2px;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transition: transform .3s cubic-bezier(0.215, 0.610, 0.355, 1);
            transform: ${props => props.isOpened ? 'translate(-50%, -50%) rotateZ(45deg)' : 'translate(-50%, calc(-50% - 4px))'};
            border-radius: 50px;
            
        }

        &::before{
            content: '';
            width: 14px;
            height: 2px;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transition: transform .3s cubic-bezier(0.215, 0.610, 0.355, 1);
            transform: ${props => props.isOpened ? 'translate(-50%, -50%) rotateZ(-45deg)' : 'translate(-50%, calc(-50% + 4px))'};
            border-radius: 50px;
        }   
    }
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

const Nav = styled.nav`
    div{
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-column-gap: 8px;
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

        div{
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