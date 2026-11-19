import '../styles/global.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => <main className="main-content">{children}</main>

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
