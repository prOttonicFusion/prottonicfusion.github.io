import '../styles/global.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => <div className="main-content">{children}</div>

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
