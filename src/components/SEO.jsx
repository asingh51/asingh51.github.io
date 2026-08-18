import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEOComponent = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          author
        }
      }
    }
  `);

  const meta = site.siteMetadata;
  const pageTitle = title ? `${title} — Abhay Singh` : meta.title;
  const pageDescription = description || meta.description;
  const image = `${meta.siteUrl}/images/profile.png`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/images/profile.png" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={meta.siteUrl} />
      <meta property="og:site_name" content={meta.title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOComponent;
