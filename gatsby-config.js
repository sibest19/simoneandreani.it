require('dotenv').config()

const __DEV__ = process.env['gatsby_executing_command'] === 'develop'

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [{
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: __DEV__ ? process.env.CONTENTFUL_PREVIEW_API_ACCESS_TOKEN : process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,
        host: __DEV__ ? 'preview.contentful.com' : null,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}