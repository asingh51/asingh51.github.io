import React, { useState } from "react";
import { Router, navigate } from "@reach/router";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

export const Head = () => <Seo title="Resume" />;

const PROFILE_MAP = {
  tl:  { key: "tech-lead", title: "Tech Lead Resume", file: "/resumes/team-lead.pdf" },
  tpm: { key: "tpm",       title: "TPM Resume",       file: "/resumes/tpm.pdf" },
};

function ResumeGate() {
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const profile = PROFILE_MAP[pwd.trim()];
    if (!profile) {
      setError("Invalid password.");
      return;
    }
    navigate(`/resume/${profile.key}`);
  };

  return (
    <Layout>
      <section className="max-w-md mx-auto px-6 pt-16 pb-24">
        <h1 className="text-3xl font-bold">Resume Access</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">Enter the password you were given to view the right resume.</p>
        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3"
          />
          {error && <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-brand text-white px-5 py-3 rounded-xl font-semibold hover:bg-brand-dark transition"
          >
            Unlock
          </button>
        </form>
      </section>
    </Layout>
  );
}

function ResumeProfile({ profileKey }) {
  const profiles = Object.values(PROFILE_MAP).reduce((acc, p) => {
    acc[p.key] = p;
    return acc;
  }, {});
  const p = profiles[profileKey];

  if (!p) {
    return (
      <Layout>
        <section className="max-w-md mx-auto px-6 pt-16 pb-24">
          <h1 className="text-2xl font-semibold">Not found</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">This resume link is invalid. Try again from the password page.</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{p.title}</h1>
          <a
            href={p.file}
            className="text-sm underline underline-offset-4 text-brand dark:text-sky-400"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </a>
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <iframe
            title={p.title}
            src={p.file}
            className="w-full"
            style={{ height: "80vh" }}
          />
        </div>
      </section>
    </Layout>
  );
}

export default function ResumePage() {
  return (
    <>
      <Router basepath="/resume">
        <ResumeGate path="/" />
        <ResumeProfile path="/:profileKey" />
      </Router>
    </>
  );
}