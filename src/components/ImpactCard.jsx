import React from "react";

const ImpactCard = ({ title, role, timeframe, bullets }) => (
  <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
    <div className="flex items-baseline justify-between">
      <h3 className="text-lg font-semibold">{title}</h3>
      <span className="text-xs text-gray-500">{timeframe}</span>
    </div>
    <p className="text-sm mt-1 text-gray-600">Role: {role}</p>
    <ul className="list-disc pl-5 mt-3 space-y-1 text-sm">
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </div>
);

export default ImpactCard;
