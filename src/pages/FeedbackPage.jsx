import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageFrame from '../components/PageFrame';

function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageFrame
      navLeft={
        <Link to="/" className="lang-selector">
          <span className="lang-icon">🌐</span>
          <span className="lang-text">Change Language</span>
        </Link>
      }
      navRight={
        <>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/sports" className="nav-link">Sports</Link>
          <Link to="/assessment" className="nav-link">Assessment</Link>
        </>
      }
      showFeedback={false}
      footerDetailed
    >
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h1 className="section-title">Feedback & Contact Us</h1>
          <p className="section-subtitle">We'd love to hear from you!</p>

          <div className="contact-grid">
            <div className="contact-info">
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>Get In Touch</h3>
              <div className="contact-item"><span className="contact-icon">📧</span><div className="contact-details"><h4>Email</h4><p>info@sportsinfo.com</p></div></div>
              <div className="contact-item"><span className="contact-icon">📞</span><div className="contact-details"><h4>Call Us</h4><p>+1 234 567 8900</p></div></div>
            </div>

            <div className="form-container" style={{ maxWidth: '100%', padding: '2rem' }}>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>Send Your Feedback</h3>
              {submitted ? (
                <div className="success-message"><h3>Thank you!</h3><p>Your feedback has been received.</p></div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="form-group"><label className="form-label">Your Name</label><input type="text" className="form-input" placeholder="Enter your name" required /></div>
                  <div className="form-group"><label className="form-label">Email Address</label><input type="email" className="form-input" placeholder="Enter your email" required /></div>
                  <div className="form-group"><label className="form-label">Message</label><textarea className="form-input" placeholder="Your message..." required /></div>
                  <div className="form-group">
                    <label className="form-label">Attach File (Optional)</label>
                    <input type="file" className="form-input" name="attachment" accept="*/*" />
                    <small style={{ color: '#999', display: 'block', marginTop: '0.5rem' }}>All file types accepted</small>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

export default FeedbackPage;
