import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import BlogPage from "./components/home/blog/BlogPage";
import AuthorPage from "./components/home/author/AuthorPage";
import ScrollTop from "./components/shared/ScrollTop";

const App = () => {
  return (
    <>
      <Layout>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
