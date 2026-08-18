import React from "react";
import { Link } from "gatsby";
import { ArrowUpRight } from "lucide-react";

const ImpactCard = ({ title, role, timeframe, bullets, slug, liveUrl }) => (
  <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition">
    <div className="flex items-baseline justify-between gap-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <span className="text-xs shrink-0 text-gray-500 dark:text-gray-400">{timeframe}</span>
    </div>
    <p className="text-sm mt-1 text-brand dark:text-sky-400 font-medium">{role}</p>
    <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
    {(slug || liveUrl) && (
      <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
        {slug && (
          <Link
            to={`/projects/${slug}`}
            className="inline-flex items-center gap-1 text-brand dark:text-sky-400 hover:underline underline-offset-4"
          >
            Read the full case study <ArrowUpRight size={14} />
          </Link>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:underline underline-offset-4"
          >
            Visit {liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")} <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    )}
  </div>
);

export default ImpactCard;
