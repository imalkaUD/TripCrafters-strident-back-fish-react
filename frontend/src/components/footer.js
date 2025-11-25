import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
a.footer-contact-value:hover {
  color: var(--color-primary);
}
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms;
  animation-iteration-count: 1;
  transition-duration: 0.01ms;
}
.footer-brand-column, .footer-links-column, .footer-contact-column {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <footer id="footer-main" className="footer-container">
        <div aria-hidden="true" className="footer-map-background">
          <img
            alt="true"
            src="https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
            loading="lazy"
          />
        </div>
        <div className="footer-content-wrapper">
          <div className="footer-grid">
            <div className="footer-brand-column">
              <div className="footer-brand-content">
                <div className="footer-logo">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="footer-logo-icon"
                  >
                    <path
                      d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="footer-logo-text">TripCrafters</span>
                </div>
                <p className="footer-brand-description">
                  {' '}
                  We plan custom trips and small-group tours with vetted local
                  partners. Travelers get clear itineraries, fair pricing, and
                  support from planning through return.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer-trust-badges">
                  <div className="footer-badge">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="footer-badge-icon"
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
                    <span>Secure Booking</span>
                  </div>
                  <div className="footer-badge">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="footer-badge-icon"
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
                    <span>Award Winning</span>
                  </div>
                  <div className="footer-badge">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="footer-badge-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                      </g>
                    </svg>
                    <span>150+ Destinations</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title">Explore</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="#destinations">
                    <div className="footer-link">
                      <span>Destinations</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#tours">
                    <div className="footer-link">
                      <span>Small Group Tours</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#custom">
                    <div className="footer-link">
                      <span>Custom Trips</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#packages">
                    <div className="footer-link">
                      <span>Travel Packages</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#experiences">
                    <div className="footer-link">
                      <span>Unique Experiences</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#blog">
                    <div className="footer-link">
                      <span>Travel Blog</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title">Services</h3>
              <ul className="footer-links-list">
                <li>
                  <a href="#planning">
                    <div className="footer-link">
                      <span>Trip Planning</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#flights">
                    <div className="footer-link">
                      <span>Flight Booking</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#accommodations">
                    <div className="footer-link">
                      <span>Accommodations</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#insurance">
                    <div className="footer-link">
                      <span>Travel Insurance</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#support">
                    <div className="footer-link">
                      <span>24/7 Support</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#partners">
                    <div className="footer-link">
                      <span>Local Partners</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact-column">
              <h3 className="footer-column-title">Get in Touch</h3>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="footer-contact-info">
                    <span className="footer-contact-label">Phone</span>
                    <a href="tel:+18005551234">
                      <div className="footer-contact-value">
                        <span>
                          {' '}
                          +1 (800) 555-1234
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="footer-contact-info">
                    <span className="footer-contact-label">Email</span>
                    <a href="mailto:hello@tripcrafters.com?subject=">
                      <div className="footer-contact-value">
                        <span>
                          {' '}
                          hello@tripcrafters.com
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
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
                  <div className="footer-contact-info">
                    <span className="footer-contact-label">Hours</span>
                    <span className="footer-contact-value">
                      Mon - Fri: 9AM - 8PM EST
                    </span>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
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
                  <div className="footer-contact-info">
                    <span className="footer-contact-label">Address</span>
                    <span className="footer-contact-value">
                      {' '}
                      123 Travel Lane, Suite 400, New York, NY 10001
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="footer-social-wrapper">
                <p className="footer-social-title">Follow Our Journey</p>
                <div className="footer-social-links">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Follow us on Facebook"
                      className="footer-social-link"
                    >
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Follow us on Instagram"
                      className="footer-social-link"
                    >
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            width="20"
                            height="20"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Follow us on Twitter"
                      className="footer-social-link"
                    >
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Follow us on LinkedIn"
                      className="footer-social-link"
                    >
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-newsletter-section">
            <div className="footer-newsletter-content">
              <div className="footer-newsletter-text">
                <h3 className="footer-newsletter-title">
                  Get Travel Inspiration
                </h3>
                <p className="footer-newsletter-description">
                  {' '}
                  Subscribe for exclusive deals, destination guides, and insider
                  travel tips delivered to your inbox.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <form
                id="newsletter-form"
                data-form-id="59d1af1f-a6d0-49c0-919c-5ad0cccdf81d"
                className="footer-newsletter-form"
              >
                <div className="footer-form-group">
                  <input
                    type="email"
                    id="footer-email-input"
                    name="textinput"
                    required="true"
                    aria-label="Email address"
                    placeholder="Enter your email address"
                    data-form-field-id="footer-email-input"
                    className="footer-email-input"
                  />
                  <button
                    id="thq_button_gUtW"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_gUtW"
                    className="btn-primary footer-subscribe-btn btn"
                  >
                    {' '}
                    Subscribe
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
                <p className="footer-newsletter-privacy">
                  {' '}
                  We respect your privacy. Unsubscribe anytime.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                {' '}
                © 2025 TripCrafters. All rights reserved.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <nav aria-label="Legal navigation" className="footer-legal-nav">
                <a href="#privacy">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span aria-hidden="true" className="footer-divider">
                  •
                </span>
                <a href="#terms">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
                <span aria-hidden="true" className="footer-divider">
                  •
                </span>
                <a href="#cookies">
                  <div className="footer-legal-link">
                    <span>Cookie Policy</span>
                  </div>
                </a>
                <span aria-hidden="true" className="footer-divider">
                  •
                </span>
                <a href="#accessibility">
                  <div className="footer-legal-link">
                    <span>Accessibility</span>
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
        @keyframes footer-fade-in {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer">
(function(){
  // Newsletter form submission handler
  const newsletterForm = document.getElementById("newsletter-form")
  const emailInput = document.getElementById("footer-email-input")

  if (newsletterForm && emailInput) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault()

      const email = emailInput.value.trim()

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/

      if (emailRegex.test(email)) {
        // Simulate successful subscription
        emailInput.value = ""

        // Create success message
        const successMessage = document.createElement("p")
        successMessage.textContent =
          "Thank you for subscribing! Check your inbox for exclusive travel deals."
        successMessage.style.cssText = \`
        color: var(--color-primary);
        font-size: var(--font-size-sm);
        margin-top: var(--spacing-sm);
        font-weight: var(--font-weight-strong);
      \`

        // Remove existing success messages
        const existingMessage = newsletterForm.querySelector(
          ".footer-success-message"
        )
        if (existingMessage) {
          existingMessage.remove()
        }

        successMessage.classList.add("footer-success-message")
        newsletterForm.appendChild(successMessage)

        // Remove success message after 5 seconds
        setTimeout(() => {
          if (successMessage.parentNode) {
            successMessage.remove()
          }
        }, 5000)
      } else {
        // Show error state
        emailInput.style.borderColor = "var(--color-accent)"

        setTimeout(() => {
          emailInput.style.borderColor = ""
        }, 2000)
      }
    })
  }

  // Add interactive hover effect to footer map
  const mapBackground = document.querySelector(".footer-map-background")
  if (mapBackground) {
    const footerContainer = document.querySelector(".footer-container")

    footerContainer.addEventListener("mousemove", function (e) {
      const rect = footerContainer.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const moveX = (x - 0.5) * 20
      const moveY = (y - 0.5) * 20

      mapBackground.style.transform = \`translate(\${moveX}px, \${moveY}px) scale(1.05)\`
    })

    footerContainer.addEventListener("mouseleave", function () {
      mapBackground.style.transform = "translate(0, 0) scale(1)"
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
