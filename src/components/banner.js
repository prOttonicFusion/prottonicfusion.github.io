import '../styles/components/banner.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

const Banner = ({ children }) =>
    <div className="page-banner">
        <StaticImage
            src={'../assets/images/hero/hero-image.jpg'}
            className={'hero-image'}
            placeholder="dominantColor"
            loading="eager"
            quality={80}
            alt="Hero Image"
        />
        <div className="page-banner-contents">
            {children}
        </div>
    </div>

Banner.propTypes = {
    children: PropTypes.node,
}

export default Banner
