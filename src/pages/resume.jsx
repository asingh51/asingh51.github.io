import React, { useState } from "react";
import { Router, navigate } from "@reach/router";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

export const Head = () => <Seo title="Resume" />;

const TECH_LEAD = { key: "tech-lead", title: "Tech Lead Resume", file: "/resumes/team-lead.pdf" };
const TPM = { key: "tpm", title: "TPM Resume", file: "/resumes/tpm.pdf" };
const PROFILES = { [TECH_LEAD.key]: TECH_LEAD, [TPM.key]: TPM };
const PASSWORD_MAP = { tpm: TPM };

function ResumeViewer({ profile, compact }) {
  return (
    <section className={`max-w-3xl mx-auto px-6 pt-8 ${compact ? "pb-6" : "pb-24"}`}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{profile.title}</h1>
        <a
          href={profile.file}
          className="text-sm underline underline-offset-4 text-brand dark:text-sky-400"
          target="_blank"
          rel="noreferrer"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <iframe
          title={profile.title}
          src={profile.file}
          className="w-full"
          style={{ height: "80vh" }}
        />
      </div>
    </section>
  );
}

function TpmGate() {
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const profile = PASSWORD_MAP[pwd.trim()];
    if (!profile) {
      setError("Invalid code.");
      return;
    }
    navigate(`/resume/${profile.key}`);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="text-sm underline underline-offset-4 text-gray-500 dark:text-gray-400"
      >
        Need the TPM-focused version instead?
      </button>
    );
  }

  return (
    <div className="max-w-sm">
      <p className="text-sm text-gray-600 dark:text-gray-300">Enter the code you were given.</p>
      <form onSubmit={onSubmit} className="mt-3 flex gap-2">
        <input
          type="password"
          placeholder="Code"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2"
        />
        <button
          type="submit"
          className="bg-brand text-white px-4 py-2 rounded-xl font-semibold hover:bg-brand-dark transition"
        >
          Unlock
        </button>
      </form>
      {error && <p className="text-red-600 dark:text-red-400 text-sm mt-2">{error}</p>}
    </div>
  );
}

function ResumeHome() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-2">
        <h1 className="text-2xl font-bold">Resume</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Open to: full-time · remote (US) or hybrid from Austin, TX · not seeking full-time onsite.
        </p>
      </section>
      <ResumeViewer profile={TECH_LEAD} compact />
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <TpmGate />
      </section>
    </Layout>
  );
}

function ResumeProfile({ profileKey }) {
  const profile = PROFILES[profileKey];

  if (!profile) {
    return (
      <Layout>
        <section className="max-w-md mx-auto px-6 pt-16 pb-24">
          <h1 className="text-2xl font-semibold">Not found</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">This resume link is invalid. Try again from the resume page.</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <ResumeViewer profile={profile} />
    </Layout>
  );
}

export default function ResumePage() {
  return (
    <Router basepath="/resume">
      <ResumeHome path="/" />
      <ResumeProfile path="/:profileKey" />
    </Router>
  );
}
