import React from "react";
import Seo from "../../components/SEO";
import PostLayout from "../../components/PostLayout";

export const Head = () => (
  <Seo
    title="The 30/60/90 mentorship playbook"
    description="A concrete week-by-week walkthrough of onboarding a new engineer to their first shipped PR, and what actually breaks in week 3."
  />
);

export default function MentorshipPost() {
  return (
    <PostLayout title="The 30/60/90 mentorship playbook" date="August 2026">
      <p>
        "Pair them with someone for the first few weeks" is the default onboarding plan at most
        companies, and it's also the plan that most often quietly fails — because "pair with
        someone" has no exit condition. The buddy either hovers indefinitely or disengages after
        week one, and the new hire never quite learns where the edges of their own judgment are
        supposed to be.
      </p>

      <p>
        The version I run has three phases with a specific, checkable exit condition for each one,
        so both sides know when to let go.
      </p>

      <div className="space-y-4">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div className="font-semibold">Days 1–30 — shadow, then ship something tiny</div>
          <p className="mt-2 text-sm">
            A named buddy, daily 15-minute check-ins, and a deliberately small first PR — a bug
            fix or a well-scoped chore, not a feature. Exit condition: that first PR is merged by
            day 10. If it isn't, the scope was wrong, not the person.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div className="font-semibold">Days 31–60 — own a slice, review someone else's code</div>
          <p className="mt-2 text-sm">
            They take ownership of one well-bounded piece of the system and start doing code
            reviews against the team's rubric — reviewing teaches the standard faster than being
            reviewed does. Check-ins drop to twice a week. Exit condition: they've shipped without
            the buddy in the room for the decision.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <div className="font-semibold">Days 61–90 — shadow an incident, then lead the retro</div>
          <p className="mt-2 text-sm">
            They join an on-call rotation as secondary, and lead (not just attend) one retro or
            planning session. Exit condition: the growth conversation shifts from "are you ramped"
            to "what do you want to own next."
          </p>
        </div>
      </div>

      <p>
        The failure mode I've actually seen isn't week one — it's week three. That's when the
        buddy relationship naturally thins out, the new hire has just enough context to be
        dangerous, and nobody has explicitly handed them the small slice of ownership from phase
        two yet. The fix isn't more check-ins; it's making that hand-off a scheduled, named event
        instead of something that's supposed to happen organically. Organic is how you end up with
        someone who's been "ramping" for four months.
      </p>

      <p>
        The whole point of the 90 days is that at the end of it, they don't need me in the room —
        which is also the only honest measure of whether mentorship worked.
      </p>
    </PostLayout>
  );
}
