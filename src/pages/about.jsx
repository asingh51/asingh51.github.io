import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { Link } from "gatsby";

const linkClass =
  "text-brand dark:text-sky-400 underline underline-offset-4 hover:text-brand-dark dark:hover:text-sky-300";

export const Head = () => (
  <Seo
    title="About"
    description="Abhay (Sunny) Singh — Staff Software Engineer and Tech Lead with 10+ years across healthcare, payments, procurement, and startup product engineering."
  />
);

const achievements = [
  {
    title: "2nd place, Deloitte AWS Innovation Challenge (2024)",
    detail:
      "Built an AWS Bedrock + Lambda solution to process eICR files via LLMs, presented at AWS re:Invent to Deloitte leadership and clients.",
  },
  {
    title: "AWS Certified Solutions Architect",
    detail: "Plus a Scrum Team Member certification.",
  },
  {
    title: "2020 Vice President Award, John Deere",
    detail: "For leading the Agile Operating Model Transformation.",
  },
  {
    title: "Published researcher, image retrieval",
    detail:
      "Co-authored \"A Survey on Different CBIR Techniques\" in the International Journal of Computer Science and Information Technologies, based on undergraduate research fusing panchromatic and multispectral satellite imagery via PCA transformation.",
  },
];

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
          Software Engineer → Engineering Lead
        </p>

        <div className="mt-8 space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I'm a software engineer with over a decade of experience turning ambiguous problems
            into systems that scale, and turning teams into people who can own that scale
            themselves. Since 2022 I've been a Staff Software Engineer at{" "}
            <a href="https://www2.deloitte.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Deloitte
            </a>
            , working as a tech lead across several client engagements at once: re-platforming a{" "}
            <Link to="/projects/cdc-vaccine-system" className={linkClass}>
              CDC vaccine administration system
            </Link>{" "}
            onto AWS for $50M in cost savings, leading a 10-person team on a{" "}
            <Link to="/projects/state-of-illinois-disease-surveillance" className={linkClass}>
              disease surveillance platform
            </Link>{" "}
            for the State of Illinois that won 2nd place in Deloitte's AWS Innovation Challenge, building a
            prior-authorization platform for Humana — EHR-integrated tools that match referrals to the
            right in-network specialist, validate ICD-10/procedure codes and eligibility, and submit
            authorizations to Availity as X12 278 transactions — that shipped an MVP in 5 weeks, and
            delivering the onboarding module for Meta's Advanced Analytics platform, which lets advertisers
            build custom audience models on Facebook, Instagram, and Audience Network data using React,
            Hack, GraphQL, and Meta's internal Ent/Thrift stack.
          </p>

          <p>
            Before Deloitte, I spent time at{" "}
            <a href="https://www.deere.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              John Deere
            </a>{" "}
            building procurement automation that saved $1.5M a year in operational costs, went back to{" "}
            the University of Texas as a software developer migrating an academic system to the cloud, at{" "}
            <a href="https://www.hitachi-payments.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Hitachi Payment Services
            </a>{" "}
            building POS transaction services on the ISO-8583 protocol, and at{" "}
            <a href="https://www.capgemini.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Capgemini
            </a>{" "}
            building manufacturing-alert systems for Volvo's automotive plants. In parallel, I've been
            building{" "}
            <Link to="/projects/jobminglr" className={linkClass}>
              JobMinglr
            </Link>
            , a swipe-to-match hiring platform now serving 180,000+ jobs, as founder and tech lead —
            which keeps me honest about shipping product end-to-end, not just architecting it.
          </p>

          <p>
            What ties this together is a "structure over control" approach to leading teams:
            clear contracts and SLAs instead of tribal knowledge, observability and resiliency
            built in from day one instead of bolted on after an incident, and mentorship that's
            measured by whether people grow past needing me. I hold a Master's in Computer
            Science from the University of Texas at Arlington, specializing in web, mobile, and
            AI systems — building on an Electronics & Telecommunications undergrad and a published
            paper on content-based image retrieval.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-6">
          <h2 className="text-lg font-semibold">Achievements</h2>
          <ul className="mt-3 space-y-3 text-sm">
            {achievements.map((a) => (
              <li key={a.title}>
                <div className="font-medium text-gray-900 dark:text-gray-100">{a.title}</div>
                <div className="text-gray-600 dark:text-gray-400">{a.detail}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I'm currently looking at Tech Lead roles — the kind where I own a system end-to-end
            and help a team scale with it — and I'm comfortable in TPM-adjacent work when a role
            calls for it. If that sounds like a fit, take a look at the{" "}
            <Link to="/projects" className={linkClass}>project case studies</Link> and{" "}
            <Link to="/leadership" className={linkClass}>leadership playbook</Link>, check my{" "}
            <Link to="/resume" className={linkClass}>resume and availability</Link>, or{" "}
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
