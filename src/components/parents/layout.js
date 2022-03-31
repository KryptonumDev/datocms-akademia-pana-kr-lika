import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Footer from './footer'

export default function Layout({ children }) {
    const { datoCmsFooter, datoCmsHeader } = useStaticQuery(graphql`
        query GlobalQuery {
            datoCmsFooter {
                logo {
                    gatsbyImageData
                    alt
                }
                text
                navigation {
                    text
                    slug
                }
                socialLinks {
                    icon
                    link
                    ariaLabel
                }
                authors{
                    value
                }
            }
        }
    `)

    return (
        <>
            <header></header>
            {children}
            <Footer data={datoCmsFooter} />
        </>
    )
}