import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-blog-page"
import BlogPosts from "../components/parents/blog-posts"

export default function Blog({ data: { datoCmsBlog, allDatoCmsPost, allDatoCmsBlogCategory } }) {
    return (
        <main>
            <Hero data={{ hero: datoCmsBlog.hero[0], post: allDatoCmsPost.nodes[0] }} />
            <BlogPosts data={{ posts: allDatoCmsPost.nodes.slice(1), categories: allDatoCmsBlogCategory.nodes, content:  datoCmsBlog.kontentStrony[0]}} />
        </main>
    )
}

export const query = graphql`
    query Blog{
        datoCmsBlog {
          hero {
            title
          }
          kontentStrony{
              title
          }
        }
        allDatoCmsPost {
            nodes {
                title
                slug
                date
                shortText
                coverImage {
                    gatsbyImageData
                    alt
                }
                category {
                    slug
                    name
                }
            }
        }
        allDatoCmsBlogCategory {
            nodes {
                slug
                name
            }
        }
    }
    `