import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "gatsby";

export const Head = () => <Seo />;

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl dark:bg-sky-500/10"
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight"
            >
              Senior Software Engineer → <span className="text-brand dark:text-sky-400">Tech Lead</span>
            </motion.h1>

            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl">
              I’m Abhay (Sunny) — I design scalable systems, reduce costs without cutting corners,
              and grow engineers through clear processes and mentorship.
            </p>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
              Core stack: React, Java/Spring, AWS, PostgreSQL. Recently: HL7 processing, GenAI pilots, cost-optimization.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-xl bg-brand text-white px-5 py-3 font-semibold hover:bg-brand-dark transition"
              >
                View Case Studies
              </Link>
              <Link
                to="/resume"
                className="rounded-xl border border-gray-200 dark:border-gray-700 px-5 py-3 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                See Resume (Password)
              </Link>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            src="/images/profile.png"
            alt="Abhay Singh"
            className="hidden sm:block h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-4 ring-white dark:ring-gray-900 shadow-lg justify-self-center"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
          <div>
            <div className="text-2xl font-bold">10+ yrs</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Building & shipping</div>
          </div>
          <div>
            <div className="text-2xl font-bold">99.9%+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">SLA targets achieved</div>
          </div>
          <div>
            <div className="text-2xl font-bold">30%↓</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Infra cost on key platform</div>
          </div>
          <div>
            <div className="text-2xl font-bold">6→mid</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Mentored juniors to mid-level</div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="rounded-2xl bg-gray-50 dark:bg-gray-900/60 p-8 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-semibold">Focus Areas</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {[
              "System design",
              "Service contracts & SLAs",
              "Observability (logs/metrics/traces)",
              "Resiliency (retries/DLQ/circuit breakers)",
              "CI/CD & release hygiene",
              "Cost-aware architectures",
              "Mentorship & review rubrics",
              "HL7/eICR & public health data",
              "GenAI pilots (Bedrock)",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h3 className="text-lg font-semibold">Architecture Principles</h3>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1 text-gray-600 dark:text-gray-300">
              <li>Contracts first; decouple with clear SLAs and error budgets.</li>
              <li>Resiliency as a habit: timeouts, idempotency, DLQs, bulkheads.</li>
              <li>Observability by default: dashboards before launch.</li>
              <li>Cost is a feature: right-size, lifecycle, autoscale.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h3 className="text-lg font-semibold">Leadership & Delivery</h3>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1 text-gray-600 dark:text-gray-300">
              <li>Calm delivery rhythm: ruthless prioritization, demo &gt; status.</li>
              <li>Mentorship tracks: pairing plan, review checklist, growth goals.</li>
              <li>ADRs for decisions: options, trade-offs, rollback plan.</li>
              <li>Hiring signals: problem framing, systems thinking, comms.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 text-center">
          <h3 className="text-xl font-semibold">Looking for an emerging Tech Lead?</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            I’m happy to share deeper architecture docs, dashboards, and ADRs on request.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <a
              href="mailto:abhaysingh200009@gmail.com"
              className="rounded-xl bg-brand text-white px-5 py-3 font-semibold hover:bg-brand-dark transition"
            >
              Contact
            </a>
            <Link
              to="/projects"
              className="rounded-xl border border-gray-200 dark:border-gray-700 px-5 py-3 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
