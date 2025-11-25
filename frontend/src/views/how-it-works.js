import React from 'react'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './how-it-works.css'

const HowItWorks = (props) => {
  const steps = [
    {
      number: 1,
      title: 'Tell Us Your Vision',
      description: 'Share your travel dreams, preferences, budget, and any special requirements. Our team listens and learns what makes your ideal journey.',
      icon: '💭'
    },
    {
      number: 2,
      title: 'Expert Planning',
      description: 'Our travel experts craft a custom itinerary tailored to your interests. We leverage vetted local partners for authentic experiences.',
      icon: '📋'
    },
    {
      number: 3,
      title: 'Transparent Pricing',
      description: 'Get detailed pricing breakdown with no hidden fees. See exactly where your investment goes and compare options.',
      icon: '💰'
    },
    {
      number: 4,
      title: 'Book & Prepare',
      description: 'Confirm your itinerary and complete booking. We provide detailed preparation guides, packing lists, and travel documentation.',
      icon: '✈️'
    },
    {
      number: 5,
      title: '24/7 Support',
      description: 'Get a dedicated travel manager available round the clock. Any changes or emergencies? We handle it instantly.',
      icon: '🎧'
    },
    {
      number: 6,
      title: 'Enjoy & Remember',
      description: 'Experience your dream journey with confidence. We stay connected to ensure everything runs smoothly from start to finish.',
      icon: '🎉'
    }
  ]

  const benefits = [
    {
      title: 'Vetted Local Partners',
      description: 'Every hotel, guide, and activity is hand-picked and verified for quality and authenticity.',
      icon: '✓'
    },
    {
      title: 'Transparent Pricing',
      description: 'No surprises. Complete breakdown of all costs with no hidden fees anywhere in your itinerary.',
      icon: '✓'
    },
    {
      title: 'Dedicated Manager',
      description: 'A real person you can call 24/7 to handle changes, emergencies, or questions anytime during your trip.',
      icon: '✓'
    },
    {
      title: 'Custom Itineraries',
      description: 'Trips tailored to your exact preferences, pace, and interests—not one-size-fits-all packages.',
      icon: '✓'
    },
    {
      title: 'Seamless Logistics',
      description: 'We handle flights, transfers, accommodations, activities, and documentation. You just pack and enjoy.',
      icon: '✓'
    },
    {
      title: 'Expert Curation',
      description: 'Years of experience finding the best restaurants, hidden gems, and authentic local experiences worldwide.',
      icon: '✓'
    }
  ]

  return (
    <div className="how-it-works-container1">
      <Helmet>
        <title>How It Works - TripCrafters</title>
        <meta property="og:title" content="How It Works - TripCrafters" />
      </Helmet>
      <Navigation></Navigation>
      <div className="how-it-works-container2">
        <div className="how-it-works-container3">
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

      {/* Hero Section */}
      <section className="how-it-works-hero">
        <div className="how-it-works-hero-content">
          <h1 className="how-it-works-title">How It Works</h1>
          <p className="how-it-works-subtitle">
            Our simple, transparent process turns your travel dreams into reality
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <h2 className="section-heading">Six Simple Steps</h2>
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Timeline Visual */}
          <div className="steps-timeline">
            <div className="timeline-line"></div>
            <div className="timeline-steps">
              {steps.map((step, idx) => (
                <div key={idx} className="timeline-dot"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="how-it-works-container">
          <h2 className="section-heading">Why Choose TripCrafters</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="how-it-works-cta-section">
        <div className="how-it-works-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Plan Your Dream Trip?</h2>
            <p className="cta-subtitle">
              Start your journey with TripCrafters today. Our team is ready to create unforgettable memories.
            </p>
            <div className="cta-buttons">
              <a href="/start-planning">
                <button className="btn-primary btn-lg btn">
                  Start Planning Now
                </button>
              </a>
              <a href="/tours">
                <button className="btn-outline btn-lg btn">
                  Browse Curated Tours
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default HowItWorks
