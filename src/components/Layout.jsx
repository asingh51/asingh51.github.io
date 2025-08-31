import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Nav />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
