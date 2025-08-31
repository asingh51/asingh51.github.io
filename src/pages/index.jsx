import React from "react";
import Layout from "../components/Layout";
import SEOComponent from "../components/SEO";

export default function About() {
  return (
    <Layout>
      <SEOComponent title="About" />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16 prose lg:prose-lg">
        <div className="flex justify-center">
          <img
            src="/images/profile.png"
            alt="Abhay Singh"
            className="w-32 h-32 rounded-full mx-auto mb-6"
          />
        </div>
        <p>
          I’m helping to build <a href="https://jobminglr.com" target="_blank" rel="noopener noreferrer">JobMinglr</a> as CTO — a swipe-to-match hiring platform.
        </p>
        <p>-</p>
        <p>
          Currently, I lead tech teams at{" "}
          <a href="https://www2.deloitte.com" target="_blank" rel="noopener noreferrer">
            Deloitte
          </a>
          . My career journey spans{" "}
          <a href="https://www.capgemini.com" target="_blank" rel="noopener noreferrer">
            Capgemini
          </a>
          {", "}
          <a href="https://www.hitachi-payments.com" target="_blank" rel="noopener noreferrer">
            Hitachi Payment Services
          </a>
          {", "}
          <a href="https://www.deere.com" target="_blank" rel="noopener noreferrer">
            John Deere
          </a>
          , and Deloitte—where I’ve engineered large-scale systems, taken end-to-end ownership from architecture to delivery, and grown teams through a ‘structure over control’ leadership style.
        </p>
        <p>-</p>
        <p>
          Interested in collaborating or learning more? Feel free to <a href="mailto:abhaysingh200009@gmail.com" className="text-blue-600 underline">reach out via email</a>.
        </p>
      </section>
    </Layout>
  );
}
