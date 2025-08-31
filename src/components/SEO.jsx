import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title ? `${title} — Abhay Singh` : "Abhay Singh — Tech Lead Portfolio"}</title>
    <meta name="description" content={description || "Portfolio of Abhay (Sunny) Singh — Senior Software Engineer → Tech Lead."} />
  </Helmet>
);

export default SEO;
