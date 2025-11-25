import React, { useState } from 'react'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <FaPhone size={32} color="#16a34a" />,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      subtext: 'Available 24/7'
    },
    {
      icon: <FaEnvelope size={32} color="#16a34a" />,
      title: 'Email Us',
      content: 'hello@tripcrafters.com',
      subtext: 'We reply within 2 hours'
    },
    {
      icon: <FaMapMarkerAlt size={32} color="#16a34a" />,
      title: 'Visit Us',
      content: '123 Travel Lane, Adventure City, AC 12345',
      subtext: 'Open Mon-Fri, 9am-6pm'
    }
  ]

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking 2-3 months in advance for the best options, though we can arrange trips with shorter notice depending on availability.'
    },
    {
      question: 'What if I need to change my itinerary?',
      answer: 'No problem! Our dedicated travel managers can modify your plans anytime. We offer full flexibility to ensure your trip meets your needs.'
    },
    {
      question: 'Are group discounts available?',
      answer: 'Yes! Groups of 8 or more typically qualify for 10-15% discounts. Contact our team for a custom quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and payment plans. A 25% deposit reserves your trip.'
    }
  ]

  return (
    <div className="contact-container1">
      <Helmet>
        <title>Contact Us - TripCrafters</title>
        <meta property="og:title" content="Contact Us - TripCrafters" />
      </Helmet>
      <Navigation></Navigation>
      <div className="contact-container2">
        <div className="contact-container3">
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
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Our team is ready to help plan your next adventure
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="contact-info-card">
                <div className="contact-info-icon">{info.icon}</div>
                <h3 className="contact-info-title">{info.title}</h3>
                <p className="contact-info-content">{info.content}</p>
                <p className="contact-info-subtext">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-form-grid">
            <div className="contact-form-wrapper">
              <h2 className="section-heading">Send Us a Message</h2>
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3 className="success-title">Thank You!</h3>
                  <p className="success-message">
                    Your message has been sent successfully. Our team will contact you within 2 hours.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Trip Planning Inquiry"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                      placeholder="Tell us about your travel plans and questions..."
                      rows="6"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary btn-lg btn">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="contact-map-wrapper">
              <h2 className="section-heading">Our Office</h2>
              <div
                className="contact-map"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1000)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="map-overlay">
                  <div className="map-pin">📍</div>
                  <p>123 Travel Lane<br/>Adventure City, AC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="contact-container">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-card">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default Contact
