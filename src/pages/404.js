import React from "react"
import { graphql } from "gatsby"
import Content from "../components/parents/error-content"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Helmet } from 'react-helmet'

export default function NotFoundPage({ data: { site, datoCmsErorrPage } }) {
  return (
    <main>
    <HelmetDatoCms
        seo={datoCmsErorrPage.seo}
        favicon={site.favicon}
    />
    <Helmet htmlAttributes={{ lang: 'pl' }} />
      <Content data={datoCmsErorrPage} />
    </main>
  )
}


export const query = graphql`
    query Error{
      site: datoCmsSite {
        favicon: faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsErorrPage {
        seo: seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        title
        text
        buttonText
      }
    }
    `