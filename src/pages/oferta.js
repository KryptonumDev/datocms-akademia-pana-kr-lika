import React from "react"
import { graphql } from "gatsby"
import TwoColumnRepeater from '../components/parents/two-column-repeater'
import Kontakt from "../components/parents/kontakt-form-outside";
import Hero from "../components/parents/hero-offer-page";
import Bestsellers from "../components/parents/bestsellers";

export default function Oferta({ data: { datoCmsOfertaPage, allDatoCmsWarsztat: { edges: warsztaty } } }) {
  return (
    <main>
      <Hero data={datoCmsOfertaPage.hero[0]} />
      <TwoColumnRepeater repeaterType='solo' data={datoCmsOfertaPage.repeater[0]} />
      <Bestsellers warsztaty={warsztaty} data={datoCmsOfertaPage.bestsellers[0]} />
      <Kontakt data={datoCmsOfertaPage.kontakt[0]} />
    </main>
  )
}

export const query = graphql`
query OfertaQuery {
    datoCmsOfertaPage {
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
