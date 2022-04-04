import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"
import OpenArrow from './../../../resources/faq.svg'
import { Arrow } from "../../../resources/svg"

export default function NavigationItemMega({ data: { slug, title, menuItem } }) {

    const [isOpened, changeIsOpened] = useState(false)

    return (
        <React.Fragment>
            <StyledLink onClick={() => { changeIsOpened(!isOpened) }}>
                {title}<img src={OpenArrow} />
            </StyledLink>
            <CloseOut isOpened={isOpened} onClick={() => { changeIsOpened(!isOpened) }} />
            <MegaMeni isOpened={isOpened}>
                <ul className="ul">
                    {menuItem.map(el => (
                        <Link onClick={() => { changeIsOpened(!isOpened) }} to={'/warsztaty/' + el.slug}>
                            <li >
                                <GatsbyImage className="img" image={el.img.gatsbyImageData} />
                                <p className="title">{el.name}</p>
                                <p className="text">{el.shortDescription}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
                <Link onClick={() => { changeIsOpened(!isOpened) }} className="offerLink" to={'/' + slug}>Zobacz pełną ofertę <Arrow /></Link>
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
        background-color: rgba(18, 17, 39, 0.04);
    }

    &:focus{
        background-color: rgba(18, 17, 39, 0.04);
        border-color: rgba(18, 17, 39, 0.04);
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
    box-shadow: 0px 12px 40px rgba(16, 24, 64, 0.24);
    border-radius: 25px;
    padding: 24px;
    .ul{
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 35px;

        li{
            padding: 16px;
            text-align: left;

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
        padding: 0;
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