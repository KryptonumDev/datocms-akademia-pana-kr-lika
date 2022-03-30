import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/parents/hero-main-page";
import TwoColumnRepeater from "../components/parents/two-column-repeater";
import Testomontials from "../components/parents/testomontials";

export default function Index({ data: { datoCmsHomepage, allPosts } }) {
  return (
    <main>
      <Hero data={datoCmsHomepage.heroSection[0]} />
      <TwoColumnRepeater data={datoCmsHomepage.repeater[0]} repeaterType="button" />
      <Testomontials  data={datoCmsHomepage.opinje[0]}/>
    </main>
  )
}

export const query = graphql`
  {
    datoCmsHomepage {
      heroSection {
        title
        linkText
        linkSlug
        img {
          gatsbyImageData
          alt
        }
      }
      repeater {
        title
        repeater {
          imgType
          img {
            gatsbyImageData
            alt
          }
          additionalImage {
            alt
            gatsbyImageData
          }
          title
          text
          linkText
          linkUrl
        }
      }
      opinje {
        title
        opinji {
          img {
            alt
            gatsbyImageData
          }
          recenzja
          autor
          place
        }
      }
      blog {
        title
        linkText
        linkUrl
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 2) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
      }
    }
  }
`;
