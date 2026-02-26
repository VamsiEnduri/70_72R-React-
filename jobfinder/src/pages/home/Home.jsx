import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Find Your Dream Job. Hire the Best Talent.</h1>
        <p>
          JobHunt connects skilled job seekers with top recruiters.
          Post jobs, explore opportunities, and build your future — all in one place.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Find Jobs</button>
          <button className="btn-secondary">Post a Job</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>For Job Seekers</h3>
          <p>
            Browse jobs by role, apply instantly, track your applications,
            and get hired faster.
          </p>
        </div>

        <div className="feature-card">
          <h3>For Recruiters</h3>
          <p>
            Post jobs, manage applications, shortlist candidates,
            and hire top talent easily.
          </p>
        </div>

        <div className="feature-card">
          <h3>Smart Hiring</h3>
          <p>
            Simple dashboards, real-time updates,
            and smooth communication between recruiters and candidates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;