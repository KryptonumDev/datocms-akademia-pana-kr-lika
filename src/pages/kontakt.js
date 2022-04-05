import React from "react"
import { graphql } from "gatsby"
import KontaktForm from './../components/parents/kontakt-form-inside'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Helmet } from 'react-helmet'

export default function Kontakt({ data: { site, datoCmsKontaktPage } }) {
    return (
        <main>
            <HelmetDatoCms
                seo={datoCmsKontaktPage.seo}
                favicon={site.favicon}
            />
            <Helmet htmlAttributes={{ lang: 'pl' }} />
            <KontaktForm data={datoCmsKontaktPage.kontaktForm[0]} />
        </main>
    )
}

export const query = graphql`
    query Kontakt{
        site: datoCmsSite {
          favicon: faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
        datoCmsKontaktPage {
            seo: seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            kontaktForm {
              title
              text
            }
          }
    }
`