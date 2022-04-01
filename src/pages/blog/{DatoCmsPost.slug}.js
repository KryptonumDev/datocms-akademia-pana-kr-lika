import React from "react"
import { graphql } from "gatsby"

export default function Post({ data: { post, morePosts: { nodes: morePosts } } }) {
  debugger
  return (
    <></>
  );
}

export const query = graphql`
  query PostBySlug($id: String) {
    post: datoCmsPost(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      category {
        slug
        name
      }
      content {
        value
        blocks 
      }
      date
      coverImage {
        gatsbyImageData(width: 1500)
      }
    }
    morePosts: allDatoCmsPost(
      sort: { fields: date, order: DESC }
      limit: 2
      filter: { id: { ne: $id } }
    ) {
      nodes {
        title
        slug
        shortText
        date
        coverImage {
          small: gatsbyImageData(width: 760)
        }
      }
    }
  }
`;
