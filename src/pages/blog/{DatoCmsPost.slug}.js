import React from "react"
import { graphql } from "gatsby"
import Content from "../../components/parents/post-content";
import Blog from "../../components/parents/blog-slider";

export default function Post({ data: { post, morePosts } }) {
  return (
    <main>
      <Content data={post} />
      <Blog data={post.otherPosts[0]} posts={morePosts} />
    </main>
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
      shortText
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
      otherPosts {
        title
        linkUrl
        linkText
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
