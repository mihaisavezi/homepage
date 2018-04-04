import React from 'react'
import Link from 'gatsby-link'
import logo from '../../assets/logo-2.png';


const Header = () => (
  <nav className="row pb3 w-100 flex-m flex-l pa4-m pa5-l flex-row items-center justify-between">
    <div className="left">
      <img src={logo} className="h3 w3 center mb3 mb0-ns db mt2 mt0-ns" alt="" srcSet=""/>
    </div>
    <div className="right flex items-center justify-center justify-end-ns">
      <div className="flex ph4-ns">
        <p className="text-link text-link__isActive f6 athelas ttc pa2 pa3-ns pb2-ns gray-4 mr1">home</p>
        <p className="text-link f6 athelas ttc pa2 pa3-ns pb2-ns gray-4">projects</p>
      </div>
      <div className="h2 w2 mh2">
        <a href="https://github.com/mihaisavezi" className="gray-4 h-100 flex flex-column justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
        </a>
      </div>
      <a href="https://www.linkedin.com/" className="gray-4 h-100 flex flex-column justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg>
        </a>
    </div>
  </nav>
)

export default Header
