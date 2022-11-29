import React from 'react'
import { graphql } from 'gatsby'
import DefaultTemplate from '../templates/default-template'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import SEO from '../components/seo'
import profilePic from '../assets/images/profile.jpg'

export default function Home({ data }) {
    return (
        <DefaultTemplate
            location="/"
            image={profilePic}
            title={data.mdx.frontmatter.title}
            description={data.mdx.frontmatter.description}
        >
            <SEO title="Home" />
            <About />
            <hr />
            <Projects />
            <hr />
            <Contact />
        </DefaultTemplate>
    )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    mdx(internal: {contentFilePath: {regex: "/index.mdx/"}}) {
      frontmatter {
        description
        title
      }
    }
  }
`
