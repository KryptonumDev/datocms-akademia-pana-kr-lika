import React, { useEffect } from 'react'
import { startTransition } from '../../functions/page-transtion'
import { graphql } from "gatsby"
import Content from "../../components/parents/post-content";
import Blog from "../../components/parents/blog-slider";
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Helmet } from 'react-helmet'

export default function Post({ data: { site, post, morePosts } }) {
  useEffect(() => {
    startTransition()
  }, [])
  return (
    <main id='main'>
      <HelmetDatoCms
        seo={post.seo}
        favicon={site.favicon}
      />
      <Helmet htmlAttributes={{ lang: 'pl' }} />
      <Content data={post} />
      <Blog posts={morePosts} />
    </main>
  );
}

export const query = graphql`
  query PostBySlug($id: String) {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    post: datoCmsPost(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      shortText
      category {
        slug
        name
      }
      content {
        value
        blocks {
          id: originalId
          img {
            alt
            gatsbyImageData
            title
          }
        }
      }
      date
      coverImage {
        alt
        gatsbyImageData(width: 1500)
      }
    }
    morePosts: allDatoCmsPost(
      sort: {date: DESC},
      limit: 2
      filter: { id: { ne: $id } }
    ) {
      nodes {
        title
        slug
        shortText
        date
        category {
            slug
            name
        }
        coverImage {
          small: gatsbyImageData(width: 760)
          alt
        }
      }
    }
  }
`;
