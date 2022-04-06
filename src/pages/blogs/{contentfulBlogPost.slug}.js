import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";

const BlogPostTemplate = ({ data }) => {
  const image = getImage(data.contentfulBlogPost.heroImage);
  return (
    <Layout>
      <h1>{data.contentfulBlogPost.title}</h1>
      <h3>Published: {data.contentfulBlogPost.publishDate}</h3>
      <p>{data.contentfulBlogPost.body.body}</p>
      <GatsbyImage image={image} alt={data.contentfulBlogPost.description} />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      slug
      body {
        body
      }
      publishDate(formatString: "MMMM DD, YYYY")
      heroImage {
        gatsbyImageData(
          placeholder: DOMINANT_COLOR
          layout: CONSTRAINED
          formats: AUTO
        )
        description
      }
    }
  }
`;

export default BlogPostTemplate;
