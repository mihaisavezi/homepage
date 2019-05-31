import React from "react"
import Link from "gatsby-link"
import logo from "../images/logo.png"

const BlogLayout = ({ children }) => (
  <div className="bg-blue-1">
    <div className="mw8 pa4 center min-vh-100 flex flex-column">
      <div>
        <div className="center tc">
          <Link to="/">
            <div className="h3 w3 center mb3 mb0-ns db mt2 mt0-ns glitch-hover">
              <img src={logo} alt="" srcSet="" />
              <img src={logo} alt="" srcSet="" />
              <img src={logo} alt="" srcSet="" />
            </div>
          </Link>
        </div>
        <p className="f7 fw3 gray-4 tc measure center mt2">
          Rambling thoughts for my own corner of the internet
        </p>
      </div>
      {children}
    </div>
  </div>
)

export default BlogLayout
