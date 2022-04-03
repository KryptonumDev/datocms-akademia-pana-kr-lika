import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Footer from './footer'
import Header from './header'

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
            datoCmsHeader {
                logo {
                  gatsbyImageData
                  alt
                }
                menu {
                  ... on DatoCmsRepeaterNavigationClassick {
                    __typename
                    id
                    name
                    slug
                  }
                  ... on DatoCmsRepeaterNavigationMegaMenu {
                    __typename
                    id
                    title
                    slug
                    menuItem {
                      slug
                      name
                      shortDescription
                      img {
                        alt
                        gatsbyImageData
                      }
                    }
                  }
                }
            }
        }
    `)
    return (
        <>
            <Header data={datoCmsHeader}/>
            {children}
            <Footer data={datoCmsFooter} />
        </>
    )
}