import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { Link } from "gatsby";
import { ArrowLeft } from "lucide-react";
import ArchDiagram from "../../components/ArchDiagram";

export const Head = () => (
  <Seo
    title="Disease Surveillance System Case Study"
    description="Tech lead case study: an AWS Bedrock RAG pipeline for the State of Illinois that automated disease detection across 3M+ records and won 2nd place at Deloitte's AWS Innovation Challenge."
  />
);

const Metric = ({ value, label }) => (
  <div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
  </div>
);

const nodes = [
  { x: 20, y: 20, w: 170, h: 48, label: "HL7/eLR intake" },
  { x: 240, y: 20, w: 190, h: 48, label: "Rules engine\n(OBX regrouping)" },
  { x: 470, y: 20, w: 190, h: 48, label: "Bedrock RAG\nextraction" },
  { x: 470, y: 108, w: 190, h: 48, label: "Case index\n(vector store)" },
  { x: 240, y: 108, w: 190, h: 48, label: "SME review queue" },
  { x: 20, y: 108, w: 170, h: 48, label: "Disease-detection\ndashboard" },
];
const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 5],
];

export default function IllinoisCaseStudy() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-sky-400"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        <h1 className="mt-4 text-3xl font-bold">Disease Surveillance System</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Staff Software Engineer, Deloitte — Tech Lead · for the State of Illinois · 2022–present
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-6 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <div className="rounded-lg bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
          This is a client engagement delivered through Deloitte. The diagram below is
          illustrative, not the client's actual system diagram — the constraints, decisions, and
          numbers are real.
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">The problem</h2>
          <p className="mt-2">
            Public-health disease surveillance runs on HL7 electronic lab reports (eLR) and
            electronic case reports (eICR) arriving continuously from providers and labs across
            the state. Reviewing that volume manually for case triage doesn't scale — at 3M+
            records, the bottleneck wasn't detecting disease signals, it was routing the right
            records to a human fast enough to matter.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Architecture</h2>
          <p className="mt-2">
            We built cloud-native HL7 rule-processing services to regroup and normalize incoming
            OBX segments, then layered an AWS Bedrock RAG pipeline on top to extract and index the
            clinically relevant fields for case triage — rather than asking epidemiologists to
            read raw HL7 records. Every extraction decision was benchmarked against a
            heuristics-only baseline before it was trusted in the triage queue.
          </p>
          <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 overflow-x-auto">
            <ArchDiagram
              nodes={nodes}
              edges={edges}
              viewBox="0 0 680 180"
              ariaLabel="Illustrative architecture diagram: HL7/eLR intake to rules engine to Bedrock RAG extraction to a case index, feeding an SME review queue and disease-detection dashboard"
              className="w-full min-w-[580px]"
            />
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Illustrative architecture — genericized for confidentiality.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">My role vs. the team's</h2>
          <p className="mt-2">
            I led execution for a 10+ person team across API design, messaging, and caching, and
            owned the architecture artifacts — UML, sequence diagrams, data-flow diagrams, service
            contracts — that let multiple engineering teams build against the same system without
            a standing meeting to keep everyone aligned. I designed the rules engine for OBX
            regrouping myself and worked directly with the epidemiology SMEs to validate that the
            Bedrock pipeline's output actually matched what a human reviewer would have flagged.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Outcomes</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <Metric value="3M+" label="Records processed" />
            <Metric value="10+" label="Engineers led" />
            <Metric value="20%" label="Efficiency improvement" />
            <Metric value="2nd place" label="Deloitte AWS Innovation Challenge" />
          </div>
          <p className="mt-3 text-sm">
            The team's solution was presented at AWS re:Invent to Deloitte leadership and clients.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">What I learned</h2>
          <p className="mt-2">
            An LLM pipeline that looks impressive in a demo isn't the same as one an epidemiologist
            will actually trust for case triage. The thing that made the difference wasn't model
            choice — it was benchmarking every extraction against the heuristics-only baseline and
            showing the SMEs exactly where the two disagreed, instead of asking them to take the
            RAG pipeline's word for it.
          </p>
        </div>
      </section>
    </Layout>
  );
}
