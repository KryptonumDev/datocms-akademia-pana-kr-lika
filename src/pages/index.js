import React, { useEffect } from 'react'
import { startTransition } from '../functions/page-transtion'
import { graphql } from "gatsby";
import Hero from "../components/parents/hero-main-page";
import TwoColumnRepeater from "../components/parents/two-column-repeater";
import Testomontials from "../components/parents/testomontials";
import Blog from "../components/parents/blog-slider";
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Helmet } from 'react-helmet'

export default function Index({ data: { site, datoCmsHomepage, posts } }) {
  useEffect(() => {
    startTransition()
  }, [])
  return (
    <main id='main'>
      <HelmetDatoCms
        seo={datoCmsHomepage.seo}
        favicon={site.favicon}
      />
      <Helmet htmlAttributes={{ lang: 'pl' }} />
      <Hero data={datoCmsHomepage.heroSection[0]} />
      <TwoColumnRepeater data={datoCmsHomepage.repeater[0]} repeaterType="button" />
      <Testomontials data={datoCmsHomepage.opinje[0]} />
      <Blog posts={posts} />
    </main>
  )
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    datoCmsHomepage {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroSection {
        pageTitle{
          value
        }
        linkText
        linkSlug
        img {
          gatsbyImageData
          alt
        }
      }
      repeater {
        sectionTitle{
          value
        }
        repeater {
          ... on DatoCmsRepeaterTwoColumnWithButton {
            imgType
            img {
              gatsbyImageData
              alt
            }
            additionalImage {
              alt
              gatsbyImageData
            }
            blockTitle{
              value
            }
            textParagraph{
              value
            }
            linkText
            linkUrl
          }
        }
      }
      opinje {
        sectionTitle{
          value
        }
        opinji {
          img {
            alt
            gatsbyImageData
          }
          recenzja{
            value
          }
          autor{
            value
          }
          place{
            value
          }
        }
      }
    }
    posts: allDatoCmsPost(sort: {date: DESC}, limit: 2) {
      nodes {
        title
        slug
        shortText
        date
        category{
          name
          slug
        }
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
          alt
        }
      }
    }
  }
`;
