import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../assets/styles/index.less'

const TemplateWrapper = ({ children }) => (
  <div className="bg-blue-1">
        <div className="mw9 center min-vh-100 flex flex-column">
          <Header/>
          {children()}
        </div>
      </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
