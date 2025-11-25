import React from 'react'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Travel enthusiast with 15+ years in luxury tourism and destination management.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Travel Officer',
      bio: 'Expert in curating bespoke itineraries with deep knowledge of 50+ destinations.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Partnerships',
      bio: 'Manages relationships with 500+ vetted local partners worldwide ensuring quality.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'David Park',
      role: 'Customer Experience Lead',
      bio: 'Ensures every traveler receives 24/7 support and exceptional personalized service.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ]

  const stats = [
    { number: '2,500+', label: 'Happy Travelers' },
    { number: '50+', label: 'Destinations' },
    { number: '500+', label: 'Local Partners' },
    { number: '15+', label: 'Years Experience' }
  ]

  const values = [
    {
      title: 'Authenticity',
      description: 'We believe in genuine experiences over tourist traps. Every activity is carefully vetted for authenticity.'
    },
    {
      title: 'Transparency',
      description: 'No hidden costs, no surprises. Complete clarity on pricing and what is included in every trip.'
    },
    {
      title: 'Excellence',
      description: 'We set the highest standards for service quality, partner vetting, and customer support.'
    },
    {
      title: 'Sustainability',
      description: 'We partner with eco-conscious operators and give back to local communities we work in.'
    }
  ]

  return (
    <div className="about-container1">
      <Helmet>
        <title>About Us - TripCrafters</title>
        <meta property="og:title" content="About Us - TripCrafters" />
      </Helmet>
      <Navigation></Navigation>
      <div className="about-container2">
        <div className="about-container3">
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
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About TripCrafters</h1>
          <p className="about-subtitle">
            Transforming travel dreams into expertly planned, unforgettable journeys
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story-section">
        <div className="about-container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-heading">Our Story</h2>
              <p className="story-paragraph">
                TripCrafters was founded in 2009 with a simple belief: travel should be seamless, authentic, and unforgettable. 
                Our founder Sarah Johnson traveled extensively and realized that most travel companies offered cookie-cutter packages 
                with no personal touch or transparency.
              </p>
              <p className="story-paragraph">
                We decided to change that. Today, we've grown into a team of passionate travel experts who work with 500+ carefully 
                vetted local partners across 50+ destinations worldwide. We've helped over 2,500 travelers experience the world with 
                confidence and joy.
              </p>
              <p className="story-paragraph">
                Our mission remains unchanged: create personalized, transparent, and expertly supported travel experiences that 
                exceed expectations and create lasting memories.
              </p>
            </div>
            <div className="story-image" style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3407322/pexels-photo-3407322.jpeg?auto=compress&cs=tinysrgb&w=1000)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '12px',
              minHeight: '400px'
            }}></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="about-container">
          <h2 className="section-heading">By The Numbers</h2>
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-section">
        <div className="about-container">
          <h2 className="section-heading">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team-section">
        <div className="about-container">
          <h2 className="section-heading">Meet Our Leadership Team</h2>
          <div className="team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card">
                <div
                  className="team-member-image"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="cta-content">
            <h2 className="cta-title">Join Us on an Adventure</h2>
            <p className="cta-subtitle">
              Experience the TripCrafters difference. Let our experts plan your next unforgettable journey.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary btn-lg btn">
                Start Your Journey
              </button>
              <button className="btn-outline btn-lg btn">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default About
