import React from "react"
import { graphql } from "gatsby"
import DefaultTemplate from "../templates/default-template"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import { Divider, Image, Box } from "theme-ui"
import SEO from "../components/seo"
import profilePic from "../assets/images/profile.jpg"

export default function Home({ data }) {
  return (
    <DefaultTemplate
      location="/"
      image={profilePic}
      header={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description}
    >
      <SEO title="Home" />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </DefaultTemplate>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    mdx(fileAbsolutePath: {regex: "/index.mdx/"}) {
      frontmatter {
        description
        title
      }
    }
  }
`
