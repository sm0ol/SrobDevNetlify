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
import { fab, faLinkedin, faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faEnvelope, faArrowAltCircleDown, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
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
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
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
        //   marginRight: rhythm(1 / 2),
          marginBottom: `20px`,
        //   minWidth: 50,
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
              <a href="https://www.linkedin.com/in/srob-dev" target="_blank" className="bio__a">
                  LinkedIn
              </a>
          </div>
          <div className="bio__row">
              <FontAwesomeIcon icon={faGithubSquare} />
              <a href="https://github.com/sRobDev" target="_blank" className="bio__a">
                  GitHub
              </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuickBio
{/* I'm <strong>{author}</strong> and I live and work in Denver
        as a UI Engineer.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow me on Twitter!
        </a> */}