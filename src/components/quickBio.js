/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faEnvelope, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { rhythm } from "../utils/typography"

import '../styles/quickBio.scss';

library.add(fab, faMapMarkedAlt);

const QuickBio = () => {
  const data = useStaticQuery(graphql`
    query QuickBioQuery {
      avatar: file(absolutePath: { regex: "/wedding-profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const [showInfo, setShowInfo] = React.useState(true);
  return (
    <div 
        className="bio"
        style={{
            padding:  `${rhythm(1)} ${rhythm(3 / 4)}`,
            marginTop: rhythm(0.5),
            marginBottom: rhythm(0.5)
        }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: `20px`,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <span className="bio__name">
          Samuel Robertson
      </span>
      <span className="bio__job">
          Front-end Engineer
      </span>
      {showInfo && (
          <div className="bio__row" onClick={() => setShowInfo(false)}>
              <FontAwesomeIcon icon={faChevronUp} className="bio__expand-icon"/>
          </div> 
        ) }
      {!showInfo && (
          <div className="bio__row" onClick={() => setShowInfo(true)}>
              <FontAwesomeIcon icon={faChevronDown} className="bio__expand-icon"/>
          </div> 
        )}
      
      {showInfo && (
          <div className="bio__extra-info">
          <div className="bio__row--no-hover">
              <FontAwesomeIcon icon={faMapMarkedAlt} /> 
              <p className="bio__p">
                  Denver, CO
              </p>
          </div>
          <div className="bio__row">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:sprobertson94@gmail.com" className="bio__a">
                  Email
              </a>
          </div>
          <div className="bio__row">
              <FontAwesomeIcon icon={faLinkedin}/>
              <a href="https://www.linkedin.com/in/srob-dev" target="_blank" rel="noopener noreferrer" className="bio__a">
                  LinkedIn
              </a>
          </div>
          <div className="bio__row">
              <FontAwesomeIcon icon={faGithubSquare} />
              <a href="https://github.com/sRobDev" target="_blank" rel="noopener noreferrer" className="bio__a">
                  GitHub
              </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuickBio