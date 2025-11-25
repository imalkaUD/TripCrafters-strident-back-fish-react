import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Strident Back Fish</title>
        <meta property="og:title" content="Strident Back Fish" />
        <link
          rel="canonical"
          href="https://strident-back-fish-v7ygyy.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section id="hero-section" className="hero">
        <div className="hero-left">
          <h1 className="home-hero-title hero-title">
            {' '}
            TripCrafters — Executive travel, expertly planned
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <p className="lead">
            {' '}
            Custom itineraries and small-group tours crafted with vetted local
            partners, transparent pricing, and end-to-end support from booking
            to return.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <p className="hero-subtitle">
            {' '}
            Confident, seamless journeys for busy professionals: clear
            day-by-day plans, reliable logistics, and a dedicated travel manager
            so every trip delivers on time and on promise.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="cta-stack">
            <a href="/start-planning">
              <button
                aria-label="Start planning your custom trip"
                className="btn-primary btn-lg btn"
              >
                {' '}
                Start Planning
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </a>
            <a href="/tours">
              <button
                aria-label="Browse curated tours"
                className="btn-outline btn-lg btn"
              >
                {' '}
                Browse Tours
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </a>
          </div>
          <div className="trust-row">
            <span className="trust-badge">
              <svg
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>
                {' '}
                Vetted Partners
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="trust-badge">
              <svg
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>
                {' '}
                Clear Pricing
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="trust-badge">
              <svg
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>
                {' '}
                24/7 Support
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
        <div className="hero-right">
          <div
            role="img"
            aria-label="Towering gray limestone rock formations rise dramatically from a forested gorge in a steep valley. Hundreds of pointed stone pillars stretch upward, creating a striking maze-like landscape. A modern metal suspension bridge with railings spans across the canyon, connecting the rocky formations. Lush green vegetation and trees cover the surrounding hillsides. Mountains fade into misty horizons in the background. The scene evokes a sense of adventure, natural wonder, and majestic grandeur."
            className="hero-photo"
          ></div>
          <div className="hero-card">
            <h3>What&apos;s Included</h3>
            <ul className="hero-features">
              <li>
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Custom day-by-day itineraries
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
              <li>
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Vetted local guides &amp; partners
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
              <li>
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Complete logistics management
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
              <li>
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Dedicated travel manager
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="features-section" className="features">
        <div className="features-container">
          <article
            role="region"
            aria-labelledby="feature-1-title"
            aria-describedby="feature-1-desc"
            className="feature-card"
          >
            <div className="feature-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="feature-content">
              <h3 id="feature-1-title" className="feature-title">
                Assured Expertise
              </h3>
              <p id="feature-1-desc" className="feature-description">
                {' '}
                Every itinerary is crafted with vetted local partners and
                TripCrafters' travel specialists, so you get authentic
                experiences backed by verified safety, quality, and local
                insight.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </article>
          <article
            role="region"
            aria-labelledby="feature-2-title"
            aria-describedby="feature-2-desc"
            className="feature-card"
          >
            <div className="feature-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="feature-content">
              <h3 id="feature-2-title" className="feature-title">
                Complete Itineraries
              </h3>
              <p id="feature-2-desc" className="feature-description">
                {' '}
                Clear, day-by-day plans that list flights, accommodations,
                transfers, activities, timings, and contingency
                options—presented so you can review, approve, and share with
                confidence.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </article>
          <article
            role="region"
            aria-labelledby="feature-3-title"
            aria-describedby="feature-3-desc"
            className="feature-card"
          >
            <div className="feature-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                </g>
              </svg>
            </div>
            <div className="feature-content">
              <h3 id="feature-3-title" className="feature-title">
                Executive Tools
              </h3>
              <p id="feature-3-desc" className="feature-description">
                {' '}
                Digital itineraries, calendar sync, expense-ready documentation,
                and streamlined approvals designed for busy professionals and
                decision-makers.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </article>
          <article
            role="region"
            aria-labelledby="feature-4-title"
            aria-describedby="feature-4-desc"
            className="feature-card"
          >
            <div className="feature-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 6v6l4 2"></path>
                  <circle r="10" cx="12" cy="12"></circle>
                </g>
              </svg>
            </div>
            <div className="feature-content">
              <h3 id="feature-4-title" className="feature-title">
                {' '}
                Risk-Aware Flexibility
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h3>
              <p id="feature-4-desc" className="feature-description">
                {' '}
                Clear change and cancellation policies, optional protection
                plans, and pre-vetted contingency routes so you can adapt plans
                without sacrificing security or satisfaction.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </article>
          <article
            role="region"
            aria-labelledby="feature-5-title"
            aria-describedby="feature-5-desc"
            className="feature-card"
          >
            <div className="feature-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                  <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                </g>
              </svg>
            </div>
            <div className="feature-content">
              <h3 id="feature-5-title" className="feature-title">
                {' '}
                All-Inclusive Planning
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h3>
              <p id="feature-5-desc" className="feature-description">
                {' '}
                We manage flights, stays, guided experiences, permits, and
                travel insurance, consolidating logistics into one reliable
                package and one transparent invoice.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </article>
          <article
            role="region"
            aria-labelledby="feature-6-title"
            aria-describedby="feature-6-desc"
            className="feature-card"
          >
            <div className="feature-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="feature-content">
              <h3 id="feature-6-title" className="feature-title">
                {' '}
                Fair, Transparent Pricing
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h3>
              <p id="feature-6-desc" className="feature-description">
                {' '}
                No hidden fees. We provide detailed cost breakdowns and optional
                upgrades, enabling informed decisions for budgets and corporate
                approvals.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </article>
        </div>
      </section>
      <section
        id="process-section"
        aria-labelledby="process-title"
        className="process"
      >
        <div className="process-container">
          <div className="process-intro">
            <h2 id="process-title" className="section-title">
              Our Process
            </h2>
            <p className="section-subtitle">
              Expertly Crafted, Reliably Delivered
            </p>
          </div>
          <div className="process-column milestone-column">
            <div
              role="group"
              aria-label="Discovery milestone"
              className="process-card"
            >
              <h3 className="process-card-title">Discovery</h3>
              <p className="process-card-text">
                {' '}
                We start with a focused consultation to understand objectives,
                travel preferences, budgets, and timelines. You&apos;ll meet a
                dedicated TripCrafters planner who captures every requirement
                and outlines clear next steps.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div
              role="group"
              aria-label="Custom Planning milestone"
              className="process-card"
            >
              <h3 className="process-card-title">Custom Planning</h3>
              <p className="process-card-text">
                {' '}
                Using vetted local partners and proprietary destination
                research, we design an itinerary that balances signature
                experiences with logistical efficiency.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div
              role="group"
              aria-label="Refinement &amp; Approval milestone"
              className="process-card"
            >
              <h3 className="process-card-title">Refinement &amp; Approval</h3>
              <p className="process-card-text">
                {' '}
                You review the plan and request adjustments through a single
                point of contact. We refine logistics, confirm availability, and
                present a final itinerary with fixed pricing.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="process-column operational-column">
            <div
              role="group"
              aria-label="Booking &amp; Coordination milestone"
              className="process-card"
            >
              <h3 className="process-card-title">Booking &amp; Coordination</h3>
              <p className="process-card-text">
                {' '}
                Once approved, we manage bookings end-to-end: flights, hotels,
                transfers, guides, activities, and insurance. We handle
                confirmations and special requests.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div
              role="group"
              aria-label="Real-Time Support milestone"
              className="process-card"
            >
              <h3 className="process-card-title">Real-Time Support</h3>
              <p className="process-card-text">
                {' '}
                While you travel, our 24/7 support team and local partners
                provide on-the-ground assistance. You receive a curated trip
                packet with contact details and emergency protocols.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div
              role="group"
              aria-label="Post-Trip Care milestone"
              className="process-card"
            >
              <h3 className="process-card-title">Post-Trip Care</h3>
              <p className="process-card-text">
                {' '}
                After return, we conduct a structured debrief, collect feedback,
                and reconcile any post-trip issues. Insights from your trip feed
                directly into improving future itineraries.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="onboarding-section" className="onboarding">
        <div className="steps">
          <h2 className="section-title">Start Your Trip in Four Steps</h2>
          <p className="section-subtitle">
            {' '}
            Designed for busy professionals who expect clarity and care
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="home-step1 step">
            <div className="step-number">
              <span>1</span>
            </div>
            <div className="step-copy">
              <h3 className="step-title">Choose Your Path</h3>
              <p>
                {' '}
                Select a curated itinerary or request a bespoke route built
                around your goals—leisure, culture, or corporate-friendly
                experiences.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="home-step2 step">
            <div className="step-number">
              <span>2</span>
            </div>
            <div className="step-copy">
              <h3 className="step-title">Share Your Preferences</h3>
              <p>
                {' '}
                Tell us travel dates, budget, mobility needs, and must-see
                priorities. Our planners capture precise details so every
                arrangement suits you.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="home-step3 step">
            <div className="step-number">
              <span>3</span>
            </div>
            <div className="step-copy">
              <h3 className="step-title">Confirm Your Plan</h3>
              <p>
                {' '}
                Receive a clear, itemized itinerary and transparent pricing.
                Approve online and we&apos;ll secure flights, accommodations,
                local guides, and insurance.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="home-step4 step">
            <div className="step-number">
              <span>4</span>
            </div>
            <div className="step-copy">
              <h3 className="step-title">Relax While We Manage It</h3>
              <p>
                {' '}
                From pre-departure briefings to 24/7 in-trip support with vetted
                local partners, TripCrafters handles logistics so you can focus
                on the trip.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="panel">
          <h3 className="panel-title">Ready to Begin?</h3>
          <p className="panel-text">
            {' '}
            Book a consultation or start a custom request—efficient planning,
            dependable delivery, exceptional journeys.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <a href="/contact">
            <button
              aria-label="Book a consultation"
              className="cta btn-primary btn-lg btn"
            >
              {' '}
              Book Consultation
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </button>
          </a>
          <a href="/how-it-works">
            <button
              aria-label="Request custom trip"
              className="btn-outline cta-secondary btn"
            >
              {' '}
              Request Custom Trip
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </button>
          </a>
          <div className="trust-anchors">
            <span className="trust-item">
              <svg
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>
                {' '}
                4.9/5 Rating
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="trust-item">
              <svg
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle r="6" cx="12" cy="8"></circle>
                </g>
              </svg>
              <span>
                {' '}
                Award-Winning
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
      </section>
      <section id="pricing-section" className="pricing">
        <div className="pricing-container">
          <div className="pricing-featured">
            <h2 className="section-title">Transparent Pricing, No Surprises</h2>
            <p className="pricing-intro">
              {' '}
              TripCrafters provides clear cost breakdowns for every custom trip
              and small-group tour: flights, accommodations, local guides,
              activities, transfers, and insurance. You see what&apos;s
              included, what&apos;s optional, and why each element matters.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="pricing-paths">
              <div className="pricing-path">
                <h3 className="path-name">Full-Custom</h3>
                <p className="path-price">
                  <span>
                    {' '}
                    From $3,200
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-price-unit1">/person</span>
                </p>
                <p className="path-desc">
                  End-to-end planning tailored to your goals
                </p>
              </div>
              <div className="pricing-path">
                <h3 className="path-name">Small-Group</h3>
                <p className="path-price">
                  <span>
                    {' '}
                    From $2,400
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-price-unit2">/person</span>
                </p>
                <p className="path-desc">
                  Curated tours with set departure dates
                </p>
              </div>
              <div className="pricing-path">
                <h3 className="path-name">À la Carte</h3>
                <p className="path-price">Variable</p>
                <p className="path-desc">
                  Add-ons and upgrades to existing trips
                </p>
              </div>
            </div>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="card-heading">What&apos;s Included</h3>
              <ul className="pricing-list">
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    International and domestic flights
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Premium-category stays
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Expert local guides
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Ground transfers
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3 className="card-heading">Optional Upgrades</h3>
              <ul className="pricing-list">
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Room upgrades
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Private transfers
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Exclusive experiences
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Travel insurance
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3 className="card-heading">Payment Terms</h3>
              <ul className="pricing-list">
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Secure deposit
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Flexible payment schedule
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Clear cancellation policies
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Corporate billing options
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3 className="card-heading">Why Our Pricing</h3>
              <p className="card-text">
                {' '}
                We negotiate fair rates with local operators and pass savings to
                you. Every itinerary shows supplier names, booking terms, and
                refund options. No hidden markups—only transparency.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="pricing-cta">
            <a href="/contact">
              <button
                aria-label="Request a personalized quote"
                className="btn-primary btn-lg btn"
              >
                {' '}
                Request Quote
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </a>
            <a href="/contact">
              <button
                aria-label="Speak with an advisor"
                className="btn-outline btn"
              >
                {' '}
                Speak with Advisor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </a>
          </div>
        </div>
      </section>
      <section
        id="partners-section"
        aria-label="Vetted local travel partners"
        className="partners"
      >
        <div className="partners-container">
          <div className="partners-header">
            <h2 className="section-title">Local Experts, Global Standards</h2>
            <p className="section-content">
              {' '}
              Every partner we work with is vetted against rigorous safety,
              sustainability, and service benchmarks. From licensed guides and
              boutique hotels to bespoke activity providers, our network is
              chosen for reliability, transparency, and exceptional guest care.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div
            role="region"
            aria-label="Partner spotlights"
            className="partners-carousel"
          >
            <div id="partners-carousel-wrapper" className="carousel-wrapper">
              <div className="carousel-slide active">
                <div className="home-slide-image1 slide-image"></div>
                <div className="slide-content">
                  <h3 className="slide-title">Mediterranean Excellence</h3>
                  <p className="slide-region">Greece &amp; Islands</p>
                  <p className="slide-text">
                    {' '}
                    Boutique hotels, certified guides, and curated cultural
                    experiences across Santorini, Mykonos, and Athens.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="carousel-slide">
                <div className="home-slide-image2 slide-image"></div>
                <div className="slide-content">
                  <h3 className="slide-title">Pacific Paradise</h3>
                  <p className="slide-region">French Polynesia</p>
                  <p className="slide-text">
                    {' '}
                    Exclusive resorts and marine conservation partners
                    delivering premium island experiences.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="carousel-slide">
                <div className="home-slide-image3 slide-image"></div>
                <div className="slide-content">
                  <h3 className="slide-title">Coastal Mastery</h3>
                  <p className="slide-region">Mediterranean Coast</p>
                  <p className="slide-text">
                    {' '}
                    Luxury accommodations and local culinary experts for
                    authentic coastal journeys.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button
                aria-label="Previous partner spotlight"
                className="carousel-btn carousel-prev"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="Next partner spotlight"
                className="carousel-next carousel-btn"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            role="list"
            aria-label="Partner directory"
            className="partners-masonry"
          >
            <div role="listitem" className="partner-card">
              <div className="partner-logo">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="partner-info">
                <h3 className="partner-name">Athens Heritage Tours</h3>
                <p className="partner-region">Athens, Greece</p>
                <p className="partner-desc">
                  {' '}
                  Licensed archaeological guides and museum access specialists
                  with 20+ years curating cultural immersion.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div role="listitem" className="partner-card">
              <div className="partner-logo">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle r="6" cx="12" cy="8"></circle>
                  </g>
                </svg>
              </div>
              <div className="partner-info">
                <h3 className="partner-name">Island Essence Hospitality</h3>
                <p className="partner-region">Santorini, Greece</p>
                <p className="partner-desc">
                  {' '}
                  Award-winning boutique properties and sunset experiences with
                  sustainability certifications.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div role="listitem" className="partner-card">
              <div className="partner-logo">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="partner-info">
                <h3 className="partner-name">Polynesian Voyages</h3>
                <p className="partner-region">Bora Bora, French Polynesia</p>
                <p className="partner-desc">
                  {' '}
                  Marine conservation tours and overwater luxury accommodations
                  with 5-star safety ratings.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div role="listitem" className="partner-card">
              <div className="partner-logo">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="partner-info">
                <h3 className="partner-name">Coastal Discovery Group</h3>
                <p className="partner-region">Amalfi Coast, Italy</p>
                <p className="partner-desc">
                  {' '}
                  Culinary tours, private yacht charters, and hillside villa
                  accommodations with local family partnerships.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div role="listitem" className="partner-card">
              <div className="partner-logo">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="partner-info">
                <h3 className="partner-name">Alpine Guides Collective</h3>
                <p className="partner-region">Swiss Alps</p>
                <p className="partner-desc">
                  {' '}
                  Mountain safety experts and luxury chalet operators delivering
                  high-altitude experiences year-round.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div role="listitem" className="partner-card">
              <div className="partner-logo">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                    <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                  </g>
                </svg>
              </div>
              <div className="partner-info">
                <h3 className="partner-name">Caribbean Concierge</h3>
                <p className="partner-region">Caribbean Islands</p>
                <p className="partner-desc">
                  {' '}
                  Island-hopping logistics and eco-certified resorts with direct
                  partnerships across 15 destinations.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="partners-cta">
            <a href="/about">
              <button
                aria-label="View all partners"
                className="btn-primary btn-lg btn"
              >
                {' '}
                View All Partners
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </a>
            <a href="/contact">
              <button
                aria-label="Request partner credentials"
                className="btn-outline btn"
              >
                {' '}
                Request Credentials
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </a>
          </div>
        </div>
      </section>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<style>
        @keyframes cardReveal {to {opacity: 1;
transform: translateY(0);}}@keyframes fadeSlideIn {to {opacity: 1;
transform: translateY(0);}}@keyframes fade-slide {from {opacity: 0;
transform: translateY(6px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container6">
        <div className="home-container7">
          <Script
            html={`<script defer data-name="partners-carousel">
(function(){
  const carouselWrapper = document.getElementById("partners-carousel-wrapper")
  const slides = carouselWrapper.querySelectorAll(".carousel-slide")
  const prevBtn = document.querySelector(".carousel-prev")
  const nextBtn = document.querySelector(".carousel-next")

  let currentSlide = 0
  const totalSlides = slides.length

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index)
    })
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides
    showSlide(currentSlide)
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    showSlide(currentSlide)
  }

  nextBtn.addEventListener("click", nextSlide)
  prevBtn.addEventListener("click", prevSlide)

  // Auto-advance carousel every 5 seconds
  setInterval(nextSlide, 5000)
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default Home
