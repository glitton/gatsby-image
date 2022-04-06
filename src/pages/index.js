import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

import "../styles/main.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>Welcome to this Gatsby and Later Session</h1>
      <p>We are here to learn about graphQL and Gatsby!</p>
      <div className="logos">
        <StaticImage
          src="../images/graphql.png"
          alt="graphql logo"
          placeholder="blurred"
          layout="fixed"
        />
        <StaticImage
          src="../images/gatsby.png"
          alt="gatsby logo"
          placeholder="blurred"
          layout="fixed"
          className="box"
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
