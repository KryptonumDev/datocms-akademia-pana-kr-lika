import React from 'react'
import Layout from './src/components/parents/layout'
import './src/styles/typography.css'
import './src/styles/global.css'

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
)
