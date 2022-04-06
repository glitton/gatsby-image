import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <h1>{data.contentfulBlogPost.title}</h1>
      <h3>Published: {data.contentfulBlogPost.publishDate}</h3>
      <p>{data.contentfulBlogPost.body.body}</p>
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
    }
  }
`;

export default BlogPostTemplate;
