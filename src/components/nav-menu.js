import '../styles/components/nav-menu.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import cx from 'classnames'

const CloseIcon = ({ className }) =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}
        // Icon from https://heroicons.com/
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>

const MenuIcon = ({ className }) =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}
        // Icon from https://heroicons.com/
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
    </svg>

const NavMenu = () => {
    const { menuLinks } = useSiteMetadata()
    const [isNavExpanded, setIsNavExpanded] = useState(undefined)

    return (
        <nav className="nav-container">
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                <div className="icon-container">
                    <MenuIcon className={cx('hamburger-icon', isNavExpanded ? 'hide' : 'show')} />
                    <CloseIcon className={cx('close-icon', isNavExpanded ? 'show' : 'hide')} />
                </div>
            </button>
            <div
                className={cx('nav-menu', {
                    'expanded': isNavExpanded,
                    // Do not apply collapse animation on initial page load
                    'collapsed': isNavExpanded === false,
                })}
            >
                <ul>
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
