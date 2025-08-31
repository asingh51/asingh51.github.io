import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16 prose lg:prose-lg">
        <div className="flex justify-center">
          <img
            src="/images/profile.png"
            alt="Abhay Singh"
            className="w-32 h-32 rounded-full mx-auto mb-6"
          />
        </div>
        <p>
          I’m Abhay (Sunny), a Senior Full-Stack Engineer passionate about building scalable, reliable platforms with a focus on team health and sustainable growth.
        </p>
        <p>
          -
        </p>
        <p>
          My career journey spans Capgemini, Hitachi, John Deere, and Deloitte, where I’ve honed a “structure, not control” leadership philosophy that empowers teams to thrive.
        </p>
        <p>
          -
        </p>
        <p>
          Interested in collaborating or learning more? Feel free to <a href="mailto:abhaysingh200009@gmail.com" className="text-blue-600 underline">reach out via email</a>.
        </p>
      </section>
    </Layout>
  );
}
