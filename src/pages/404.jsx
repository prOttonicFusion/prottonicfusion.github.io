import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Footer from '../components/footer'
import SEO from '../components/seo'
import '../styles/global.scss'

export default function ErrorPage() {
    return (
        <>
            <Banner>
                <h1>404</h1>
            </Banner>
            <Layout>
                <SEO title="Error" />
                <p>There doesn't seem to be a page here... 🤔 </p>
                <hr />
                <Footer />
            </Layout>
        </>
    )
}
