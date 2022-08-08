import React from 'react'
import { graphql } from 'gatsby'
import DefaultTemplate from '../templates/default-template'
import BriefCVMDX from '../sections/brief-cv'
import Skills from '../components/skills'
import Timeline from '../components/timeline'
import Publications from '../components/publications'
import SEO from '../components/seo'
import SkillsChart from '../components/skills-chart'

export default function BriefCVPage({ data }) {
    return (
        <DefaultTemplate
            location="/brief-cv"
            title={data.mdx.frontmatter.title}
            description={data.mdx.frontmatter.description}
        >
            <SEO title="Brief CV" />
            <div>
                <BriefCVMDX />
            </div>
            <SkillsChart />
            <Timeline />
            <Publications />
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
