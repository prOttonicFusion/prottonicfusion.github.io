import React from "react"
import { graphql } from "gatsby"
import DefaultTemplate from "../templates/default-template"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <DefaultTemplate
      location="/blog"
      title={data.page.frontmatter.title}
      description={data.page.frontmatter.description}
    >
      <h1>My blog posts</h1>

      {posts.map((post) => (
        <article key={post.title + post.date}>
          <h2>{post.frontmatter.title}</h2>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.frontmatter.excerpt}</p>
        </article>
      ))}
    </DefaultTemplate>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery {
    blog: allMdx(filter: { fileAbsolutePath: { regex: "/src/blog/" } }) {
      posts: nodes {
        frontmatter {
          author
          title
          date(formatString: "DD-MM-yyyy")
          excerpt
        }
      }
    }
    page: mdx(fileAbsolutePath: { regex: "/blog.mdx/" }) {
      frontmatter {
        description
        title
      }
    }
  }
`
