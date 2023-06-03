import '../styles/components/nav-menu.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import cx from 'classnames'

const CloseIcon = () =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="close-icon"
        // Icon from https://heroicons.com/
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>

const MenuIcon = () =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="hamburger-icon"
        // Icon from https://heroicons.com/
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
    </svg>

const NavMenu = () => {
    const { menuLinks } = useSiteMetadata()
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="nav-container">
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                <MenuIcon />
            </button>
            <div className={cx('nav-menu', { 'expanded': isNavExpanded })}>
                <ul>
                    <li
                        className="close-menu-button"
                        onClick={() => setIsNavExpanded(false)}
                    >
                        <CloseIcon />
                    </li>
                    {menuLinks.map(
                        (menuLink) =>
                            <li key={menuLink.name}>
                                <a
                                    href={menuLink.link}
                                    className="nav-menu-link"
                                    onClick={() => setIsNavExpanded(false)}
                                >
                                    {menuLink.name}
                                </a>
                            </li>,
                    )}
                </ul>
            </div>
        </nav>
    )
}


NavMenu.propTypes = {
    location: PropTypes.string,
}

export default NavMenu
