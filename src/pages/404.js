import React from "react"
import { graphql } from "gatsby"
import Content from "../components/parents/error-content"

export default function NotFoundPage({ data: { datoCmsErorrPage } }) {
  return (
    <main>
      <Content data={datoCmsErorrPage} />
    </main>
  )
}


export const query = graphql`
    query Error{
      datoCmsErorrPage {
        title
        text
        buttonText
      }
    }
    `