import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

/**
 * Root of react site
 *
 * Imports Helmet provider for the page head
 * And App which defines the content and navigation
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);