import React from "react"
import BlogLayout from "../components/blogLayout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <BlogLayout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className="mw7 tc center">{frontmatter.title}</h1>
          <h2 className="center tc mb5">{frontmatter.date}</h2>
          <div
            className="blog-post-content mw6 center"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
    }
  }
`
