import React from "react"
import { graphql } from "gatsby"
import DefaultTemplate from "../templates/default-template"
import BriefCV from "../components/brief-cv"
import SEO from "../components/seo"

export default function BriefCVPage({ data }) {
  return (
    <DefaultTemplate
      location="/brief-cv"
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description}
    >
      <SEO title="Brief CV" />
      <BriefCV />
    </DefaultTemplate>
  )
}

export const pageQuery = graphql`
  query BriefCVPageQuery {
    mdx(fileAbsolutePath: { regex: "/brief-cv.mdx/" }) {
      frontmatter {
        description
        title
      }
    }
  }
`
