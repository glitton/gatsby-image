import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        alt="colorful balls"
        src="https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        formats={["auto", "webp", "avif"]}
        placeholder="blurred"
        layout="constrained"
        width={800}
        aspectRatio={21 / 9}
        backgroundColor="blue" //for placeholder none
        loading="eager"
        transformOptions={{ grayscale: true, rotate: 180 }}
      />
    </Layout>
  );
};

export default AboutPage;
