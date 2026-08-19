import React, { useState } from "react";
import { requestPasscode } from "../utils/passcode";

export default function RequestPasscodeButton({ pageId, pageLabel }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onRequest = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await requestPasscode({ pageId, pageLabel, visitorEmail: email });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs underline underline-offset-4 text-gray-500 dark:text-gray-400"
      >
        Don't have a code? Request one
      </button>
    );
  }

  if (status === "sent") {
    return (
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Request sent — I'll follow up with a code once I see it.
      </p>
    );
  }

  return (
    <div className="mt-2">
      <form onSubmit={onRequest} className="flex gap-2">
        <input
          type="email"
          required
          placeholder="Your email, so I can reply"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="text-sm px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-brand dark:hover:border-sky-400 disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send request"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-1 text-xs text-red-600 dark:text-red-400">
          Couldn't send that — try again in a moment.
        </p>
      )}
    </div>
  );
}
