import React, { useEffect } from 'react'
import { startTransition } from '../functions/page-transtion'
import { graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Helmet } from 'react-helmet'
import PolitykaContent from "../components/parents/polityka-content"

export default function Polityka({ data: { site, datoCmsPrivacyPolicePage } }) {

  useEffect(() => {
    startTransition()
  }, [])
  return (
    <main id='main'>
      <HelmetDatoCms
        seo={datoCmsPrivacyPolicePage.seo}
        favicon={site.favicon}
      />
      <Helmet htmlAttributes={{ lang: 'pl' }} />
      <PolitykaContent data={datoCmsPrivacyPolicePage} />
    </main>
  )
}



export const query = graphql`
    query Polityka{
        site: datoCmsSite {
          favicon: faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
        datoCmsPrivacyPolicePage {
            seo: seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            title
            content {
              value
            }
          }
    }
    `