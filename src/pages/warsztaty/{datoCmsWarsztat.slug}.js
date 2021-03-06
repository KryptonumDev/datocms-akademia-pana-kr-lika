import React, { useEffect } from 'react'
import { startTransition } from '../../functions/page-transtion'
import { graphql } from "gatsby"
import Hero from '../../components/parents/hero-warsztat-page'
import TwoColumnRepeater from '../../components/parents/two-column-repeater'
import ImageGrid from '../../components/parents/image-grid'
import Kontakt from '../../components/parents/kontakt-form-outside'
import Faq from '../../components/parents/faq'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Helmet } from 'react-helmet'

export default function Warsztat({ data: { site, datoCmsWarsztat } }) {
    useEffect(() => {
        startTransition()
    }, [])
    return (
        <main id='main'>
            <HelmetDatoCms
                seo={datoCmsWarsztat.seo}
                favicon={site.favicon}
            />
            <Helmet htmlAttributes={{ lang: 'pl' }} />
            <Hero data={datoCmsWarsztat.hero[0]} />
            <TwoColumnRepeater repeaterType='list' data={datoCmsWarsztat.repeater[0]} />
            <ImageGrid data={datoCmsWarsztat.images[0]} />
            <Faq data={datoCmsWarsztat.faq[0]} />
            <Kontakt data={datoCmsWarsztat.kontakt[0]} />
        </main>
    )
}

export const query = graphql`
    query WarsztatBySlug($id: String){
        site: datoCmsSite {
          favicon: faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
        datoCmsWarsztat(id: {eq: $id}) {
            seo: seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            slug
            previewText
            nazwaWarsztatu
            hero {
                pageTitle{
                    value
                  }
                textParagraph{
                    value
                }
                img {
                    gatsbyImageData
                    alt
                }
                content {
                    value
                }
            }
            repeater {
                sectionTitle{
                    value
                  }
                repeater {
                    ... on DatoCmsRepeaterTwoColumnWithList {
                        id
                        blockTitle{
                            value
                          }
                        textParagraph {
                            value
                        }
                        textType
                        imgType
                        img {
                            gatsbyImageData
                            alt
                        }
                    }
                }
            }
            kontakt {
                sectionTitle{
                    value
                  }
                text{
                    value
                  }
                }
            images {
                sectionTitle{
                    value
                  }
                images {
                    gatsbyImageData
                    alt
                }
            }
            faq {
                sectionTitle{
                    value
                  }
                questions {
                    answer
                    question
                }
                img {
                    gatsbyImageData
                    alt
                }
            }
        }
    }
`