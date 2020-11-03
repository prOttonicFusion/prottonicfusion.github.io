import React from "react"
import BriefCV from "../components/brief-cv"
import DefaultTemplate from "../templates/default-template"
import SEO from "../components/seo"

export default function BriefCVPage() {
  return (
    <DefaultTemplate location="/brief-cv">
      <SEO title="Brief CV" />
      <BriefCV />
    </DefaultTemplate>
  )
}