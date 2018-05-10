import React from 'react'
import till from '../images/till.png'

const IndexPage = () => (
  <div className="content">
    <div className="split">
      <div>
        <img src={till} className="logo" alt="Till Schmidt" />
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

export default IndexPage
