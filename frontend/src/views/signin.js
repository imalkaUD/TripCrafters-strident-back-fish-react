import React, { useState } from 'react'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import { FaGoogle, FaFacebookF, FaMapMarkerAlt, FaSave, FaPlane, FaHandshake } from 'react-icons/fa'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './signin.css'

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

const SignIn = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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

    // Validate
    if (!formData.email || !formData.password) {
      setErrors({ form: 'Please provide email and password' })
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Sign in failed')
      }

      // Save token and user info to localStorage
      localStorage.setItem('authToken', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      if (formData.rememberMe) {
        localStorage.setItem('rememberMe', 'true')
      }

      setSubmitted(true)
      setTimeout(() => {
        // Redirect to home or dashboard
        window.location.href = '/'
      }, 1500)
    } catch (error) {
      setErrors({ form: error.message })
      setLoading(false)
    }
  }

  return (
    <div className="signin-container1">
      <Helmet>
        <title>Sign In - TripCrafters</title>
        <meta property="og:title" content="Sign In - TripCrafters" />
      </Helmet>
      <Navigation></Navigation>
      <div className="signin-container2">
        <div className="signin-container3">
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

      <section className="signin-section">
        <div className="signin-container">
          <div className="signin-card">
            <div className="signin-header">
              <h1 className="signin-title">Welcome Back</h1>
              <p className="signin-subtitle">Sign in to your TripCrafters account</p>
            </div>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h2>Sign In Successful!</h2>
                <p>Redirecting you to your dashboard...</p>
              </div>
            ) : (
              <form className="signin-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="••••••••"
                  />
                </div>

                <div className="form-options">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <span>Remember me</span>
                  </label>
                  <a href="#forgot" className="forgot-link">Forgot password?</a>
                </div>

                {errors.form && <div className="form-error-banner">{errors.form}</div>}

                <button 
                  type="submit" 
                  className="btn-primary btn-lg btn signin-btn"
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>

                <div className="signin-divider">
                  <span>OR</span>
                </div>

                <div className="social-signin">
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

            <div className="signin-footer">
              <p>Don't have an account? <a href="/signup" className="signup-link">Create one</a></p>
            </div>
          </div>

          <div className="signin-benefits">
            <h2>Why Sign In?</h2>
            <ul className="benefits-list">
              <li>
                <span className="benefit-icon"><FaMapMarkerAlt size={32} color="#16a34a" /></span>
                <div>
                  <h3>Track Your Trips</h3>
                  <p>View all your bookings and itineraries in one place</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon"><FaSave size={32} color="#16a34a" /></span>
                <div>
                  <h3>Save Preferences</h3>
                  <p>Store your travel preferences for faster planning</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon"><FaPlane size={32} color="#16a34a" /></span>
                <div>
                  <h3>Exclusive Offers</h3>
                  <p>Get member-only deals and early access to new tours</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon"><FaHandshake size={32} color="#16a34a" /></span>
                <div>
                  <h3>Dedicated Support</h3>
                  <p>Priority support from our travel experts</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default SignIn
