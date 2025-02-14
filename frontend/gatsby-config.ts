import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ButtSnfr`,
    siteUrl: `https://www.yourdomain.tld`,
      menuLinks:[
        {
           name:'home',
           link:'/'
        },
        {
           name:'barkpark',
           link:'/bark-park'
        },
        {
          name:'crate',
          link:'/crate'
       }
      ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"]
};

export default config;
