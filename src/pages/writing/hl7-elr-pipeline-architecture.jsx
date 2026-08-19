import React, { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { Link } from "gatsby";
import { ArrowLeft, Lock } from "lucide-react";
import RequestPasscodeButton from "../../components/RequestPasscodeButton";
import { verifyPasscode } from "../../utils/passcode";

export const Head = () => (
  <Seo title="Locked note" description="Password-protected engineering note." />
);

const CODE = "idss";
const PAGE_ID = "writing-hl7-elr";

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
      <Link
        to="/writing"
        className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-sky-400"
      >
        <ArrowLeft size={14} /> All writing
      </Link>

      <div className="mt-8 flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <Lock size={18} />
        <h1 className="text-xl font-semibold">This note is locked</h1>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        Implementation-level detail from a client engagement lives here — ask for the code if
        you're a recruiter or hiring manager evaluating this work.
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
        <RequestPasscodeButton pageId={PAGE_ID} pageLabel="HL7/ELR pipeline note" />
      </div>
    </section>
  );
}

function Note() {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-12 pb-24">
      <Link
        to="/writing"
        className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-sky-400"
      >
        <ArrowLeft size={14} /> All writing
      </Link>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">August 2026</div>
      <h1 className="mt-1 text-3xl font-bold leading-tight">
        Notes on an HL7 lab-result pipeline
      </h1>
      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 italic">
        Working notes from the{" "}
        <Link to="/projects/state-of-illinois-disease-surveillance" className="underline underline-offset-4">
          disease surveillance case study
        </Link>
        , genericized for confidentiality. This is the implementation detail behind that
        case study's "rules engine" line, kept here rather than in the public write-up.
      </p>

      <div className="mt-8 space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            The shape of an HL7 v2.x result message
          </h2>
          <p className="mt-2">
            An electronic lab report arrives as one HL7 message with a fixed header (MSH, plus
            a software-identifying SFT) and a repeatable PATIENT_RESULT group underneath: patient
            demographics (PID), then one or more ORDER_OBSERVATION groups. Each order carries the
            order-level context (ORC — who ordered what), the general test metadata (OBR — one
            per test ordered), and the actual result values (OBX — one per discrete observation,
            repeatable). Specimen (SPM) and next-of-kin (NK1) segments hang off the same order
            group when present. The distinction that matters operationally: OBR is "what was
            ordered," OBX is "what came back." A single OBR routinely fans out to a dozen-plus
            OBX segments, and getting that fan-out grouped correctly is most of the integration
            work — get it wrong and you silently attach one test's results to a different test's
            order.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Why an integration engine instead of hand-rolled parsing
          </h2>
          <p className="mt-2">
            We sat a commercial HL7 integration engine in front of custom services rather than
            parsing raw pipe-delimited HL7 ourselves. The engine's job was narrow and mechanical:
            validate the message against the base schema, split multi-event batches into single
            transactions, and hand each one off as clean XML. Everything with actual business
            logic — duplicate detection, provider validation, code normalization — lived in
            services we owned downstream, not in engine-native rules. That split mattered later:
            engine upgrades and schema patches never touched business logic, and business logic
            changes never required touching the engine config that every other message type also
            depended on.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            A layered validation service, not one big rule
          </h2>
          <p className="mt-2">
            Before anything was persisted, each transaction went through an ordered chain: confirm
            the message carries a condition the system is actually configured to track, apply the
            condition-specific checks that condition needs (a positive lab value alone isn't
            reportable for every condition — some require a corroborating negative on a companion
            panel before they count), then check whether a matching patient record already exists
            so we update instead of duplicating. Only after all three passed did the pipeline
            create a new patient record. Ordering the chain that way — cheap structural checks
            before expensive lookups, and no patient creation before dedup — kept the common case
            fast without special-casing it.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Normalizing into a shared code set
          </h2>
          <p className="mt-2">
            Labs don't send results in one vocabulary. A normalization stage translated incoming
            local and proprietary test codes into the standard code set the downstream reporting
            system expects, and a second translation stage mapped result/observation codes into
            the clinical vocabulary used for case classification. Splitting normalization from
            translation — one stage per target vocabulary — meant adding support for a new sending
            lab's code set never touched the reporting-side mapping, and vice versa.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            The parent-child OBX problem
          </h2>
          <p className="mt-2">
            The genuinely hard edge case: some panels report a parent observation alongside child
            observations that only make sense in relation to it — a susceptibility result that's
            meaningless without knowing which organism it was tested against. Labs don't encode
            that hierarchy explicitly in every message, and a nontrivial fraction arrive with an
            invalid or missing code on one side of the pair. We derived the parent-child
            relationship from specimen matching and observation sub-ID patterns rather than
            trusting an explicit link field, then flagged the cases where a child result carried a
            code we couldn't resolve against any known parent — those went to a review queue
            instead of being silently dropped or silently misattached. Given how often lab
            interfaces vary sender-to-sender, treating "which OBX belongs to which OBR" as
            something to detect rather than something to trust was the single change that cut the
            most silent data-quality bugs.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            What I'd tell someone starting this from scratch
          </h2>
          <p className="mt-2">
            Don't let engine-level transformation and business validation blur into the same
            layer — the moment a business rule lives inside the integration engine's config
            instead of a service you own, you've coupled your domain logic's release cycle to your
            vendor's. And archive the raw inbound message before any normalization touches it. The
            number of times "what did the lab actually send us" answered a bug that the normalized,
            transformed version of the same message couldn't, made that the cheapest insurance
            policy in the whole pipeline.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function LockedHL7Note() {
  const [unlocked, setUnlocked] = useState(false);

  return <Layout>{unlocked ? <Note /> : <Gate onUnlock={() => setUnlocked(true)} />}</Layout>;
}
