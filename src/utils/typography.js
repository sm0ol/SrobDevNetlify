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
      // height: `100vh`,
      background: `rgb(119,158,203)`,
      background: `linear-gradient(135deg, rgba(119,158,203,1) 0%, rgba(224,224,224,1) 20%, rgba(224,224,224,1) 52%, rgba(224,224,224,1) 80%, rgba(119,158,203,1) 100%)`,
      // background: `linear-gradient(135deg, rgba(120,120,120,1) 0%, rgba(224,224,224,1) 20%, rgba(224,224,224,1) 52%, rgba(224,224,224,1) 80%, rgba(120,120,120,1) 100%)`,
      // display: `flex`,
      // backgroundPosition: `fixed`,
      // backgroundRepeat: `no-repeat`,
      // flexFlow: `column`,
      // alignItems: `center`,
      // justifyContent: `center`
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
