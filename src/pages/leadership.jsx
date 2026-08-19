import React, { useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { Link } from "gatsby";
import { Lock } from "lucide-react";
import RequestPasscodeButton from "../components/RequestPasscodeButton";
import { verifyPasscode } from "../utils/passcode";

const CODE = "lead";
const PAGE_ID = "leadership";

const postLinkClass =
  "mt-4 inline-block text-sm font-medium text-brand dark:text-sky-400 hover:underline underline-offset-4";

export const Head = () => <Seo title="Leadership" />;

const principles = [
  "Structure > control: clear goals, written decisions, lightweight guardrails.",
  "Contracts first: APIs with SLAs, error budgets, and observability baked in.",
  "Calm execution: ruthless prioritization, protect focus time, demo > status.",
  "People scale systems: mentorship, pairing, and consistent code review rubrics."
];

const outcomes = [
  { label: "Release cycle ↓ 40%", detail: "Standardized CI/CD, trunk-based flow, automated smoke/contract tests." },
  { label: "Uptime 99.9%+", detail: "Resiliency patterns (timeouts, retries, DLQs, bulkheads) and SLO dashboards." },
  { label: "MTTR ↓ ~45%", detail: "Runbooks, on-call checklists, and structured incident reviews that teach, not blame." },
  { label: "Cost ↓ ~30%", detail: "Right-sizing, lifecycle policies, autoscaling, cost reviews in planning." },
];

const mentoring = [
  "Onboarding playbook: 30/60/90 with buddy + weekly goals, first PR within week 1.",
  "Review checklist: readability, failure modes, metrics/logs/traces, tests, ADR link.",
  "Pairing rotations: spread context, reduce bus factor, accelerate juniors → mid.",
  "Growth loops: monthly goals, shadow → lead a feature → mentor the next person."
];

const delivery = [
  "Weekly priorities with WIP limits; protect focus blocks.",
  "Two-week iterations with Friday demo; measurable exit criteria, not vibes.",
  "Risk register & red/amber flags early; escalate with options, not surprises.",
  "Definition of Done: contracts, tests, dashboards, runbook, alerts configured."
];

const adr = [
  "1-pager ADRs: context, options, decision, rollback plan, and owners.",
  "Link ADR in PRs; decisions expire unless renewed with evidence.",
  "Bias toward reversible choices; schedule follow-ups for the irreversible ones."
];

const conflict = [
  "Clarify goal → list options → map trade-offs → decide → document → revisit.",
  "Disagree & commit after decision; keep a standing retro to improve the process.",
  "Assume good intent, verify with data, focus on outcomes over preferences."
];

const hiring = [
  "Signals: problem framing, systems thinking, debugging under ambiguity, comms.",
  "Practical design exercise with constraints; probe trade-offs and rollback plans.",
  "Bar raisers in panel; structured feedback to reduce bias and variability."
];

const kpis = [
  "Reliability: SLO attainment, incident rate, MTTR/MTTA.",
  "Delivery: predictability (planned vs shipped), lead time, change failure rate.",
  "Quality: escaped defects, flaky tests %, code review latency.",
  "People: onboarding time to first PR, promotion velocity, team eNPS."
];

function Gate({ onUnlock }) {
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const code = pwd.trim();
    if (code.toLowerCase() === CODE || verifyPasscode(PAGE_ID, code)) {
      onUnlock();
      return;
    }
    setError("Invalid code.");
  };

  return (
    <section className="max-w-md mx-auto px-6 pt-16 pb-24">
      <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <Lock size={18} />
        <h1 className="text-xl font-semibold">This page is locked</h1>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        Ask for the code if you're a recruiter or hiring manager evaluating this work.
      </p>

      <form onSubmit={onSubmit} className="mt-5 flex gap-2">
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
      <div className="mt-3">
        <RequestPasscodeButton pageId={PAGE_ID} pageLabel="Leadership page" />
      </div>
    </section>
  );
}

function LeadershipContent() {
  return (
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-16">
        <h1 className="text-3xl font-bold">Leadership</h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          I lead with structure, clarity, and empathy—so teams ship calmly and systems scale.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold">Leadership Principles</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {principles.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
          </div>

          <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold">Team Outcomes</h2>
            <ul className="mt-3 space-y-3 text-sm">
              {outcomes.map((o, i) => (
                <li key={i} className="rounded-lg border border-gray-100 dark:border-gray-800 p-3 bg-gray-50 dark:bg-gray-800/60">
                  <div className="font-medium">{o.label}</div>
                  <div className="text-gray-600 dark:text-gray-400">{o.detail}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold">Mentorship & Growth</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {mentoring.map((m, i) => (<li key={i}>{m}</li>))}
            </ul>
            <Link to="/writing/the-30-60-90-mentorship-playbook" className={postLinkClass}>
              Read the full playbook, week by week →
            </Link>
          </div>

          <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold">Delivery Rhythm</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {delivery.map((d, i) => (<li key={i}>{d}</li>))}
            </ul>
            <Link to="/writing/why-fridays-are-for-demos" className={postLinkClass}>
              Read what a Friday demo actually caught →
            </Link>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold">Decision-Making (ADRs)</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {adr.map((a, i) => (<li key={i}>{a}</li>))}
            </ul>
            <Link to="/writing/adrs-that-survive-contact-with-reality" className={postLinkClass}>
              Read a real ADR from the CDC project →
            </Link>
          </div>

          <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold">Conflict Playbook</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {conflict.map((c, i) => (<li key={i}>{c}</li>))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold">Hiring Rubric</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {hiring.map((h, i) => (<li key={i}>{h}</li>))}
            </ul>
          </div>

          <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold">Metrics I Care About</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {kpis.map((k, i) => (<li key={i}>{k}</li>))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900/60 mt-8">
          <h2 className="text-lg font-semibold">Working With Me</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
            The <Link to="/writing" className="text-brand dark:text-sky-400 underline underline-offset-4">writing section</Link>{" "}
            has a real ADR and a real incident the demo cadence caught — not just a description of
            the process. I'm happy to go deeper on review checklists, on-call runbooks, and
            dashboards from prior projects (redacted as needed) if you're evaluating me for a Tech
            Lead role.
          </p>
        </div>
      </section>
  );
}

export default function LeadershipPage() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <Layout>
      {unlocked ? <LeadershipContent /> : <Gate onUnlock={() => setUnlocked(true)} />}
    </Layout>
  );
}