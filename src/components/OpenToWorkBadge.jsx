import React from "react";

const OpenToWorkBadge = ({ className = "" }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold tracking-wide text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400 ${className}`}
  >
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
    </span>
    Open to Tech Lead roles
  </span>
);

export default OpenToWorkBadge;
