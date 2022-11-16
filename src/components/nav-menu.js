import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import HamburgerMenuIcon from './icons/hamburger-menu'

const NavMenu = ({ location }) =>
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
            <Navbar expand="lg" variant="dark" bg="none" className="site-nav">
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
                    >
                        <Offcanvas.Header closeButton>
                            {/* <Offcanvas.Title id={'offcanvasNavbarLabel-expand'}>
                                    Offcanvas
                                </Offcanvas.Title> */}
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {data.site.siteMetadata.menuLinks.map(
                                    (menuLink) =>
                                        <Nav.Link
                                            className="custom-nav-link"
                                            href={menuLink.link}
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
        }
    />


NavMenu.propTypes = {
    location: PropTypes.string,
}

export default NavMenu
