import React, { useState } from 'react'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import { FaGoogle, FaFacebookF, FaGlobe, FaTag, FaPlane, FaGift } from 'react-icons/fa'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './signup.css'

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

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
  const [loading, setLoading] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Sign up failed')
      }

      // Save token to localStorage
      localStorage.setItem('authToken', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      setSubmitted(true)
      setTimeout(() => {
        // Redirect to start planning or home
        window.location.href = '/start-planning'
      }, 1500)
    } catch (error) {
      setErrors({ form: error.message })
      setLoading(false)
    }
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
                <span className="benefit-icon"><FaGlobe size={32} color="#16a34a" /></span>
                <div>
                  <h3>Explore 50+ Destinations</h3>
                  <p>Access our curated collection of travel experiences</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon"><FaTag size={32} color="#16a34a" /></span>
                <div>
                  <h3>Exclusive Member Prices</h3>
                  <p>Save up to 30% on tours and accommodations</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon"><FaPlane size={32} color="#16a34a" /></span>
                <div>
                  <h3>Custom Trip Planning</h3>
                  <p>Work with our experts to design your perfect trip</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon"><FaGift size={32} color="#16a34a" /></span>
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

                {errors.form && <div className="form-error-banner">{errors.form}</div>}

                <button 
                  type="submit" 
                  className="btn-primary btn-lg btn signup-btn"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                  Create Account
                </button>

                <div className="signup-divider">
                  <span>OR</span>
                </div>

                <div className="social-signup">
                  <button type="button" className="social-btn google-btn">
                    <FaGoogle size={20} />
                    <span>Google</span>
                  </button>
                  <button type="button" className="social-btn facebook-btn">
                    <FaFacebookF size={20} />
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
