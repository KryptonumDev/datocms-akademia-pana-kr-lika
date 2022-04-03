import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function NavigationItemClassick ({ data }) {
    return(
        <StyledLink activeClassName="active" to={'/' + data.slug}>
            {data.name}
        </StyledLink>
    )
}

const StyledLink = styled(Link)`
    width: fit-content;
    padding: 13.5px 31px;
    border-radius: 50px;
    font-weight: 500;
    font-size: 16px;
    line-height: 170%;
    color: #394C71;

    :last-child{
        background-color: #55B83B;
        color: #fff;
        margin: 0 31px;
    }

    &.active{
        color: #DB2777; 
    }
`