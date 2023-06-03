import '../styles/pages/index.scss'
import React from 'react'
import { graphql } from 'gatsby'
import Projects from '../components/projects'
import Contact from '../components/contact'
import SEO from '../components/seo'
import Banner from '../components/banner'
import NavMenu from '../components/nav-menu'
import IndexMDX from '../sections/index.mdx'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Skills from '../components/skills'
import Timeline from '../components/timeline'
import Publications from '../components/publications'
import ClientOnly from '../components/client-only'

const Home = ({ data }) => {
    return (
        <>
            <NavMenu location={'/'} />
            <Banner>
                <div className="profile-pic-container">
                    <ClientOnly>
                        <StaticImage
                            src={'../assets/images/profile.jpg'}
                            className={'profile-pic'}
                            loading="eager"
                            alt="Me"
                        />
                    </ClientOnly>
                </div>
                <div>
                    <h1 className="main-title">{data.mdx.frontmatter.title}</h1>
                    <div className="main-description">
                        <IndexMDX />
                    </div>
                </div>
            </Banner>
            <Layout>
                <SEO title="Home" />
                <Projects />
                <Skills />
                <Timeline />
                <Publications />
                <Contact />
                <hr />
                <Footer />
            </Layout>
        </>
    )
}

export default Home

export const Head = () => <SEO title="Home" />

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
