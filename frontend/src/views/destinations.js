import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './destinations.css'

const Destinations = (props) => {
  const { id } = useParams()

  // Sample destination data
  const destinationsData = {
    maldives: {
      name: 'Maldives',
      image: 'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1500',
      description: 'Experience tropical paradise with crystal-clear waters and luxury resorts',
      details: [
        'Best Time to Visit: November to April',
        'Average Temperature: 28-30°C (82-86°F)',
        'Main Activities: Snorkeling, Diving, Water Sports, Beach Relaxation',
        'Cuisine: Fresh seafood and coconut-based dishes',
        'Currency: Maldivian Rufiyaa (MVR)',
        'Flight Duration: 8-10 hours from major hubs',
        'Visa: Tourist visa available on arrival',
        'Duration: 5-7 days recommended'
      ],
      highlights: [
        'Overwater bungalows with direct ocean access',
        'World-class diving and snorkeling sites',
        'Private island resorts and spa treatments',
        'Traditional Dhoni boat cruises',
        'Sunset fishing and dolphin watching',
        'Water villas with glass floor viewing'
      ],
      price: '$3,500 - $8,000 per person',
      rating: 4.8
    },
    paris: {
      name: 'Paris',
      image: 'https://images.pexels.com/photos/164435/pexels-photo-164435.jpeg?auto=compress&cs=tinysrgb&w=1500',
      description: 'Discover the City of Light with iconic landmarks and world-class culture',
      details: [
        'Best Time to Visit: April to June, September to October',
        'Average Temperature: 12-20°C (54-68°F)',
        'Main Activities: Museums, Sightseeing, Fine Dining, Shopping',
        'Cuisine: French classical and contemporary cuisine',
        'Currency: Euro (EUR)',
        'Flight Duration: 7-8 hours from North America',
        'Visa: Schengen visa required (check your country)',
        'Duration: 5-7 days recommended'
      ],
      highlights: [
        'Eiffel Tower and Arc de Triomphe',
        'Louvre Museum and Musée d\'Orsay',
        'Seine River cruises and boat tours',
        'Historic neighborhoods: Montmartre, Le Marais',
        'World-class restaurants and Michelin-starred dining',
        'Palace of Versailles day trip'
      ],
      price: '$2,000 - $5,000 per person',
      rating: 4.7
    },
    tokyo: {
      name: 'Tokyo',
      image: 'https://images.pexels.com/photos/5608202/pexels-photo-5608202.jpeg?auto=compress&cs=tinysrgb&w=1500',
      description: 'Immerse yourself in a blend of ancient tradition and cutting-edge modernity',
      details: [
        'Best Time to Visit: March to May, September to November',
        'Average Temperature: 10-25°C (50-77°F)',
        'Main Activities: Temple Visits, Technology Exploration, Shopping, Dining',
        'Cuisine: Sushi, Ramen, Tempura, and traditional Japanese',
        'Currency: Japanese Yen (JPY)',
        'Flight Duration: 11-13 hours from North America',
        'Visa: Visa-free for 90 days (most nationalities)',
        'Duration: 5-7 days recommended'
      ],
      highlights: [
        'Senso-ji Temple and historic districts',
        'Modern technology hubs: Akihabara, Shibuya',
        'Mount Fuji day excursion',
        'Traditional tea ceremonies',
        'Anime and pop culture experiences',
        'Michelin-starred restaurants and street food markets'
      ],
      price: '$1,800 - $4,500 per person',
      rating: 4.9
    }
  }

  // Get destination from URL or show all
  const currentDestination = id ? destinationsData[id] : null
  const allDestinations = Object.entries(destinationsData).map(([key, value]) => ({
    id: key,
    ...value
  }))

  return (
    <div className="destinations-container1">
      <Helmet>
        <title>{currentDestination ? currentDestination.name : 'Destinations'} - TripCrafters</title>
        <meta property="og:title" content={currentDestination ? currentDestination.name : 'Destinations'} />
      </Helmet>
      <Navigation></Navigation>
      <div className="destinations-container2">
        <div className="destinations-container3">
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

      {currentDestination ? (
        // Single Destination Detail View
        <section className="destination-detail">
          <div className="destination-hero">
            <div
              role="img"
              aria-label={currentDestination.name}
              className="destination-hero-image"
              style={{ backgroundImage: `url(${currentDestination.image})` }}
            ></div>
            <div className="destination-hero-overlay">
              <h1 className="destination-title">{currentDestination.name}</h1>
              <p className="destination-tagline">{currentDestination.description}</p>
            </div>
          </div>

          <div className="destination-content">
            <div className="destination-main">
              <div className="destination-section">
                <h2 className="section-heading">Overview</h2>
                <div className="destination-overview">
                  <div className="overview-item">
                    <span className="overview-label">Price Range:</span>
                    <span className="overview-value">{currentDestination.price}</span>
                  </div>
                  <div className="overview-item">
                    <span className="overview-label">Rating:</span>
                    <span className="overview-value">★ {currentDestination.rating}</span>
                  </div>
                </div>
              </div>

              <div className="destination-section">
                <h2 className="section-heading">Key Details</h2>
                <ul className="details-list">
                  {currentDestination.details.map((detail, idx) => (
                    <li key={idx} className="detail-item">{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="destination-section">
                <h2 className="section-heading">Highlights</h2>
                <div className="highlights-grid">
                  {currentDestination.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-card">
                      <svg
                        className="highlight-icon"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
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
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="destination-cta">
                <button className="btn-primary btn-lg btn">
                  Book This Destination
                </button>
                <button className="btn-outline btn-lg btn">
                  Contact Travel Manager
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // All Destinations Grid View
        <section className="destinations-grid-section">
          <div className="destinations-section-header">
            <h1 className="destinations-page-title">Explore Our Destinations</h1>
            <p className="destinations-page-subtitle">
              Discover carefully curated destinations with expert local partnerships
            </p>
          </div>

          <div className="destinations-grid">
            {allDestinations.map((destination) => (
              <a
                key={destination.id}
                href={`/destinations/${destination.id}`}
                className="destination-card"
              >
                <div
                  className="destination-card-image"
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                <div className="destination-card-content">
                  <h3 className="destination-card-title">{destination.name}</h3>
                  <p className="destination-card-description">
                    {destination.description}
                  </p>
                  <div className="destination-card-footer">
                    <span className="destination-card-price">{destination.price}</span>
                    <span className="destination-card-rating">★ {destination.rating}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      <Footer></Footer>
    </div>
  )
}

export default Destinations
