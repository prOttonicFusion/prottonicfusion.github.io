import '../styles/global.scss'
import '../styles/pages/404.scss'
import React from 'react'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Seo from '../components/seo'
import NavMenu from '../components/nav-menu'

const ErrorPage = () => {
    return (
        <>
            <NavMenu location={'/'} />
            <main>
                <Banner>
                    <h1 className="main-title">404</h1>
                    <p className="main-description">There doesn't seem to be a page here... :/ </p>
                </Banner>
            </main>
            <Footer />
        </>
    )
}

export default ErrorPage

export const Head = () => <Seo title="Error" />

