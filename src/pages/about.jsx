import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

const linkClass =
  "text-brand dark:text-sky-400 underline underline-offset-4 hover:text-brand-dark dark:hover:text-sky-300";

export const Head = () => (
  <Seo
    title="About"
    description="Abhay (Sunny) Singh — Senior Software Engineer and Tech Lead with 10+ years across healthcare, payments, procurement, and startup product engineering."
  />
);

export default function About() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
        <div className="flex justify-center">
          <img
            src="/images/profile.png"
            alt="Abhay Singh"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-4 ring-white dark:ring-gray-900 shadow-lg"
          />
        </div>

        <h1 className="text-center text-3xl font-bold">Abhay (Sunny) Singh</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-1">
          Senior Software Engineer → Tech Lead
        </p>

        <div className="mt-8 space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I'm a software engineer with over a decade of experience turning ambiguous problems
            into systems that scale, and turning teams into people who can own that scale
            themselves. I currently lead engineering work at{" "}
            <a href="https://www2.deloitte.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Deloitte
            </a>
            , where I've re-platformed a CDC vaccine administration system onto AWS, cut
            multi-million dollars in infrastructure spend through right-sizing and lifecycle
            automation, and built an HL7/eICR processing pipeline — including a GenAI-assisted
            extraction prototype — used to support public health reporting.
          </p>

          <p>
            Before Deloitte, I spent time at{" "}
            <a href="https://www.deere.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              John Deere
            </a>{" "}
            building procurement automation that saved roughly $1.5M in vendor negotiations,
            at{" "}
            <a href="https://www.hitachi-payments.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Hitachi Payment Services
            </a>{" "}
            hardening payment platforms that processed millions of daily transactions under
            PCI-DSS constraints, and at{" "}
            <a href="https://www.capgemini.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Capgemini
            </a>{" "}
            delivering enterprise web applications for global clients. In parallel, I've been
            building{" "}
            <a href="https://github.com/asingh51" target="_blank" rel="noopener noreferrer" className={linkClass}>
              JobMinglr
            </a>
            , a swipe-to-match hiring platform, as founder and tech lead — which keeps me
            honest about shipping product end-to-end, not just architecting it.
          </p>

          <p>
            What ties this together is a "structure over control" approach to leading teams:
            clear contracts and SLAs instead of tribal knowledge, observability and resiliency
            built in from day one instead of bolted on after an incident, and mentorship that's
            measured by whether people grow past needing me. I hold a Master's in Computer
            Science from the University of Texas at Arlington, specializing in web, mobile, and
            AI systems.
          </p>

          <p>
            I'm currently looking at Tech Lead roles — the kind where I own a system end-to-end
            and help a team scale with it — and I'm comfortable in TPM-adjacent work when a role
            calls for it. If that sounds like a fit, take a look at the{" "}
            <a href="/projects" className={linkClass}>project case studies</a> and{" "}
            <a href="/leadership" className={linkClass}>leadership playbook</a>, check my{" "}
            <a href="/resume" className={linkClass}>resume and availability</a>, or{" "}
            <a href="mailto:abhaysingh200009@gmail.com" className={linkClass}>
              reach out directly
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
