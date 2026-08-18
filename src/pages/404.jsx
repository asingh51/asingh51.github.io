import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { Link } from "gatsby";

export const Head = () => <Seo title="Page Not Found" />;

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="max-w-2xl mx-auto px-6 pt-16 pb-24 text-center">
        <h1 className="text-4xl font-bold mb-4">404 — Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-brand text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-dark transition"
        >
          Go Home
        </Link>
      </section>
    </Layout>
  );
}