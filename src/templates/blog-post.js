import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DefaultTemplate from "./default-template"
import "../styles/global.scss"
import "../styles/blog.scss"

export default function BlogPost({ data }) {
  const post = data.mdx

  return (
    <DefaultTemplate
      location={"/" + post.slug}
      title={post.frontmatter.title}
      description={
        <p>
          <span className="post-info">
            {post.frontmatter.author},{" "}
            <span className="post-date">{post.frontmatter.date}</span>
          </span>
        </p>
      }
    >
      <div className="post-body">
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
        date(fromNow: true)
      }
      slug
    }
  }
`
