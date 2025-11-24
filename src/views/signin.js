import React, { useState } from 'react'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './signin.css'

const SignIn = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sign In Form:', formData)
    setSubmitted(true)
    setTimeout(() => {
      alert('Welcome back! You have successfully signed in.')
      setFormData({ email: '', password: '', rememberMe: false })
      setSubmitted(false)
    }, 1500)
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

                <button type="submit" className="btn-primary btn-lg btn signin-btn">
                  Sign In
                </button>

                <div className="signin-divider">
                  <span>OR</span>
                </div>

                <div className="social-signin">
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

            <div className="signin-footer">
              <p>Don't have an account? <a href="/signup" className="signup-link">Create one</a></p>
            </div>
          </div>

          <div className="signin-benefits">
            <h2>Why Sign In?</h2>
            <ul className="benefits-list">
              <li>
                <span className="benefit-icon">🎯</span>
                <div>
                  <h3>Track Your Trips</h3>
                  <p>View all your bookings and itineraries in one place</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">💾</span>
                <div>
                  <h3>Save Preferences</h3>
                  <p>Store your travel preferences for faster planning</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">📧</span>
                <div>
                  <h3>Exclusive Offers</h3>
                  <p>Get member-only deals and early access to new tours</p>
                </div>
              </li>
              <li>
                <span className="benefit-icon">🤝</span>
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
