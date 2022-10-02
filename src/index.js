import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Profile from "pages/Profile";

// components
import Error from "components/Error";
import Layout from "components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/user/:id" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
