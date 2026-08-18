import React from "react";
import Layout from "./Layout";
import { Link } from "gatsby";
import { ArrowLeft } from "lucide-react";

const PostLayout = ({ title, date, children }) => (
  <Layout>
    <section className="max-w-2xl mx-auto px-6 pt-12 pb-24">
      <Link
        to="/writing"
        className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-sky-400"
      >
        <ArrowLeft size={14} /> All writing
      </Link>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">{date}</div>
      <h1 className="mt-1 text-3xl font-bold leading-tight">{title}</h1>

      <div className="mt-8 space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </div>
    </section>
  </Layout>
);

export default PostLayout;
