import React, { useEffect } from 'react'
import { startTransition } from '../functions/page-transtion'
import { graphql } from "gatsby"
import TwoColumnRepeater from '../components/parents/two-column-repeater'
import Kontakt from "../components/parents/kontakt-form-outside";
import Hero from "../components/parents/hero-offer-page";
import Bestsellers from "../components/parents/bestsellers";
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Helmet } from 'react-helmet'

export default function Oferta({ data: { site, datoCmsOfertaPage, allDatoCmsWarsztat: { edges: warsztaty } } }) {
  useEffect(() => {
    startTransition()
  }, [])
  return (
    <main id='main'>
      <HelmetDatoCms
        seo={datoCmsOfertaPage.seo}
        favicon={site.favicon}
      />
      <Helmet htmlAttributes={{ lang: 'pl' }} />
      <Hero data={datoCmsOfertaPage.hero[0]} />
      <TwoColumnRepeater repeaterType='solo' data={datoCmsOfertaPage.repeater[0]} />
      <Bestsellers warsztaty={warsztaty} data={datoCmsOfertaPage.bestsellers[0]} />
      <Kontakt data={datoCmsOfertaPage.kontakt[0]} />
    </main>
  )
}

export const query = graphql`
query OfertaQuery {
  site: datoCmsSite {
    favicon: faviconMetaTags {
      ...GatsbyDatoCmsFaviconMetaTags
    }
  }
    datoCmsOfertaPage {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      hero {
        pageTitle{
          value
        }
        sectionTitle{
          value
        }
        steps {
          stepTitle{
            value
          }
          stepText{
            value
          }
          color {
            hex
          }
        }
      }
      bestsellers {
        sectionTitle{
          value
        }
      }
      kontakt {
        sectionTitle{
          value
        }
        text{
          value
        }
      }
      repeater {
        sectionTitle{
          value
        }
        repeater {
          ... on DatoCmsRepeaterTwoColumn {
            id
            img {
              gatsbyImageData
              alt
            }
            imgType
            blockTitle{
              value
            }
            textParagraph {
              value
            }
          }
        }
      }
    }
    allDatoCmsWarsztat {
      edges {
        node {
          slug
          previewText
          nazwaWarsztatu
          previewImg{
            gatsbyImageData
            alt
          }
        }
      }
    }
  }
`;
