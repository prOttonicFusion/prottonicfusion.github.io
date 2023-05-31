import React from 'react'
import { graphql } from 'gatsby'
import Projects from '../components/projects'
import Contact from '../components/contact'
import SEO from '../components/seo'
import Banner from '../components/banner'
import IndexMDX from '../sections/index.mdx'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Skills from '../components/skills'
import Timeline from '../components/timeline'
import Publications from '../components/publications'

export default function Home({ data }) {
    return (
        <>
            <Banner location={'/'}>
                <div className="profile-pic-container">
                    <StaticImage
                        src={'../assets/images/profile.jpg'}
                        className={'profile-pic'}
                        loading="eager"
                        alt="Me"
                    />
                </div>
                <div>
                    <h1>{data.mdx.frontmatter.title}</h1>
                    <IndexMDX />
                </div>
            </Banner>
            <Layout>
                <SEO title="Home" />
                <hr />
                <Projects />
                <hr />
                <Skills />
                <hr />
                <Timeline />
                <hr />
                <Publications />
                <hr />
                <Contact />
                <Footer />
            </Layout>
        </>
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
