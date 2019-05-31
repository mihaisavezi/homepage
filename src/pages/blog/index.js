import React from "react"
import PostLink from "../../components/postLink"
import BlogLayout from "../../components/blogLayout"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(edges)
  return (
    <BlogLayout>
      <div className="mt5 center tc">
        {edges
          .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
          .map(edge => (
            <PostLink key={edge.node.id} post={edge.node} />
          ))}
      </div>
    </BlogLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
