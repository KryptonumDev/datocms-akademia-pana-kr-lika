import React, { useEffect } from 'react'
import { startTransition } from '../functions/page-transtion'
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-blog-page"
import BlogPosts from "../components/parents/blog-posts"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Helmet } from 'react-helmet'

export default function Blog({ data: { site, datoCmsBlog, allDatoCmsPost, allDatoCmsBlogCategory } }) {

    useEffect(() => {
        startTransition()
    }, [])

    return (
        <main id='main'>
            <HelmetDatoCms
                seo={datoCmsBlog.seo}
                favicon={site.favicon}
            />
            <Helmet htmlAttributes={{ lang: 'pl' }} />
            <Hero data={{ hero: datoCmsBlog.hero[0], post: allDatoCmsPost.nodes[0] }} />
            <BlogPosts data={{ posts: allDatoCmsPost.nodes.slice(1), categories: allDatoCmsBlogCategory.nodes, content: datoCmsBlog.kontentStrony[0] }} />
        </main>
    )
}

export const query = graphql`
    query Blog{
        site: datoCmsSite {
          favicon: faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
        datoCmsBlog {
            seo: seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
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