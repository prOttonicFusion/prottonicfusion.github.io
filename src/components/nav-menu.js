import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"

const NavMenu = ({ location }) => {

  const [state, setState] = useState({ menuIsOpen: false })

  const toggleMenuState = () => setState({ ...state, menuIsOpen: !state.menuIsOpen })

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
      render={(data) => (
        <div className="site-nav-container">
          {location !== "/" && (
            <a className="site-title" href={"/"}>
              {data.site.siteMetadata.title}
            </a>
          )}
          <nav className="site-nav">
            <input type="checkbox" id="nav-trigger" className="nav-trigger" onClick={toggleMenuState} />
            <label htmlFor="nav-trigger">
              <span className="nav-menu-icon">
                {!state.menuIsOpen &&
                  // https://heroicons.com/
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20" fill="#424242">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                }
                {state.menuIsOpen &&
                  // https://heroicons.com/
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 20 20" fill="#424242">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                }
              </span>
            </label>

            <div className="trigger">
              {data.site.siteMetadata.menuLinks.map((menuLink) => (
                <a
                  className="custom-nav-link"
                  href={menuLink.link}
                  key={menuLink.name}
                >
                  {menuLink.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    />
  )
}

export default NavMenu
