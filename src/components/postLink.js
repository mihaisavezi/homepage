import React from "react";
import Link from "gatsby-link";

const PostLink = ({ post }) => (
  <div>
    <Link className="no-underline" to={post.frontmatter.path}>
      <div>
        <h3 className="f3 di blue-6">
          {post.frontmatter.title} —
        </h3>
        <h3 className="di gray-3">
          {" "}{post.frontmatter.date}
        </h3>
      </div>
      <p className="blue-6 mt2 tl">{post.excerpt}</p>
    </Link>
  </div>
);

export default PostLink;