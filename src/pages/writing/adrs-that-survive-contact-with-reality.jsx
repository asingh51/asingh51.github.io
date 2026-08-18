import React from "react";
import Seo from "../../components/SEO";
import PostLayout from "../../components/PostLayout";

export const Head = () => (
  <Seo
    title="ADRs that survive contact with reality"
    description="Why a one-page decision record beats a design doc nobody rereads, with a real example from a cost-cutting call on the CDC re-platform."
  />
);

export default function AdrPost() {
  return (
    <PostLayout title="ADRs that survive contact with reality" date="August 2026">
      <p>
        Most teams write design docs once, at the start, when they know the least about the
        problem. Then the doc rots while the decisions inside it keep getting relitigated in
        Slack threads nobody can find six months later. An ADR — architecture decision record —
        fixes a narrower thing: not "here's the whole design," but "here's the one choice we made,
        the options we didn't pick, and why."
      </p>

      <p>
        On the CDC re-platform, I made ADRs a condition of merging any change that touched a
        service boundary, a data contract, or infrastructure cost. Not because process is
        virtuous on its own, but because six engineers making independent judgment calls about
        the same system, with no paper trail, is how you get three different retry strategies and
        nobody who remembers why.
      </p>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 p-5 text-sm">
        <div className="font-mono text-xs text-gray-500 dark:text-gray-400 mb-3">
          ADR-014 — Autoscaling policy for the ingestion tier
        </div>
        <p className="mb-2"><span className="font-semibold">Context.</span> Ingestion tier was provisioned for peak load 24/7, but real traffic was spiky — high during business hours, near-zero overnight. Fixed capacity was the single largest line item in monthly infra spend.</p>
        <p className="mb-2"><span className="font-semibold">Options considered.</span> (1) Leave as-is, accept the cost. (2) Scheduled scaling (business-hours-only capacity). (3) Target-tracking autoscaling on queue depth.</p>
        <p className="mb-2"><span className="font-semibold">Decision.</span> Target-tracking autoscaling on queue depth, with a floor of 2 instances to protect cold-start latency on the first request of a burst.</p>
        <p className="mb-2"><span className="font-semibold">Rollback plan.</span> Autoscaling policy is a config change, not a code change — revert to fixed capacity by disabling the policy, no deploy required.</p>
        <p className="m-0"><span className="font-semibold">Owner.</span> Abhay Singh · reviewed by infra + on-call rotation before merge.</p>
      </div>

      <p>
        That ADR is one paragraph of context most people would consider obvious in hindsight. It
        wasn't obvious in the room — scheduled scaling was the popular first instinct, because
        it's simpler to reason about. The ADR is what let someone challenge that instinct with
        "what about traffic bursts outside business hours" without it turning into a two-hour
        meeting: the trade-off was already written down, so the disagreement had something
        concrete to attach to.
      </p>

      <p>
        The habit paid off in a way I didn't fully expect: six months later, a new team member
        proposed reverting the autoscaling policy because it looked like unnecessary complexity
        from the outside. The ADR answered the question in under a minute instead of costing a
        week of "let me dig into git history and ask around."
      </p>
    </PostLayout>
  );
}
