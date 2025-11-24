import React, { useState } from 'react'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './signup.css'

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    console.log('Sign Up Form:', formData)
    setSubmitted(true)
    setTimeout(() => {
      alert('Account created successfully! Welcome to TripCrafters.')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreedToTerms: false
      })
      setSubmitted(false)
    }, 1500)
  }

  return (
    <div className="signup-container1">
      <Helmet>
        <title>Sign Up - TripCrafters</title>
        <meta property="og:title" content="Sign Up - TripCrafters" />
      </Helmet>
      <Navigation></Navigation>
      <div className="signup-container2">
        <div className="signup-container3">
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

      <section className="signup-section">
        <div className="signup-container">
          <div className="signup-benefits">
            <h2>Join TripCrafters Today</h2>
            <ul className="benefits-list">
              <li>
                <span className="benefit-icon">🌍</span>
                <div>
                  <h3>Explore 50+ Destinations</h3>
                  <p>Access our curated collection of travel experiences</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">💰</span>
                <div>
                  <h3>Exclusive Member Prices</h3>
                  <p>Save up to 30% on tours and accommodations</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">✈️</span>
                <div>
                  <h3>Custom Trip Planning</h3>
                  <p>Work with our experts to design your perfect trip</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">🎁</span>
                <div>
                  <h3>Loyalty Rewards</h3>
                  <p>Earn points on every booking and redeem them</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="signup-card">
            <div className="signup-header">
              <h1 className="signup-title">Create Your Account</h1>
              <p className="signup-subtitle">Start planning your next adventure</p>
            </div>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h2>Welcome to TripCrafters!</h2>
                <p>Your account has been created successfully.</p>
              </div>
            ) : (
              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                      placeholder="John"
                    />
                    {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`form-input ${errors.lastName ? 'error' : ''}`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="••••••••"
                  />
                  {errors.password && <span className="error-text">{errors.password}</span>}
                  <p className="password-hint">At least 8 characters</p>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                    placeholder="••••••••"
                  />
                  {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                </div>

                <div className="form-group">
                  <label className={`checkbox-label ${errors.agreedToTerms ? 'error' : ''}`}>
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleChange}
                    />
                    <span>I agree to the <a href="#terms">Terms and Conditions</a> and <a href="#privacy">Privacy Policy</a></span>
                  </label>
                  {errors.agreedToTerms && <span className="error-text">{errors.agreedToTerms}</span>}
                </div>

                <button type="submit" className="btn-primary btn-lg btn signup-btn">
                  Create Account
                </button>

                <div className="signup-divider">
                  <span>OR</span>
                </div>

                <div className="social-signup">
                  <button type="button" className="social-btn google-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Google</span>
                  </button>
                  <button type="button" className="social-btn facebook-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </button>
                </div>
              </form>
            )}

            <div className="signup-footer">
              <p>Already have an account? <a href="/signin" className="signin-link">Sign in here</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default SignUp
