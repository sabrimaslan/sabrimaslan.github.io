/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react'

import Navigation from './navigation'

const Layout = ({ children }) => {
  return (
    <div className="flex h-full touch-none flex-col lg:flex-row">
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
