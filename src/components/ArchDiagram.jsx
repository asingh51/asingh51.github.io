import React from "react";

const nodes = [
  { x: 20, y: 20, w: 150, h: 48, label: "API gateway" },
  { x: 220, y: 20, w: 170, h: 48, label: "Ingestion service" },
  { x: 440, y: 20, w: 190, h: 48, label: "HL7/eICR rules engine" },
  { x: 440, y: 108, w: 190, h: 48, label: "Data store (versioned)" },
  { x: 220, y: 108, w: 170, h: 48, label: "Observability\n(logs · metrics · traces)" },
  { x: 20, y: 108, w: 150, h: 48, label: "Autoscaling +\ncost lifecycle" },
];

const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 5],
];

function centerRight(n) {
  return { x: n.x + n.w, y: n.y + n.h / 2 };
}
function centerLeft(n) {
  return { x: n.x, y: n.y + n.h / 2 };
}
function centerBottom(n) {
  return { x: n.x + n.w / 2, y: n.y + n.h };
}
function centerTop(n) {
  return { x: n.x + n.w / 2, y: n.y };
}

/**
 * Illustrative architecture diagram — genericized, not a client's real system diagram.
 * `decorative` renders a faint, unlabeled version for use as a background motif.
 */
export default function ArchDiagram({ decorative = false, className = "" }) {
  return (
    <svg
      viewBox="0 0 660 180"
      className={className}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Illustrative architecture diagram: API gateway to ingestion service to rules engine to data store, with observability and cost-lifecycle automation alongside"}
    >
      <defs>
        <marker id="arch-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 z" fill="currentColor" />
        </marker>
      </defs>

      <g className={decorative ? "text-gray-900/[0.06] dark:text-white/[0.08]" : "text-gray-300 dark:text-gray-700"} fill="none" stroke="currentColor" strokeWidth="1.5">
        {edges.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          const sameRow = from.y === to.y;
          const p1 = sameRow ? centerRight(from) : centerBottom(from);
          const p2 = sameRow ? centerLeft(to) : centerTop(to);
          return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} markerEnd="url(#arch-arrow)" />;
        })}
      </g>

      {nodes.map((n, i) => (
        <g key={i}>
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height={n.h}
            rx="8"
            className={
              decorative
                ? "fill-transparent stroke-gray-900/[0.08] dark:stroke-white/[0.10]"
                : "fill-white dark:fill-gray-900 stroke-gray-200 dark:stroke-gray-700"
            }
            strokeWidth="1.5"
          />
          {!decorative && (
            <text
              x={n.x + n.w / 2}
              y={n.y + n.h / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-700 dark:fill-gray-200"
              style={{ fontSize: 11, fontWeight: 500 }}
            >
              {n.label.split("\n").map((line, li) => (
                <tspan key={li} x={n.x + n.w / 2} dy={li === 0 ? (n.label.includes("\n") ? -6 : 0) : 13}>
                  {line}
                </tspan>
              ))}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
