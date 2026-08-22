import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import ArchDiagram from "../components/ArchDiagram";
import { testimonials } from "../data/testimonials";

export const Head = () => <Seo />;

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl dark:bg-sky-500/10"
        />
        <ArchDiagram
          decorative
          className="pointer-events-none absolute bottom-4 right-0 w-[420px] max-w-none hidden lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight"
            >
              Software Engineer → <span className="text-brand dark:text-sky-400">Engineering Lead</span>
            </motion.h1>

            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl">
              I’m Abhay (Sunny) — I design scalable systems, reduce costs without cutting corners,
              and grow engineers through clear processes and mentorship.
            </p>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
              Core stack: React, Java/Spring, Javascript, Python, AWS, PostgreSQL, MongoDB.
            </p>

            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
              Recently: X12, HL7 processing, GenAI pilots, cost-optimization.
            </p>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
              I'm looking for Series B+ product companies working with regulated or high-stakes
              data — healthcare, fintech, or infrastructure — where a Tech Lead owns systems
              end-to-end for a team of 5–15 engineers.
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
              Open to: full-time · remote (US) or hybrid from Austin, TX
            </p>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              👋 Say hi — always up for talking systems design, career pivots, or good taco spots in Austin.
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
                View Resume
              </Link>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            src="/images/Sticker2.png"
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
            <div className="text-2xl font-bold">$50M</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Infra cost saved (CDC re-host)</div>
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
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Each tag links to the case study or post that backs it up.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {[
              { t: "System design", to: "/projects/cdc-vaccine-system" },
              { t: "Service contracts & SLAs", to: "/projects/cdc-vaccine-system" },
              { t: "Observability (logs/metrics/traces)", to: "/projects/cdc-vaccine-system" },
              { t: "Resiliency (retries/DLQ/circuit breakers)", to: "/projects/cdc-vaccine-system" },
              { t: "CI/CD & release hygiene", to: "/writing/why-fridays-are-for-demos" },
              { t: "Cost-aware architectures", to: "/writing/adrs-that-survive-contact-with-reality" },
              { t: "Mentorship & review rubrics", to: "/writing/the-30-60-90-mentorship-playbook" },
              { t: "HL7/eICR & public health data", to: "/projects/state-of-illinois-disease-surveillance" },
              { t: "GenAI pilots (Bedrock)", to: "/projects/state-of-illinois-disease-surveillance" },
            ].map(({ t, to }) => (
              <Link
                key={t}
                to={to}
                className="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1 hover:border-brand hover:text-brand dark:hover:border-sky-400 dark:hover:text-sky-400 transition"
              >
                {t}
              </Link>
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

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-semibold">What people I've worked with say</h2>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Named LinkedIn recommendations —{" "}
          <a
            href="https://www.linkedin.com/in/abbi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-brand dark:hover:text-sky-400"
          >
            verify on LinkedIn
          </a>
          .
        </p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 text-sm flex flex-col"
            >
              <p className="text-gray-700 dark:text-gray-300 flex-1">“{t.quote}”</p>
              <footer className="mt-4 text-xs">
                <div className="font-semibold text-gray-900 dark:text-gray-100">{t.name}</div>
                <div className="text-gray-500 dark:text-gray-400">{t.title}</div>
              </footer>
            </blockquote>
          ))}
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
