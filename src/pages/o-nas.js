import React, { useEffect } from 'react'
import { startTransition } from '../functions/page-transtion'
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-about-page"
import TwoColumnRepeater from '../components/parents/two-column-repeater'
import Testomontials from "../components/parents/testomontials";
import ImageGrid from "../components/parents/image-grid";
import Kontakt from "../components/parents/kontakt-form-outside";
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Helmet } from 'react-helmet'

export default function About({ data: { site, datoCmsONasPage } }) {
  useEffect(() => {
    startTransition()
  }, [])
  return (
    <main id='main'>
      <HelmetDatoCms
        seo={datoCmsONasPage.seo}
        favicon={site.favicon}
      />
      <Helmet htmlAttributes={{ lang: 'pl' }} />
      <Hero data={datoCmsONasPage.sekcjaPowitalna[0]} />
      <TwoColumnRepeater repeaterType='persons' data={datoCmsONasPage.repater[0]} />
      <Testomontials data={datoCmsONasPage.testomontials[0]} />
      <ImageGrid data={datoCmsONasPage.images[0]} />
      <Kontakt data={datoCmsONasPage.kontakt[0]} />
    </main>
  )
}

export const query = graphql`
query MyQuery {
  site: datoCmsSite {
    favicon: faviconMetaTags {
      ...GatsbyDatoCmsFaviconMetaTags
    }
  }
    datoCmsONasPage {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      sekcjaPowitalna {
        pageTitle{
          value
        }
        sectionTitle{
          value
        }
        subText {
            value
        }
      }
      repater {
        sectionTitle{
          value
        }
        repeater {
          ... on DatoCmsRepeaterTwoColumn {
            id
            imgType
            img {
              gatsbyImageData
              alt
            }
            blockTitle{
              value
            }
            textParagraph {
              value
            }
          }
        }
      }
      testomontials {
        sectionTitle{
          value
        }
        opinji {
          recenzja{
            value
          }
          autor{
            value
          }
          place{
            value
          }
          img {
            alt
            gatsbyImageData
          }
        }
      }
      images {
        sectionTitle{
          value
        }
        images {
          alt
          gatsbyImageData
        }
      }
      kontakt{
        sectionTitle{
          value
        }
        text{
          value
        }
      }
    }
  }
  
`;
