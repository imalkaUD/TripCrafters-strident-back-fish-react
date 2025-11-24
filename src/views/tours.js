import React from 'react'
import { useParams } from 'react-router-dom'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './tours.css'

const Tours = (props) => {
  const { id } = useParams()

  // Sample tour data
  const toursData = {
    'maldives-luxury': {
      name: 'Maldives Luxury Escape',
      image: 'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1500',
      destination: 'Maldives',
      duration: '7 Days',
      groupSize: 'Up to 12 people',
      description: 'Experience ultimate luxury in overwater bungalows with world-class diving',
      price: '$5,500 - $8,000 per person',
      rating: 4.9,
      included: [
        'Luxury overwater villa with private pool',
        'All-inclusive meals at award-winning restaurants',
        'Guided diving and snorkeling excursions',
        'Dhoni sunset cruise with champagne',
        'Spa treatments and wellness activities',
        'Airport transfers and speedboat services',
        '24/7 dedicated travel manager',
        'Travel insurance included'
      ],
      itinerary: [
        { day: 1, title: 'Arrival & Check-in', description: 'Arrive at Velana International Airport. Private speedboat transfer to resort. Evening check-in and welcome dinner.' },
        { day: 2, title: 'Diving Adventure', description: 'Professional diving certification course or guided diving at famous reef sites. Explore vibrant marine life.' },
        { day: 3, title: 'Island Exploration', description: 'Visit local island communities. Experience Maldivian culture and cuisine. Snorkeling at house reef.' },
        { day: 4, title: 'Water Sports & Relaxation', description: 'Try paddleboarding, jet skiing, or kayaking. Afternoon spa treatment and beach relaxation.' },
        { day: 5, title: 'Sunset Cruise', description: 'Evening Dhoni boat cruise with dolphins and sunset views. Gourmet dinner on board.' },
        { day: 6, title: 'Adventure Day', description: 'Deep-sea fishing or reef exploration. Visit famous sandbank for swimming and snorkeling.' },
        { day: 7, title: 'Departure', description: 'Leisurely breakfast. Resort checkout and transfer to airport. Depart with unforgettable memories.' }
      ],
      highlights: [
        'Crystal-clear turquoise waters',
        'Luxury overwater accommodations',
        'World-class diving sites',
        'Vibrant coral reefs',
        'Sunset dolphin watching',
        'Michelin-inspired dining'
      ]
    },
    'paris-cultural': {
      name: 'Paris Cultural Journey',
      image: 'https://images.pexels.com/photos/164435/pexels-photo-164435.jpeg?auto=compress&cs=tinysrgb&w=1500',
      destination: 'Paris',
      duration: '5 Days',
      groupSize: 'Up to 8 people',
      description: 'Immerse yourself in art, culture, and world-class cuisine',
      price: '$2,500 - $4,200 per person',
      rating: 4.8,
      included: [
        '4-star hotel in central Paris (Latin Quarter)',
        'Daily breakfast',
        'Guided museum tours (Louvre, Musée d\'Orsay, Picasso)',
        'Eiffel Tower and Arc de Triomphe access',
        'Seine River cruise with dinner',
        'Wine and cheese tasting experience',
        'Michelin-starred restaurant dinner',
        'Expert art historian guide throughout'
      ],
      itinerary: [
        { day: 1, title: 'Arrival & Orientation', description: 'Welcome at airport. Hotel check-in. Evening walk through charming streets of Le Marais.' },
        { day: 2, title: 'Museum Marathon', description: 'Full day at the Louvre with expert guide. See Mona Lisa, Venus de Milo, and masterpieces. Lunch at café.' },
        { day: 3, title: 'Impressionist Art', description: 'Visit Musée d\'Orsay. Explore Impressionist and Post-Impressionist collections. Wine and cheese tasting.' },
        { day: 4, title: 'Iconic Landmarks', description: 'Climb Eiffel Tower at sunset. Visit Arc de Triomphe. Evening Seine River dinner cruise.' },
        { day: 5, title: 'Art & Departure', description: 'Picasso Museum visit. Montmartre exploration and artist district. Lunch before airport transfer.' }
      ],
      highlights: [
        'Louvre Museum masterpieces',
        'Eiffel Tower at sunset',
        'Seine River dinner cruise',
        'Michelin-starred dining',
        'Impressionist art treasures',
        'Charming Parisian neighborhoods'
      ]
    },
    'tokyo-adventure': {
      name: 'Tokyo Modern & Traditional',
      image: 'https://images.pexels.com/photos/5608202/pexels-photo-5608202.jpeg?auto=compress&cs=tinysrgb&w=1500',
      destination: 'Tokyo',
      duration: '6 Days',
      groupSize: 'Up to 10 people',
      description: 'Discover the perfect blend of ancient temples and cutting-edge technology',
      price: '$2,200 - $3,800 per person',
      rating: 4.9,
      included: [
        'Luxury 4-star hotel in Shibuya',
        'Daily breakfast and 3 dinners',
        'Private English-speaking guide for all days',
        'JR Pass for unlimited train travel',
        'Temple and shrine visits with monk blessing',
        'Sumo wrestling experience',
        'Traditional tea ceremony',
        'Akihabara technology tour',
        'Mount Fuji day trip'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Tokyo', description: 'Welcome at Narita Airport. Hotel check-in in Shibuya. Evening exploration of Shibuya Crossing and neon streets.' },
        { day: 2, title: 'Traditional Tokyo', description: 'Visit Senso-ji Temple and Tsukiji Market. Traditional tea ceremony. Sumo wrestling training center visit.' },
        { day: 3, title: 'Tech & Modern Culture', description: 'Akihabara technology hub exploration. Anime museums and pop culture centers. Robot restaurant show.' },
        { day: 4, title: 'Mount Fuji Expedition', description: 'Day trip to Mount Fuji. Visit Hakone and Lake Ashi. Hot spring (onsen) experience.' },
        { day: 5, title: 'Art & Gardens', description: 'Metropolitan Museum of Art visit. Meiji Shrine and serene gardens. Ryoten kaiseki dinner.' },
        { day: 6, title: 'Shopping & Departure', description: 'Ginza luxury shopping district. Final meals and airport transfer. Depart with cultural memories.' }
      ],
      highlights: [
        'Ancient temples and shrines',
        'Cutting-edge technology',
        'Mount Fuji views',
        'Traditional ceremonies',
        'World-famous restaurants',
        'Vibrant pop culture scene'
      ]
    }
  }

  // Get tour from URL or show all
  const currentTour = id ? toursData[id] : null
  const allTours = Object.entries(toursData).map(([key, value]) => ({
    id: key,
    ...value
  }))

  return (
    <div className="tours-container1">
      <Helmet>
        <title>{currentTour ? currentTour.name : 'Tours'} - TripCrafters</title>
        <meta property="og:title" content={currentTour ? currentTour.name : 'Tours'} />
      </Helmet>
      <Navigation></Navigation>
      <div className="tours-container2">
        <div className="tours-container3">
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

      {currentTour ? (
        // Single Tour Detail View
        <section className="tour-detail">
          <div className="tour-hero">
            <div
              role="img"
              aria-label={currentTour.name}
              className="tour-hero-image"
              style={{ backgroundImage: `url(${currentTour.image})` }}
            ></div>
            <div className="tour-hero-overlay">
              <h1 className="tour-title">{currentTour.name}</h1>
              <p className="tour-tagline">{currentTour.description}</p>
            </div>
          </div>

          <div className="tour-content">
            <div className="tour-main">
              <div className="tour-section">
                <h2 className="section-heading">Tour Overview</h2>
                <div className="tour-overview">
                  <div className="overview-item">
                    <span className="overview-label">Duration</span>
                    <span className="overview-value">{currentTour.duration}</span>
                  </div>
                  <div className="overview-item">
                    <span className="overview-label">Group Size</span>
                    <span className="overview-value">{currentTour.groupSize}</span>
                  </div>
                  <div className="overview-item">
                    <span className="overview-label">Price Range</span>
                    <span className="overview-value">{currentTour.price}</span>
                  </div>
                  <div className="overview-item">
                    <span className="overview-label">Rating</span>
                    <span className="overview-value">★ {currentTour.rating}</span>
                  </div>
                </div>
              </div>

              <div className="tour-section">
                <h2 className="section-heading">What's Included</h2>
                <div className="included-grid">
                  {currentTour.included.map((item, idx) => (
                    <div key={idx} className="included-item">
                      <svg
                        className="included-icon"
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
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tour-section">
                <h2 className="section-heading">Day-by-Day Itinerary</h2>
                <div className="itinerary">
                  {currentTour.itinerary.map((day, idx) => (
                    <div key={idx} className="itinerary-day">
                      <div className="day-number">Day {day.day}</div>
                      <div className="day-content">
                        <h3 className="day-title">{day.title}</h3>
                        <p className="day-description">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tour-section">
                <h2 className="section-heading">Tour Highlights</h2>
                <div className="highlights-grid">
                  {currentTour.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-card">
                      <svg
                        className="highlight-icon"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
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
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tour-cta">
                <button className="btn-primary btn-lg btn">
                  Book This Tour
                </button>
                <button className="btn-outline btn-lg btn">
                  Request Customization
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // All Tours Grid View
        <section className="tours-grid-section">
          <div className="tours-section-header">
            <h1 className="tours-page-title">Curated Group Tours</h1>
            <p className="tours-page-subtitle">
              Expert-planned itineraries with vetted local partners and dedicated support
            </p>
          </div>

          <div className="tours-grid">
            {allTours.map((tour) => (
              <a
                key={tour.id}
                href={`/tours/${tour.id}`}
                className="tour-card"
              >
                <div
                  className="tour-card-image"
                  style={{ backgroundImage: `url(${tour.image})` }}
                ></div>
                <div className="tour-card-content">
                  <h3 className="tour-card-title">{tour.name}</h3>
                  <p className="tour-card-description">
                    {tour.description}
                  </p>
                  <div className="tour-card-meta">
                    <span className="tour-card-destination">{tour.destination}</span>
                    <span className="tour-card-duration">{tour.duration}</span>
                  </div>
                  <div className="tour-card-footer">
                    <span className="tour-card-price">{tour.price}</span>
                    <span className="tour-card-rating">★ {tour.rating}</span>
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

export default Tours
