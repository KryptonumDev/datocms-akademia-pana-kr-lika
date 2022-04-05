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
        title
        subTitle
        steps {
          title
          text
          color {
            hex
          }
        }
      }
      bestsellers {
        title
      }
      kontakt {
        title
        text
      }
      repeater {
        title
        repeater {
          ... on DatoCmsRepeaterTwoColumn {
            id
            img {
              gatsbyImageData
              alt
            }
            imgType
            title
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
