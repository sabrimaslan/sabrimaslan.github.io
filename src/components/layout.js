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
    <div className="h-screen w-screen touch-none gap-6 lg:grid lg:grid-cols-12 lg:grid-rows-12">
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
