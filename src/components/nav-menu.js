import '../styles/components/nav-menu.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import HamburgerMenuIcon from './icons/hamburger-menu'

const NavMenu = ({ location }) => {
    const data = useStaticQuery(graphql`
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
    `)

    return (
        <Navbar expand="md" variant="dark" bg="none" className="site-nav" collapseOnSelect>
            <Container fluid>
                {location !== '/' &&
                        <Navbar.Brand className="site-title" href={'/'}>{data.site.siteMetadata.title}</Navbar.Brand>
                }
                <Navbar.Toggle aria-controls={'offcanvasNavbar-expand'} className="nav-toggle">
                    <HamburgerMenuIcon className="nav-toggle-icon" width="32px" height="32px" />
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    id={'offcanvasNavbar-expand'}
                    aria-labelledby={'offcanvasNavbarLabel-expand'}
                    placement="top"
                    restoreFocus={false}
                    style={{ height: 'fit-content' }}
                >
                    <Offcanvas.Header closeButton closeVariant="white" className="mobile-nav-header" />
                    <Offcanvas.Body className="nav-container">
                        <Nav className="nav">
                            {data.site.siteMetadata.menuLinks.map(
                                (menuLink) =>
                                    <Nav.Link
                                        className="custom-nav-link"
                                        href={menuLink.link}
                                        as={Link}
                                        key={menuLink.name}
                                    >
                                        {menuLink.name}
                                    </Nav.Link>,
                            )}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}


NavMenu.propTypes = {
    location: PropTypes.string,
}

export default NavMenu
