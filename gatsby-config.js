/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sabri Maslan`,
    description: `This portfolio presents a curated selection of my work, reflecting over 15 years of experience leading digital innovation, engineering and enterprise technology in complex, regulated environments. For more than a decade, I have combined hands-on technical expertise with strategic leadership—building scalable platforms, fostering high-performing teams and guiding transformative digital initiatives from concept to delivery. If you’re building something ambitious — I’m in.`,
    siteUrl: `https://sabrimaslan.github.io`,
    menuLinks: [
      {
        name: 'Intro',
        link: '/'
      },
      {
        name: 'Works',
        link: '/works'
      },
      {
        name: 'About',
        link: '/about'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-remove-generator`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`
  ]
}
