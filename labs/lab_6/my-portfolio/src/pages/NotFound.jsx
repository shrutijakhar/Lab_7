// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="text-center py-5" aria-labelledby="notfound-heading">
      <div className="container">
        <h1 id="notfound-heading">404 — Page not found</h1>
        <p className="lead">We couldn't find the page you're looking for.</p>
        <Link to="/" className="btn btn-outline-primary">Return Home</Link>
      </div>
    </section>
  );
}
