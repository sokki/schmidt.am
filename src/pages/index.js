import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <div className="content">
    <div className="split">
      <div>
        <Img sizes={data.till.childImageSharp.sizes} className="logo" />
      </div>
      <div>
        <p>
          Hi, I&apos;m <strong>Till</strong>
          <br />
          a Full Stack Developer.
        </p>
      </div>
    </div>
    <ul className="contact">
      <li>
        <a href="mailto:till@schmidt.am">till@schmidt.am</a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/happysokki"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/sokki"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/till-schmidt-44683b10b/"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </div>
)

IndexPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default IndexPage

export const query = graphql`
  query GatsbyImageQuery {
    till: file(relativePath: { eq: "till.png" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
