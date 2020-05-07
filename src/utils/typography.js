import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
// import { useStaticQuery, graphql } from "gatsby"
import image from '../../content/assets/blur-breathtaking-clouds-1903702.jpg'

Wordpress2016.overrideThemeStyles = () => {
  // const data = useStaticQuery(graphql`
  //   query BioQuery {
  //     avatar: file(absolutePath: { regex: "/profile_pic.jpg/" }) {
  //       childImageSharp {
  //         fixed(width: 50, height: 50) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //     site {
  //       siteMetadata {
  //         author
  //         social {
  //           twitter
  //         }
  //       }
  //     }
  //   }
  // `)

  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "body": {
      // backgroundImage: `url(../../content/assets/blur-breathtaking-clouds-1903702.jpg)`
      height: `100vh`,
      background: `#e0e0e0`,
      display: `flex`,
      flexFlow: `column`,
      alignItems: `center`,
      justifyContent: `center`
      // backgroundImage: `url(${image})`,
      // backgroundRepeat: `no-repeat`,
      // backgroundAttachment: `fixed`,
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
