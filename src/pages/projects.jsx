import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ImpactCard from "../components/ImpactCard";
import { featured } from "../data/projects";

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <h1 className="text-3xl font-bold">Projects & Case Studies</h1>
        <p className="text-gray-600 mt-2">
          Problem → Role → Architecture → Business Impact.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {featured.map((p, i) => <ImpactCard key={i} {...p} />)}
        </div>
      </section>
    </Layout>
  );
}
