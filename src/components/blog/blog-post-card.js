import React from "react"
import { Card } from "react-bootstrap"
import "../../styles/global.scss"
import "../../styles/blog.scss"

const BlogPostCard = ({ title, image, excerpt, date, author, url }) => (
  <div className="post-card">
    <div className="post-card-description">
      <h1 className="post-card-title">
        <a href={url}>{title}</a>
      </h1>
      <p className="post-card-excerpt">{excerpt}</p>
      <p className="post-card-info">
        {author}, <span className="post-date">{date}</span>
      </p>
    </div>
  </div>
)

export default BlogPostCard
