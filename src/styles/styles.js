import styled from "styled-components"
import { Link } from 'gatsby'

export const Container = styled.div`
    max-width: 1304px;
    margin: 0 auto;
    padding: 0 32px; 
`

export const StyledLink = styled.div`
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
`