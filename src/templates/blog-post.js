import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DefaultTemplate from "./default-template"
import "../styles/global.scss"
import "../styles/blog.scss"

export default function BlogPost({ data }) {
  const post = data.post

  return (
    <DefaultTemplate
      location={"/" + post.slug}
      title={data.page.frontmatter.title}
      description={data.page.frontmatter.description}
    >
      <div>
      <div className="blog-controls">
        <span>‹ <a href="/blog">Back</a></span>
      </div>
        {/** TODO: Add blog navigation menu (more posts, next, ...) */}
        <h2>{post.frontmatter.title}</h2>
        <p>
          <span className="post-info">
            {post.frontmatter.author},{" "}
            <span className="post-date">{post.frontmatter.date}</span>
          </span>
        </p>
        <div className="post-body">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    post: mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        author
        date(fromNow: true)
      }
      slug
    }
    page: mdx(fileAbsolutePath: { regex: "/blog.mdx/" }) {
      frontmatter {
        description
        title
      }
    }
  }
`
