import '../styles/components/nav-menu.scss'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import cx from 'classnames'

const MenuToggleIcon = ({ isOpen }) => {
    return (
        <div className={cx('mobile-nav-icon', { 'open': isOpen })}>
            <svg className="hamburger-line line-1" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 100,5" />
            </svg>
            <svg className="hamburger-line line-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 100,5" />
            </svg>
        </div>
    )
}

const NavMenu = () => {
    const { menuLinks } = useSiteMetadata()
    const [isNavExpanded, setIsNavExpanded] = useState(undefined)
    const [scrollOpacity, setScrollOpacity] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            // Fade navbar bg color into view
            // Start fading at 50% down the viewport, complete at 100%
            const scrollPosition = window.scrollY
            const viewportHeight = window.innerHeight
            const opacity = Math.max(0, Math.min(1, (scrollPosition / viewportHeight - 0.5) * 2))
            setScrollOpacity(opacity)
        }

        handleScroll() // Initialize on mount
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav 
            className="nav-container"
            style={{ '--scroll-opacity': scrollOpacity }}
        >
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
                aria-label="Toggle navigation menu"
                aria-haspopup="true"
                aria-controls="nav-menu"
                aria-expanded={isNavExpanded}
            >
                <div className="icon-container">
                    <MenuToggleIcon isOpen={isNavExpanded} />
                </div>
            </button>
            <nav
                id="nav-menu"
                className={cx('nav-menu', {
                    'expanded': isNavExpanded,
                    // Do not apply collapse animation on initial page load
                    'collapsed': isNavExpanded === false,
                })}
                aria-label="Main navigation menu"
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
            </nav>
        </nav>
    )
}


NavMenu.propTypes = {
    location: PropTypes.string,
}

export default NavMenu
