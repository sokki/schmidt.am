import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Bubbles from '../components/Bubbles'
import cologne from '../images/cologne-silhouette.svg'
import './index.css'

const Layout = ({ children, data }) => (
  <div style={{ width: '100%', height: '100%' }}>
    <img src={cologne} className="cologne" alt="Cologne" />
    <Bubbles />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape().isRequired,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
