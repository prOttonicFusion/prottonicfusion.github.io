import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import HamburgerMenuIcon from './icons/hamburger-menu'
import XIcon from './icons/x'

const NavMenu = ({ location }) => {

    const [state, setState] = useState({ menuIsOpen: false })

    const toggleMenuState = () =>
        setState({ ...state, menuIsOpen: !state.menuIsOpen })

    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                            menuLinks {
                                name
                                link
                            }
                        }
                    }
                }
            `}
            render={(data) =>
                <div className="site-nav-container">
                    {location !== '/' &&
                        <a className="site-title" href={'/'}>
                            {data.site.siteMetadata.title}
                        </a>
                    }
                    <nav className="site-nav">
                        <input type="checkbox" id="nav-trigger" className="nav-trigger" onClick={toggleMenuState} />
                        <label htmlFor="nav-trigger">
                            <span className="nav-menu-icon">
                                {!state.menuIsOpen && <HamburgerMenuIcon />}
                                {state.menuIsOpen && <XIcon />}
                            </span>
                        </label>

                        <div className="trigger">
                            {data.site.siteMetadata.menuLinks.map((menuLink) =>
                                <a
                                    className="custom-nav-link"
                                    href={menuLink.link}
                                    key={menuLink.name}
                                >
                                    {menuLink.name}
                                </a>,
                            )}
                        </div>
                    </nav>
                </div>
            }
        />
    )
}

NavMenu.propTypes = {
    location: PropTypes.string,
}

export default NavMenu
