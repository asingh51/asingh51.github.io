import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description }) => {
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
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="color-scheme" content="light dark" />
      <link rel="icon" href="/images/profile.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

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

      <script>{`
        (function () {
          try {
            var stored = localStorage.getItem("theme");
            var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (stored === "dark" || (!stored && prefersDark)) {
              document.documentElement.classList.add("dark");
            }
          } catch (e) {}
        })();
      `}</script>
    </>
  );
};

export default Seo;
