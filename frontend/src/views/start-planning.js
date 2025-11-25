import React, { useState, useEffect } from 'react'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './start-planning.css'

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

const StartPlanning = (props) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [authToken, setAuthToken] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    destination: '',
    duration: '',
    travelers: '',
    budget: '',
    interests: [],
    travelDate: '',
    name: '',
    email: '',
    phone: ''
  })

  const interests = [
    'Adventure & Outdoor',
    'Cultural & Historical',
    'Beach & Relaxation',
    'Food & Wine',
    'Art & Museums',
    'Wildlife & Nature',
    'Shopping & Fashion',
    'Nightlife & Entertainment'
  ]

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('authToken')
    if (!token) {
      // Redirect to signup if not authenticated
      window.location.href = '/signup'
    } else {
      setAuthToken(token)
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!authToken) {
      setError('Please sign in to submit your trip plan')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Validate form data
      if (!formData.destination || !formData.duration || !formData.travelers || !formData.budget) {
        setError('Please fill in all trip details')
        setLoading(false)
        return
      }

      if (formData.interests.length === 0) {
        setError('Please select at least one interest')
        setLoading(false)
        return
      }

      if (!formData.travelDate || !formData.name || !formData.email || !formData.phone) {
        setError('Please fill in all contact information')
        setLoading(false)
        return
      }

      // Extract numeric value from duration (e.g., "3-5" -> 5)
      const durationValue = formData.duration.split('-')[1] || formData.duration.split('+')[0] || formData.duration
      const travelerValue = formData.travelers === '' ? 1 : parseInt(formData.travelers)

      const tripPlanData = {
        tripDetails: {
          destination: formData.destination,
          duration: parseInt(durationValue) || 5,
          numberOfTravelers: travelerValue
        },
        preferences: {
          interests: formData.interests,
          budget: formData.budget
        },
        schedule: {
          startDate: formData.travelDate
        },
        contactInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        }
      }

      const response = await fetch(`${API_URL}/tripplans`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(tripPlanData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to save trip plan')
      }

      // Show success message
      alert('Thank you! Your trip plan has been saved successfully. Our team will contact you shortly.')
      
      // Reset form
      setCurrentStep(1)
      setFormData({
        destination: '',
        duration: '',
        travelers: '',
        budget: '',
        interests: [],
        travelDate: '',
        name: '',
        email: '',
        phone: ''
      })
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className="start-planning-container1">
      <Helmet>
        <title>Start Planning Your Trip - TripCrafters</title>
        <meta property="og:title" content="Start Planning Your Trip - TripCrafters" />
      </Helmet>
      <Navigation></Navigation>
      <div className="start-planning-container2">
        <div className="start-planning-container3">
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
      <section className="planning-hero">
        <div className="planning-hero-content">
          <h1 className="planning-title">Plan Your Dream Trip</h1>
          <p className="planning-subtitle">
            Let our experts create a personalized itinerary just for you
          </p>
        </div>
      </section>

      {/* Planning Form Section */}
      <section className="planning-form-section">
        <div className="planning-container">
          <div className="form-wrapper">
            {/* Progress Bar */}
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
              <div className="progress-steps">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`progress-step ${step === currentStep ? 'active' : ''} ${step < currentStep ? 'completed' : ''}`}
                  >
                    <span className="step-number">{step}</span>
                    <span className="step-label">
                      {step === 1 && 'Trip Details'}
                      {step === 2 && 'Preferences'}
                      {step === 3 && 'Schedule'}
                      {step === 4 && 'Contact'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="planning-form">
              {error && (
                <div className="error-banner" style={{ backgroundColor: '#fee', borderLeft: '4px solid #f00', padding: '12px', marginBottom: '20px', borderRadius: '4px', color: '#c00' }}>
                  {error}
                </div>
              )}

              {/* Step 1: Trip Details */}
              {currentStep === 1 && (
                <div className="form-step active">
                  <h2 className="step-title">Where and How Long?</h2>
                  <p className="step-description">Tell us about your dream destination and trip duration</p>

                  <div className="form-group">
                    <label htmlFor="destination" className="form-label">Destination (or Region) *</label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="e.g., Paris, Bali, Tokyo, Maldives"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="duration" className="form-label">Duration *</label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select duration</option>
                      <option value="3-5">3-5 days</option>
                      <option value="6-8">6-8 days</option>
                      <option value="9-12">9-12 days</option>
                      <option value="13+">13+ days</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="travelers" className="form-label">Number of Travelers *</label>
                    <select
                      id="travelers"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select number</option>
                      <option value="1">Just me</option>
                      <option value="2">2 people</option>
                      <option value="3-4">3-4 people</option>
                      <option value="5-8">5-8 people</option>
                      <option value="9+">9+ people</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Preferences */}
              {currentStep === 2 && (
                <div className="form-step active">
                  <h2 className="step-title">What Are Your Interests?</h2>
                  <p className="step-description">Select activities and experiences you'd like to enjoy</p>

                  <div className="interests-grid">
                    {interests.map((interest) => (
                      <label key={interest} className="interest-checkbox">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                        />
                        <span className="interest-label">{interest}</span>
                      </label>
                    ))}
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget" className="form-label">Budget Per Person *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select budget range</option>
                      <option value="Budget">Budget ($2,000 - $5,000)</option>
                      <option value="Mid-Range">Mid-Range ($5,000 - $10,000)</option>
                      <option value="Luxury">Luxury ($10,000+)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Schedule */}
              {currentStep === 3 && (
                <div className="form-step active">
                  <h2 className="step-title">When Do You Want to Travel?</h2>
                  <p className="step-description">Help us find the perfect time for your trip</p>

                  <div className="form-group">
                    <label htmlFor="travelDate" className="form-label">Preferred Travel Date *</label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="schedule-info">
                    <div className="info-card">
                      <h3>Flexible Schedule?</h3>
                      <p>If you're flexible with dates, we can help you find the best time to visit with optimal weather and fewer crowds.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <div className="form-step active">
                  <h2 className="step-title">Your Contact Information</h2>
                  <p className="step-description">How can our team reach you?</p>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="form-navigation">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className={`btn btn-outline ${currentStep === 1 ? 'disabled' : ''}`}
                  disabled={currentStep === 1}
                >
                  Back
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn btn-primary"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit & Get Started'}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="planning-info-sidebar">
            <div className="info-box">
              <h3>What Happens Next?</h3>
              <ol className="info-list">
                <li>
                  <span className="info-number">1</span>
                  <div>
                    <strong>Team Review</strong>
                    <p>Our experts review your preferences</p>
                  </div>
                </li>
                <li>
                  <span className="info-number">2</span>
                  <div>
                    <strong>Initial Consultation</strong>
                    <p>We call to discuss your vision in detail</p>
                  </div>
                </li>
                <li>
                  <span className="info-number">3</span>
                  <div>
                    <strong>Custom Itinerary</strong>
                    <p>We craft a personalized itinerary</p>
                  </div>
                </li>
                <li>
                  <span className="info-number">4</span>
                  <div>
                    <strong>Book & Enjoy</strong>
                    <p>Confirm and start your adventure!</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="info-box">
              <h3>Why Choose Us?</h3>
              <ul className="benefits-list">
                <li>✓ Personalized itineraries</li>
                <li>✓ Vetted local partners</li>
                <li>✓ Transparent pricing</li>
                <li>✓ 24/7 travel support</li>
                <li>✓ Hassle-free booking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default StartPlanning
