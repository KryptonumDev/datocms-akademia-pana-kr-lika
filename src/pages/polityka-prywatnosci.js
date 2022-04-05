import React from "react"
import { graphql } from "gatsby"
import PolitykaContent from "../components/parents/polityka-content"

export default function Polityka({ data: { datoCmsPrivacyPolicePage } }) {
    return (
        <main>
            <PolitykaContent data={datoCmsPrivacyPolicePage} />
        </main>
    )
}



export const query = graphql`
    query Polityka{
        datoCmsPrivacyPolicePage {
            title
            content {
              value
            }
          }
    }
    `