import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { Link } from "gatsby";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Head = () => (
  <Seo
    title="JobMinglr Case Study"
    description="Founder and Tech Lead case study: building JobMinglr, a profile-matched hiring platform now serving 180,000+ jobs from 8,000+ companies."
  />
);

const Metric = ({ value, label }) => (
  <div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
  </div>
);

export default function JobMinglrCaseStudy() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-sky-400"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        <h1 className="mt-4 text-3xl font-bold">JobMinglr</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Founder / Tech Lead · 2023–present</p>

        <a
          href="https://jobminglr.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 rounded-xl bg-brand text-white px-4 py-2 text-sm font-semibold hover:bg-brand-dark transition"
        >
          Visit jobminglr.com <ArrowUpRight size={14} />
        </a>
      </section>

      <section className="max-w-3xl mx-auto px-6">
        <img
          src="/images/projects/jobminglr/home.png"
          alt="JobMinglr homepage: 'Your next job, matched to you' with a phone mockup showing a 92% match score"
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700"
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">The problem</h2>
          <p className="mt-2">
            Job boards match on keywords, so both sides lose: candidates get flooded with roles
            that technically contain the right words and nothing else, and recruiters drown in
            applicants who cleared the keyword filter but aren't actually a fit. I wanted to try
            scoring a candidate's actual profile against a role, not their resume's vocabulary.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">What I built</h2>
          <p className="mt-2">
            A two-sided platform: a React/Gatsby marketing and job-seeker experience, a Node/Express
            API, and AWS infra (S3, Lambda, CloudFormation) behind it, plus native iOS and Android
            apps. Job seekers get a match score instead of a keyword hit; employers get a "Verified
            Signals" layer (email, identity, résumé, LinkedIn) so they can tell a real applicant from
            noise before spending time on them. On the growth side, I built out a programmatic SEO
            structure — job pages indexed by metro, role, and schedule type — rather than relying on
            paid acquisition alone.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <img
            src="/images/projects/jobminglr/employers.png"
            alt="JobMinglr employer page: 'Find the people who fit. Skip the résumé pile,' showing a candidate card with match score and verified signals"
            className="w-full"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Where it landed</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <Metric value="180,000+" label="Live job listings" />
            <Metric value="8,000+" label="Companies represented" />
            <Metric value="20%" label="Faster screening (pilot recruiters)" />
            <Metric value="15%" label="Better candidate fit (pilot)" />
            <Metric value="2" label="Native mobile apps" />
            <Metric value="2" label="ATS integrations (Greenhouse, Pinpoint)" />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">What I'd do differently</h2>
          <p className="mt-2">
            Building both sides of a marketplace at once — job seeker product, employer product,
            ATS integrations, mobile — with a tiny team meant everything was permanently half-built
            for longer than I wanted. In hindsight I'd have sequenced harder: prove the match-scoring
            thesis on one side of the marketplace before building the other side's tooling around it.
            It's the same lesson I now apply as a tech lead reviewing scope on someone else's roadmap.
          </p>
        </div>
      </section>
    </Layout>
  );
}
