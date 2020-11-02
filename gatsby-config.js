// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
export default {
  siteMetadata: {
    title: "Helsingør Domkirke",
    description:
      "Medvirkende: Helsingør Domkor samt domorganist Else-Marie Kristoffersen. Domprovst Steffen Ravn Jørgensen",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "98kh54uw",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: "gatsby-remark-external-links",
      options: {
        target: "_self",
        rel: "nofollow",
      },
    },
  ],
};
