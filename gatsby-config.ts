import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Abhay Singh — Tech Lead Portfolio`,
    siteUrl: `https://your-domain.com`,
    description: `Senior Software Engineer transitioning to Tech Lead: architecture, impact, and leadership.`,
    author: `Abhay (Sunny) Singh`
  },
  plugins: [
    `gatsby-plugin-postcss`,
  ]
}

export default config
