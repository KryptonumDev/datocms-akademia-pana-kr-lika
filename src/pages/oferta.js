import React from "react"
import { graphql } from "gatsby"
import TwoColumnRepeater from '../components/parents/two-column-repeater'
import Kontakt from "../components/parents/kontakt-form-outside";

export default function Oferta({ data: { datoCmsOfertaPage } }) {
    return (
        <main>
            <TwoColumnRepeater repeaterType='classic' data={datoCmsOfertaPage.repeater[0]} />
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
  }
`;
