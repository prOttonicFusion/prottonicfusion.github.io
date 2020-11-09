import React from "react"
import { graphql } from "gatsby"
import DefaultTemplate from "../templates/default-template"
import BlogPostCard from "../components/blog/blog-post-card"
import "../styles/global.scss"
import "../styles/blog.scss"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <DefaultTemplate
      location="/blog"
      title={data.page.frontmatter.title}
      description={data.page.frontmatter.description}
    >
      <h1>My blog posts</h1>
      <div className="post-cards-container">
        {posts.map((post) => (
          <BlogPostCard
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            author={post.frontmatter.author}
            excerpt={post.frontmatter.excerpt}
            url={"/" + post.slug}
            key={post.frontmatter.date + post.frontmatter.title}
          />
        ))}
      </div>
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
          date(fromNow: true)
          excerpt
        }
        slug
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
