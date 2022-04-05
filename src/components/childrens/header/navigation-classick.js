import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function NavigationItemClassick({ data, changeIsOpened }) {
    return (
        <StyledLink key={data.name} onClick={() => { changeIsOpened(false) }} activeClassName="active" to={'/' + data.slug}>
            {data.name}
        </StyledLink>
    )
}

const StyledLink = styled(Link)`
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
        @media (min-width: 1101px) {
            background-color: rgba(18, 17, 39, 0.04);
        }
    }

    &:focus{
        @media (min-width: 1101px) {
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

    :last-child{
        padding: 13.5px 31px;
        background-color: #55B83B;
        color: #fff;
        margin: 0 0 0 31px;

        &:hover{
            background-color: rgb(57, 143, 35);
        }

        &.active{
            color: #fff; 
            background-color: rgb(57, 143, 35);
        }
    }

    @media (max-width: 1100px) {
        padding: 0;
        margin-bottom: 32px;

        :last-child{
            padding: 13.5px 31px;
            box-sizing: border-box;
            text-align: center;
            max-width: 340px;
            width: 100%;
            margin-left: 0;
        }
    }
`