import React from "react"
import { StaticQuery, graphql } from "gatsby"

const NavMenu = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href={data.site.siteMetadata.siteUrl}>
            {data.site.siteMetadata.title}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ml-auto">
              {data.site.siteMetadata.menuLinks.map((menuLink) => (
                <li class="nav-item">
                  <a class="nav-link" href={menuLink.link}>
                  {menuLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    )}
  />
)

export default NavMenu
