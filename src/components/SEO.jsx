import React from "react";
import { Helmet } from "react-helmet";

const SEOComponent = ({ title, description }) => (
  <Helmet>
    <title>{title ? `${title} — Abhay Singh` : "Abhay Singh — Tech Lead Portfolio"}</title>
    <meta name="description" content={description || "Portfolio of Abhay (Sunny) Singh — Senior Software Engineer → Tech Lead."} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ffffff" />
  </Helmet>
);

export default SEOComponent;