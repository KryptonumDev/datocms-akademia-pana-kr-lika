import React from "react"
import { graphql } from "gatsby"
import KontaktForm from './../components/parents/kontakt-form-inside'

export default function Kontakt({ data: {datoCmsKontaktPage} }) {
    return (
        <main>
            <KontaktForm data={datoCmsKontaktPage.kontaktForm[0]}/>
        </main>
    )
}

export const query = graphql`
    query Kontakt{
        datoCmsKontaktPage {
            kontaktForm {
              title
              text
            }
          }
    }
`