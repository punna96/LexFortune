import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Lexfortune Advisory Services</h1>
          <p className="hero-tagline">Legal & Financial expertise you can trust</p>
          <p className="hero-desc">
            Led by senior investigation officers of Uttar Pradesh Police, along with experienced CAs and Advocates. 
            We provide comprehensive legal and financial advisory from our base in Ghaziabad.
          </p>
          <div className="hero-cta">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="services-preview">
            <div className="service-card">
              <div className="service-icon">⚖️</div>
              <h3>Legal Services</h3>
              <p>Civil, Family, Criminal, Litigation and more. Expert legal representation and advisory.</p>
              <Link to="/services#legal" className="link-arrow">Learn more →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Financial Advisory</h3>
              <p>Tax, GST, ITR, Compliances, Registrations. End-to-end financial solutions.</p>
              <Link to="/services#financial" className="link-arrow">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <h4>Experienced Team</h4>
              <p>Senior officers from UP Police, qualified CAs and Advocates with years of field experience.</p>
            </div>
            <div className="feature">
              <h4>Holistic Approach</h4>
              <p>Both legal and financial expertise under one roof. No need to juggle multiple advisors.</p>
            </div>
            <div className="feature">
              <h4>Client Focused</h4>
              <p>Personalized solutions tailored to your specific needs and circumstances.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Reach out for a consultation. We're here to help.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  )
}

export default Home
