import React from "react"
import Navbar from '../components/navbar'
import { rhythm } from "../utils/typography"
import QuickBio from "./quickBio"

import '../styles/layout.scss';
class Layout extends React.Component {
  render() {
    const { navlinks, children } = this.props
    
    return (
      <div className="layout">
        <Navbar navlinks={navlinks}/>
        <div
          className="layout__container">
          <QuickBio />
          <div className="layout__articles"
            style={{
              marginTop: rhythm(0.5),
              marginBottom: rhythm(0.5),
              marginLeft: `auto`,
              marginRight: `auto`,
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <main>{children}</main>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
