const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-174294648-1",
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'en_GB',
          url: 'https://startups4ocean.com/',
          site_name: 'Startups 4 Ocean',
          title: 'pre-registration landing page',
          titleTemplate: 'Startups 4 Ocean | ',
          description: 'The Global Virtual Hub of Startup-driven Ocean Innovation',
          images: [
            {
              url: 'https://startups4ocean.com/static/bg17-8ecf3a295b195c1f6b43dd4842b01f1a.jpg',
              width: 1920,
              height: 1080,
              alt: 's4o turtle',
            },
          ],
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
