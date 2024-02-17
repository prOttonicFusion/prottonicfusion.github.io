/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const SEO = ({ description, lang, title }) => {
    const metaData = useSiteMetadata()

    const fullTitle = `${title} | ${metaData.title}`
    const metaDescription = description || metaData.description

    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang,
                }}
            />
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="og:title" content={fullTitle} />
            <meta name="og:description" content={metaDescription} />
            <meta name="og:type" content="website" />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:creator" content={metaData.author} />
        </>
    )
}

SEO.defaultProps = {
    lang: 'en-US',
    meta: [],
    description: '',
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO
