import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
// import { useStaticQuery, graphql } from "gatsby"

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
    "body": {}
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)
// const typography = new Typography({
//   bodyFontFamily: [
//     "Arial",
//     "sans-serif",
//   ]
// })

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
