import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

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

export default function Leadership() {
  return (
    <Layout>
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
          </div>

          <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold">Delivery Rhythm</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {delivery.map((d, i) => (<li key={i}>{d}</li>))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold">Decision-Making (ADRs)</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {adr.map((a, i) => (<li key={i}>{a}</li>))}
            </ul>
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
            I’m happy to share example ADRs, review checklists, on-call runbooks, and dashboards from prior projects (redacted as needed).
            If you’re evaluating me for a Tech Lead role, I can walk through a system design and my delivery playbook end-to-end.
          </p>
        </div>
      </section>
    </Layout>
  );
}