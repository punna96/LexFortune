import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Your trusted partners in legal and financial matters</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop" alt="Legal advisory" />
            </div>
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                Lexfortune Advisory Services is a Ghaziabad-based firm offering integrated legal and financial advisory. 
                We bring together expertise from diverse backgrounds to serve our clients with comprehensive solutions.
              </p>
              <p>
                Our team is led by <strong>senior and top investigation officers of Uttar Pradesh Police</strong>, 
                working alongside qualified <strong>Chartered Accountants</strong> and <strong>Advocates</strong>. 
                This unique combination gives us deep insight into both investigative and regulatory matters, 
                as well as the financial and legal frameworks that govern them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>Integrity</h4>
              <p>We uphold the highest standards of honesty and transparency in all our dealings.</p>
            </div>
            <div className="value-item">
              <h4>Expertise</h4>
              <p>Our team's combined experience in law enforcement, law and finance sets us apart.</p>
            </div>
            <div className="value-item">
              <h4>Reliability</h4>
              <p>Clients trust us to deliver timely, accurate and practical solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2>Located in Ghaziabad</h2>
          <p>We serve clients across Uttar Pradesh and beyond. Visit us or get in touch for a consultation.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  )
}

export default AboutUs
