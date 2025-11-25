import React from 'react'
import { NavLink } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation-link, .navigation-logo, .navigation-toggle, .navigation-mobile-overlay, .navigation-mobile-link, .navigation-phone {
  transition: none;
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav id="navigation-main" className="navigation">
        <div className="navigation-container">
          <NavLink to="/">
            <div
              aria-label="TripCrafters - Homepage"
              className="navigation-logo"
            >
              <div className="navigation-logo-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <span className="navigation-logo-text">TripCrafters</span>
            </div>
          </NavLink>
          <div className="navigation-menu">
            <NavLink exact to="/">
              <div className="navigation-link">
                <span>Home</span>
              </div>
            </NavLink>
            <NavLink exact to="/destinations">
              <div className="navigation-link">
                <span>Destinations</span>
              </div>
            </NavLink>
            <NavLink exact to="/tours">
              <div className="navigation-link">
                <span>Tours</span>
              </div>
            </NavLink>
            <NavLink exact to="/how-it-works">
              <div className="navigation-link">
                <span>How It Works</span>
              </div>
            </NavLink>
            <NavLink exact to="/about">
              <div className="navigation-link">
                <span>About</span>
              </div>
            </NavLink>
            <NavLink exact to="/contact">
              <div className="navigation-link">
                <span>Contact</span>
              </div>
            </NavLink>
          </div>
          <div className="navigation-actions">
            <a href="/signin" className="auth-link signin-link">
              <div className="navigation-link">
                <span>Sign In</span>
              </div>
            </a>
            <a href="/signup" className="btn-primary btn auth-btn signup-btn">
              Sign Up
            </a>
            <a href="tel:+1234567890">
              <div aria-label="Call us" className="navigation-phone">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1 2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <button
            id="navigation-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="navigation-navigation-toggle-icon1 navigation-toggle-open"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="navigation-navigation-toggle-icon2"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div
          id="navigation-mobile-overlay"
          className="navigation-mobile-overlay"
        >
          <div className="navigation-mobile-menu">
            <a href="#destinations">
              <div className="navigation-mobile-link">
                <span>Destinations</span>
              </div>
            </a>
            <a href="#tours">
              <div className="navigation-mobile-link">
                <span>Tours</span>
              </div>
            </a>
            <a href="#how-it-works">
              <div className="navigation-mobile-link">
                <span>How It Works</span>
              </div>
            </a>
            <a href="#about">
              <div className="navigation-mobile-link">
                <span>About</span>
              </div>
            </a>
            <a href="#contact">
              <div className="navigation-mobile-link">
                <span>Contact</span>
              </div>
            </a>
            <div className="navigation-mobile-actions">
              <a href="tel:+1234567890">
                <div className="btn-outline btn">
                  <span>Call Us</span>
                </div>
              </a>
              <button className="btn-primary btn">Plan Your Trip</button>
            </div>
          </div>
        </div>
        <div className="navigation-backdrop"></div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes navigationSlideIn {to {transform: translateX(0);
opacity: 1;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navToggle = document.getElementById("navigation-toggle")
  const mobileOverlay = document.getElementById("navigation-mobile-overlay")
  const navigation = document.getElementById("navigation-main")
  const mobileLinks = mobileOverlay.querySelectorAll(".navigation-mobile-link")

  // Toggle mobile menu
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true"
    navToggle.setAttribute("aria-expanded", !isExpanded)
    mobileOverlay.classList.toggle("navigation-mobile-active")
    document.body.style.overflow = !isExpanded ? "hidden" : ""
  })

  // Close mobile menu when link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false")
      mobileOverlay.classList.remove("navigation-mobile-active")
      document.body.style.overflow = ""
    })
  })

  // Close mobile menu on escape key
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      mobileOverlay.classList.contains("navigation-mobile-active")
    ) {
      navToggle.setAttribute("aria-expanded", "false")
      mobileOverlay.classList.remove("navigation-mobile-active")
      document.body.style.overflow = ""
    }
  })

  // Add scrolled class to navigation
  let lastScroll = 0
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 50) {
      navigation.classList.add("navigation-scrolled")
    } else {
      navigation.classList.remove("navigation-scrolled")
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
