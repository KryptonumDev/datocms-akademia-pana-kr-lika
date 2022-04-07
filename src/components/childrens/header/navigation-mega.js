import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"
import OpenArrow from './../../../resources/faq.svg'
import { Arrow } from "../../../resources/svg"

export default function NavigationItemMega({ changeIsOpenedOuter, data: { slug, title, menuItem } }) {

    const [isOpened, changeIsOpened] = useState(false)

    const Close = () => {
        changeIsOpened(false)
        changeIsOpenedOuter(false)
    }

    return (
        <React.Fragment key={title}>
            <StyledLink onClick={() => { changeIsOpened(!isOpened) }}>
                {title}<img alt="strzałeczka dekoracyjna" src={OpenArrow} />
            </StyledLink>
            <CloseOut isOpened={isOpened} onClick={() => { changeIsOpened(!isOpened) }} />
            <MegaMeni isOpened={isOpened}>
                <ul className="ul">
                    {menuItem.map(el => (
                        <li key={el.name}>
                            <Link aria-label={'link do strony warsztatu ' + el.name} tabIndex={isOpened ? '0' : '-1'} onClick={() => { Close() }} to={'/warsztaty/' + el.slug} />
                            <Image className="img" image={el.img.gatsbyImageData} alt={el.img.alt} />
                            <p className="title">{el.name}</p>
                            <p className="text">{el.shortDescription}</p>
                        </li>
                    ))}
                </ul>
                <Link tabIndex={isOpened ? '0' : '-1'} onClick={() => { Close() }} className="offerLink" to={'/' + slug}>Zobacz pełną ofertę <Arrow /></Link>
            </MegaMeni>
        </React.Fragment>
    )
}

const StyledLink = styled.button`
    width: fit-content;
    padding: 13.5px 31px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    line-height: 170%;
    color: #394C71;
    transition: background-color .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    border: 1px solid transparent;

    &:hover{
        @media (min-width: 1101px){
            background-color: rgba(18, 17, 39, 0.04);
        }
    }

    &:focus{
        @media (min-width: 1101px){
            background-color: rgba(18, 17, 39, 0.04);
            border-color: rgba(18, 17, 39, 0.04);
        }
    }

    &:disabled{
        color: rgba(18, 17, 39, 0.32);
    }

    &.active{
        color: #DB2777; 
    }
    
    img{
        margin-left: 14px;
    }

    @media (max-width: 1100px) {
        padding: 0;
    }
`

const CloseOut = styled.div`
    position: fixed;
    z-index: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: ${props => props.isOpened ? 'all' : 'none'};

    @media(max-width: 1100px){
        display: none;
    }
`

const MegaMeni = styled.div`
    transition: opacity .3s cubic-bezier(0.215, 0.610, 0.355, 1);
    opacity: ${props => props.isOpened ? 1 : 0};
    pointer-events: ${props => props.isOpened ? 'all' : 'none'};
    position: absolute;
    z-index: 3;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    max-width: 1165px;
    width: 90vw;
    background: #FFFFFF;
    border: unset;
    box-shadow: 0px 12px 40px rgba(16, 24, 64, 0.24);
    border-radius: 25px;
    padding: 24px;
    display: block !important;
    overflow: hidden !important;

    a{
        border-radius: 8px;
    }

    .ul{
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 35px;

        li{
            padding: 16px;
            text-align: left;
            position: relative;

            a{
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: 3;
                border-radius: 25px;
            }

            .img{
                width: 60px;
                height: 60px;
                border-radius: 8px;
            }

            .title{
                font-weight: 700;
                font-size: 18px;
                line-height: 110%;
                letter-spacing: -0.25px;
                color: #203662;
                margin: 16px 0 8px 0;
            }

            .text{
                font-weight: 500;
                font-size: 14px;
                line-height: 180%;
                color: #394C71;

            }
        }
    }

    .offerLink{
        margin: 0 auto;
        width: fit-content;
        font-weight: 600;
        font-size: 16px;
        line-height: 170%;
        color: #DB2777;
        display: flex;
        align-items: center;
        svg{
            margin-left: 10px;
        }
    }

    @media(max-width: 1100px){
        margin-bottom: 32px;
        padding: 0 !important;
        width: 99% !important;
        overflow: hidden;
        position: unset;
        left: unset;
        box-shadow: unset;
        border-radius: unset;
        transform: unset;
        opacity: 1;
        visibility: visible;
        transition: height .5s cubic-bezier(0.39, 0.575, 0.565, 1);
        height: ${props => props.isOpened ? '100%' : '0.01px'};
        overflow: hidden;

        .ul{
            grid-template-columns: 1fr 1fr;
            padding: 0;
            margin-top: 32px;

            li{
                max-width: 320px;
                padding: 0;
            }
        }

        .offerLink{
            margin: unset;
        }
    }

    @media(max-width: 500px){

        .ul{
            grid-template-columns: 1fr;
        }
    }
`

const Image = styled(GatsbyImage)`
    display: block !important;
    padding: 0 !important;
    overflow: hidden !important;

    div{
        display: block !important;
        padding: 0 !important;
    }   
`