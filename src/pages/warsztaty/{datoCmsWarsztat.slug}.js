import React from 'react'
import { graphql } from "gatsby"
import Hero from '../../components/parents/hero-warsztat-page'
import TwoColumnRepeater from '../../components/parents/two-column-repeater'
import ImageGrid from '../../components/parents/image-grid'
import Kontakt from '../../components/parents/kontakt-form-outside'
import Faq from '../../components/parents/faq'

export default function Warsztat({ data: { datoCmsWarsztat } }) {
    return (
        <main>
            <Hero data={datoCmsWarsztat.hero[0]} />
            <TwoColumnRepeater repeaterType='list' data={datoCmsWarsztat.repeater[0]} />
            <ImageGrid data={datoCmsWarsztat.images[0]}/>
            <Faq data={datoCmsWarsztat.faq[0]}/>
            <Kontakt data={datoCmsWarsztat.kontakt[0]}/>
        </main>
    )
}

export const query = graphql`
    query WarsztatBySlug($id: String){
        datoCmsWarsztat(id: {eq: $id}) {
            slug
            previewText
            nazwaWarsztatu
            hero {
                title
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
                title
                repeater {
                    ... on DatoCmsRepeaterTwoColumn {
                        id
                        title
                        textParagraph {
                            value
                        }
                        imgType
                        img {
                            gatsbyImageData
                            alt
                        }
                    }
                }
            }
            kontakt {
                title
                text
                }
                images {
                title
                images {
                    gatsbyImageData
                    alt
                }
            }
            faq {
                title
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