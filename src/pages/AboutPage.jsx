import { Link } from 'react-router-dom';
import PageFrame from '../components/PageFrame';

function AboutPage() {
  return (
    <PageFrame
      navLeft={
        <Link to="/" className="logo">
          <div className="logo-icon">⚽</div>
          <span>SportsInfo</span>
        </Link>
      }
      navRight={
        <>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link active">About Us</Link>
        </>
      }
      footerDetailed
      feedbackPath="/feedback"
    >
      <div className="detail-container">
        <section className="hero-about">
          <div className="hero-content-about">
            <h1 className="sport-title">About SportsInfo</h1>
            <p className="hero-subtitle">Your Gateway to Understanding the World's Greatest Sports</p>
            <div className="accent-line" />
          </div>
        </section>

        <section className="about-main">
          <div className="container">
            <div className="about-grid">
              <div className="about-card about-card-1">
                <div className="card-icon">🎯</div>
                <h2 className="section-title">Our Mission</h2>
                <p className="section-content">
                  SportsInfo provides comprehensive information about the world's most popular sports and helps
                  learners deepen both understanding and enjoyment.
                </p>
              </div>

              <div className="about-card about-card-2">
                <div className="card-icon">📚</div>
                <h2 className="section-title">What We Offer</h2>
                <p className="section-content">
                  We cover Cricket, Football, Golf, and Basketball with structured information about rules,
                  dimensions, positions, and famous personalities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2 className="section-title section-center">Why Choose SportsInfo?</h2>
            <div className="features-grid">
              <div className="feature-card"><div className="feature-icon">🌍</div><h3>Global Reach</h3><p>120+ countries served</p></div>
              <div className="feature-card"><div className="feature-icon">💬</div><h3>Multilingual</h3><p>Growing language support</p></div>
              <div className="feature-card"><div className="feature-icon">⚡</div><h3>Fast & Reliable</h3><p>Expert insights instantly</p></div>
              <div className="feature-card"><div className="feature-icon">👥</div><h3>Expert Team</h3><p>Sports specialists</p></div>
            </div>
          </div>
        </section>

        <section className="about-story">
          <div className="container">
            <div className="story-grid">
              <div className="story-content">
                <h2>Our Story</h2>
                <p>
                  SportsInfo started from a simple idea: learning sports deeply should be straightforward and
                  accessible.
                </p>
                <p>
                  Today, we support enthusiasts worldwide through practical content, assessments, and continuous
                  improvement driven by learners.
                </p>
              </div>
              <div className="story-image">
                <div className="image-placeholder">🌍</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-vision">
          <div className="container">
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">🎯</div>
                <h3>Our Vision</h3>
                <p>Empower sports enthusiasts worldwide with clear and practical sports knowledge.</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">❤️</div>
                <h3>Our Values</h3>
                <p>Excellence, inclusivity, and passion for helping every learner succeed.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="container">
            <div className="cta-box">
              <h2>Ready to Explore Sports?</h2>
              <p>Join thousands of enthusiasts learning about their favorite games.</p>
              <Link to="/login" className="btn btn-primary btn-large">Start Now</Link>
            </div>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}

export default AboutPage;
