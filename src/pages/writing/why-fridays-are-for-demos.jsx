import React from "react";
import Seo from "../../components/SEO";
import PostLayout from "../../components/PostLayout";

export const Head = () => (
  <Seo
    title="Why Fridays are for demos"
    description="The two-week cadence that kept a six-person team honest about scope, and the one iteration where the demo caught a problem status updates hadn't."
  />
);

export default function DemoRhythmPost() {
  return (
    <PostLayout title="Why Fridays are for demos" date="August 2026">
      <p>
        Status updates answer "what did you work on." Demos answer "does it work." Those sound
        similar and aren't — a status update can be true and still hide the fact that a feature
        is 80% done in a way that makes the remaining 20% take three more weeks. A demo can't hide
        that, because someone has to actually click the thing.
      </p>

      <p>
        On the CDC re-platform, we ran two-week iterations that ended with a Friday demo — every
        engineer showed something running, not a slide about something running. The exit
        criteria for each iteration were written down at the start, not vibes-checked at the end,
        specifically so the demo had something concrete to be measured against.
      </p>

      <p>
        The iteration that justified the whole habit: a service migration that had been reported
        as "on track" for two consecutive status updates. In the Friday demo, the new service
        handled the happy path fine — but under a duplicate-message retry, it double-processed a
        record instead of treating the second delivery as idempotent. Nobody had lied in the
        status updates; the person genuinely believed it was on track, because the case that broke
        it hadn't come up yet in manual testing. It came up in about ninety seconds of actually
        running the demo scenario end to end.
      </p>

      <p>
        We caught it with two weeks of runway left instead of finding it in production, purely
        because the format forced a real execution instead of a description of one. That's the
        entire case for the cadence: not "demos are good for morale" — they're a forcing function
        that makes the gap between "I think this works" and "this works" visible on a fixed
        schedule, instead of whenever it happens to surface on its own.
      </p>
    </PostLayout>
  );
}
