import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { Link } from "gatsby";
import { posts } from "../../data/writing";

export const Head = () => (
  <Seo
    title="Writing"
    description="Notes on leading engineering teams — ADRs, mentorship, and delivery rhythm, written from actual projects rather than in the abstract."
  />
);

export default function WritingIndex() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
        <h1 className="text-3xl font-bold">Writing</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          The frameworks on the <Link to="/leadership" className="text-brand dark:text-sky-400 underline underline-offset-4">leadership page</Link>{" "}
          are principles. These are the same ideas worked through against one real
          situation each.
        </p>

        <div className="mt-8 space-y-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/writing/${p.slug}`}
              className="block rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              <div className="text-xs text-gray-500 dark:text-gray-400">{p.date}</div>
              <h2 className="mt-1 text-lg font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
