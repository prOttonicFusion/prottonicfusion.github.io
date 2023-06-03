import '../styles/components/banner.scss'
import React from 'react'
import PropTypes from 'prop-types'
import ClientOnly from '../components/client-only'
import { StaticImage } from 'gatsby-plugin-image'

const Banner = ({ children }) =>
    <div className="page-banner">
        <ClientOnly>
            <StaticImage
                src={'../assets/images/hero/hero-image.jpg'}
                className={'hero-image'}
                placeholder="dominantColor"
                loading="eager"
                quality={80}
                alt="Hero Image"
            />
        </ClientOnly>
        <div className="page-banner-contents">
            {children}
        </div>
    </div>

Banner.propTypes = {
    children: PropTypes.node,
}

export default Banner
