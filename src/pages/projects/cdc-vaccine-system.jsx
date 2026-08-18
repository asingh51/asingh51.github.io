import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { Link } from "gatsby";
import { ArrowLeft } from "lucide-react";
import ArchDiagram from "../../components/ArchDiagram";

export const Head = () => (
  <Seo
    title="Vaccine Admin System Case Study"
    description="Tech lead case study: re-platforming a CDC vaccine administration system onto AWS — architecture, constraints, and outcomes."
  />
);

const Metric = ({ value, label }) => (
  <div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
  </div>
);

export default function CdcCaseStudy() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-sky-400"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        <h1 className="mt-4 text-3xl font-bold">Vaccine Admin Management System Re-host</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Staff Software Engineer, Deloitte — Team Lead · for the CDC · 2024–2025
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-6 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <div className="rounded-lg bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
          This is a client engagement delivered through Deloitte. Specifics below are genericized
          and the diagram is illustrative, not the client's actual system diagram — but the
          constraints, decisions, and numbers are real.
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">The problem</h2>
          <p className="mt-2">
            VAMS/Vsafe — the national vaccine administration tooling — was running on aging,
            HIPAA-compliant infrastructure that had outgrown its original design: data management,
            reporting, and scalability were all straining at national scale, and there was no
            maintenance window big enough to "flip a switch." The re-platform had to happen
            underneath a system that couldn't stop running.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Constraints</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>HIPAA-compliant data handling — no room for silent data loss or compliance gaps.</li>
            <li>National-scale reporting consumers couldn't be broken mid-migration.</li>
            <li>Six engineers, one re-platforming effort, running alongside ongoing feature work.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Architecture</h2>
          <p className="mt-2">
            We decoupled the monolith into services with explicit contracts and SLAs, put
            observability in front of the launch instead of after the first incident, and built
            resiliency in as a default — timeouts, retries, DLQs, idempotency — rather than a
            response to an outage. Cost was treated as a first-class constraint from day one:
            right-sizing, autoscaling, and S3 lifecycle policies, not a cleanup pass after launch.
          </p>
          <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 overflow-x-auto">
            <ArchDiagram className="w-full min-w-[560px]" />
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Illustrative architecture — genericized for confidentiality.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">My role vs. the team's</h2>
          <p className="mt-2">
            I led six engineers and owned the service-boundary and SLA decisions, documented as
            ADRs so the team could disagree with a specific choice without re-litigating the whole
            migration. I also introduced a code-review rubric and pairing rotations — the goal
            wasn't just to ship the re-platform, but to leave the team able to run it without me.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Outcomes</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <Metric value="99.9%+" label="Uptime achieved" />
            <Metric value="45%↓" label="MTTR reduction" />
            <Metric value="$50M" label="Infra cost saved" />
            <Metric value="6" label="Engineers led" />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">What I learned</h2>
          <p className="mt-2">
            The hard part wasn't the migration mechanics — it was proving each service boundary
            was safe to cut over without a maintenance window, on a system where "we'll roll it
            back if something breaks" wasn't an acceptable answer for public-health data. The ADR
            habit is what made that provable: each cutover had a written rollback plan before it
            shipped, not one improvised after something went wrong.
          </p>
        </div>
      </section>
    </Layout>
  );
}
