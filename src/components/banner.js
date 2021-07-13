import '../styles/global.scss'
import React from 'react'
import NavMenu from './nav-menu'

const Banner = ({ children, location }) =>
    <div className="page-banner">
        <NavMenu location={location} />
        {children}
    </div>


export default Banner
