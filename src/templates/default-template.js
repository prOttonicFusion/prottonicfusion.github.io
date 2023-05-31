import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Footer from '../components/footer'
import { StaticImage } from 'gatsby-plugin-image'

const DefaultTemplate = ({ children, location, title, description, image }) =>
    <>
        <Banner location={location}>
            {image &&
                <div className="profile-pic-container">
                    <StaticImage
                        src={'../assets/images/profile.jpg'}
                        className={'profile-pic'}
                        alt="Me"
                    />
                </div>
            }
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </Banner>
        <Layout>
            {children}
            <hr />
            <Footer />
        </Layout>
    </>


DefaultTemplate.propTypes = {
    children: PropTypes.node,
    location: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default DefaultTemplate
