import styled from "styled-components"
import { Link } from 'gatsby'

export const Container = styled.div`
    max-width: 1304px;
    margin: 0 auto;
    padding: 0 32px; 

    @media(max-width: 876px){
        overflow: hidden;
    }

    @media(max-width: 500px){
        padding: 0 16px; 
    }
`

export const StyledLink = styled(Link)`
    display: block;
    width: fit-content;
    padding: 14.5px 32px;
    border-radius: 100px;
    background-color: #DB2777;
    border: none;
    transition: background-color .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    line-height: 170%;
    text-align: center;

    &:hover{
        background-color: #BE185D;
    }

    &:focus{
        background-color: #9D174D;
    }

    &:disabled{
        background-color: #DB2777;
    }

    @media(max-width: 360px){  
        font-size: 14px;
        padding: 14.5px 8px;
    }
`

export const OutlinedLink = styled(Link)`
    display: block;
    width: fit-content;
    padding: 13.5px 31px;
    border-radius: 100px;
    background-color: #fff;
    border: 1px solid rgba(18, 17, 39, 0.12);
    transition: background-color .2s cubic-bezier(0.215, 0.610, 0.355, 1), color .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    color: #0E1F41;
    font-weight: 600;
    font-size: 16px;
    line-height: 170%;
    text-align: center;

    &:hover{
        background-color: rgba(18, 17, 39, 0.04);
    }

    &:focus{
        background-color: rgba(18, 17, 39, 0.04);
    }

    &:disabled{
        color: rgba(18, 17, 39, 0.32);
    }

`