import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DefaultTemplate from "./default-template"

export default function BlogPost({ data }) {
  const post = data.mdx

  return (
    <DefaultTemplate
      location={"/" + post.slug}
      title={post.frontmatter.title}
      description={
        <p>
          {post.frontmatter.author}, {post.frontmatter.date}
        </p>
      }
    >
      <div>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </DefaultTemplate>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        author
        date(formatString: "DD-MM-yyyy")
      }
      slug
    }
  }
`
