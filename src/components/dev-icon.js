import React from "react"
import "../styles/global.scss"
import cppLogo from "../assets/devIcons/cplusplus-plain.svg"
import cssLogo from "../assets/devIcons/css3-plain.svg"
import devIconLogo from "../assets/devIcons/devicon.svg"
import dockerLogo from "../assets/devIcons/docker-plain.svg"
import fortranLogo from "../assets/devIcons/fortran-logo.png"
import gimpLogo from "../assets/devIcons/gimp-plain.svg"
import gitHubLogo from "../assets/devIcons/gitHub.svg"
import htmlLogo from "../assets/devIcons/html5-plain.svg"
import illustratorLogo from "../assets/devIcons/illustrator-plain.svg"
import inkscapeLogo from "../assets/devIcons/inkscape-plain.svg"
import javascriptLogo from "../assets/devIcons/javascript-plain.svg"
import lammpsLogo from "../assets/devIcons/LAMMPS-logo.png"
import macLogo from "../assets/devIcons/apple.svg"
import mysqlLogo from "../assets/devIcons/mysql-plain.svg"
import nodejsLogo from "../assets/devIcons/nodejs-plain.svg"
import openmpiLogo from "../assets/devIcons/open-mpi-logo.png"
import photoshopLogo from "../assets/devIcons/photoshop-plain.svg"
import pythonLogo from "../assets/devIcons/python-plain.svg"
import qtLogo from "../assets/devIcons/qt-logo.png"
import reactLogo from "../assets/devIcons/react-original.svg"
import rustLogo from "../assets/devIcons/rust-plain.svg"
import sqliteLogo from "../assets/devIcons/sqlite.svg"
import swiftLogo from "../assets/devIcons/swift-plain.svg"
import typescriptLogo from "../assets/devIcons/typescript-plain.svg"
import ubuntuLogo from "../assets/devIcons/ubuntu-plain.svg"
import wordpressLogo from "../assets/devIcons/wordpress-plain.svg"
import postgresLogo from "../assets/devIcons/postgresql-plain.svg"

const selectIcon = (tool) => {
  switch (tool) {
    case "c++":
      return cppLogo

    case "css":
      return cssLogo

    case "docker":
      return dockerLogo

    case "fortran":
      return fortranLogo

    case "gimp":
      return gimpLogo

    case "github":
      return gitHubLogo

    case "html":
      return htmlLogo

    case "illustrator":
      return illustratorLogo

    case "inkscape":
      return inkscapeLogo

    case "javascript":
      return javascriptLogo

    case "lammps":
      return lammpsLogo

    case "mac":
      return macLogo

    case "mysql":
      return mysqlLogo

    case "nodejs":
      return nodejsLogo

    case "openmpi":
      return openmpiLogo

    case "photoshop":
      return photoshopLogo

    case "postgresql":
      return postgresLogo

    case "python":
      return pythonLogo

    case "qt":
      return qtLogo

    case "react":
      return reactLogo

    case "rust":
      return rustLogo

    case "sqlite":
      return sqliteLogo

    case "swift":
      return swiftLogo

    case "typescript":
      return typescriptLogo

    case "ubuntu":
      return ubuntuLogo

    case "wordpess":
      return wordpressLogo

    default:
      return devIconLogo
  }
}

const DevIcon = ({ tool, height }) => (
  <img
    src={selectIcon(tool)}
    className="dev-icon"
    height={height ? height : "15px"}
    alt={"Dev icon"}
  />
)

export default DevIcon
