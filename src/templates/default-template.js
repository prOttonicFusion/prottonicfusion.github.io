import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Footer from "../components/footer"

const DefaultTemplate = ({ children, location, title, description, image }) => (
  <>
    <Banner location={location}>
      {image && (
        <img
          src={image}
          height={"250px"}
          width={"250px"}
          className={"profile-pic"}
          alt="Me"
        />
      )}
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Banner>
    <Layout>
      {children}
      <hr />
      <Footer />
    </Layout>
  </>
)

export default DefaultTemplate
