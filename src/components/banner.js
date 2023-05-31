import '../styles/global.scss'
import React from 'react'
import PropTypes from 'prop-types'
import NavMenu from './nav-menu'
import { StaticImage } from 'gatsby-plugin-image'

const Banner = ({ children, location }) =>
    <div className="page-banner">
        <StaticImage
            src={'../assets/images/hero/hero-image.jpg'}
            className={'hero-image'}
            alt="Hero Image"
        />
        <div className="page-banner-contents">
            <NavMenu location={location} />
            {children}
        </div>
    </div>

Banner.propTypes = {
    children: PropTypes.node,
    location: PropTypes.string,
}

export default Banner
