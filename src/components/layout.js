import * as React from "react";
import Navigation from "./navigation";
import { useStaticQuery, graphql } from "gatsby";
import { container, heading, siteTitle } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query pageTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <Navigation />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
