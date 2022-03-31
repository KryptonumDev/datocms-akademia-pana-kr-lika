import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-about-page"
import TwoColumnRepeater from '../components/parents/two-column-repeater'
import Testomontials from "../components/parents/testomontials";
import ImageGrid from "../components/parents/image-grid";
import Kontakt from "../components/parents/kontakt-form-outside";

export default function About({ data: { datoCmsONasPage } }) {
  return (
    <main>
      <Hero data={datoCmsONasPage.sekcjaPowitalna[0]} />
      <TwoColumnRepeater repeaterType='classic' data={datoCmsONasPage.repater[0]} />
      <Testomontials data={datoCmsONasPage.testomontials[0]} />
      <ImageGrid data={datoCmsONasPage.images[0]} />
      <Kontakt data={datoCmsONasPage.kontakt[0]} />
    </main>
  )
}

export const query = graphql`
query MyQuery {
    datoCmsONasPage {
      sekcjaPowitalna {
        title
        subTitle
        subText {
            value
        }
      }
      repater {
        title
        repeater {
          ... on DatoCmsRepeaterTwoColumn {
            id
            imgType
            img {
              gatsbyImageData
              alt
            }
            title
            textParagraph {
              value
            }
          }
        }
      }
      testomontials {
        title
        opinji {
          recenzja
          autor
          place
          img {
            alt
            gatsbyImageData
          }
        }
      }
      images {
        title
        images {
          alt
          gatsbyImageData
        }
      }
      kontakt{
        title
        text
      }
    }
  }
  
`;
