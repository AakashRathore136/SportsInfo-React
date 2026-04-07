import { Link } from 'react-router-dom';
import PageFrame from '../components/PageFrame';

function HomePage() {
  return (
    <PageFrame
      navLeft={
        <>
          <Link to="/" className="lang-selector">
            <span className="lang-icon">🌐</span>
            <span className="lang-text">Select Language</span>
          </Link>
          <Link to="/" className="nav-brand" style={{ marginLeft: '1rem' }}>
            SportsInfo
          </Link>
        </>
      }
      navRight={<Link to="/about" className="nav-link">About Us</Link>}
      feedbackPath="/feedback"
    >
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to SportsInfo</h1>
          <p className="hero-subtitle">
            Your premier destination for learning about the world's most beloved sports. Master the rules,
            understand player positions, and learn about legendary athletes in Cricket, Golf, Basketball and
            Football.
          </p>

          <h2 style={{ color: 'var(--accent-gold)', marginBottom: '2rem', fontSize: '1.5rem' }}>Select Your Language</h2>

          <div className="language-grid">
            <Link to="/login" className="language-card">
              <span className="flag-icon">🇬🇧</span>
              <span className="language-name">English</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section" style={{ padding: '4rem 2rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '15px', margin: '3rem 0' }}>
        <div className="hero-content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--accent-gold)', textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
            What SportsInfo Offers
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div className="card"><h3>📚 Comprehensive Learning</h3><p>Master rules, layouts, scoring systems, and strategies from beginner to advanced levels.</p></div>
            <div className="card"><h3>⭐ Legendary Athletes</h3><p>Explore the journeys and achievements of iconic players across major sports.</p></div>
            <div className="card"><h3>🎯 Interactive Assessments</h3><p>Test your knowledge through quizzes and track your progress over time.</p></div>
            <div className="card"><h3>🌍 English Experience</h3><p>Start learning instantly with a focused English-first experience.</p></div>
            <div className="card"><h3>🏟️ In-Depth Guides</h3><p>Learn dimensions, equipment, techniques, and tactical foundations clearly.</p></div>
            <div className="card"><h3>💬 Community Feedback</h3><p>Share your feedback to help us improve content and the learning experience.</p></div>
          </div>
        </div>
      </section>

      <section className="sports-coverage-section" style={{ padding: '4rem 2rem', margin: '3rem 0' }}>
        <div className="hero-content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--accent-gold)', textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>
            Sports We Cover
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ textAlign: 'center' }}><div style={{ fontSize: '4rem' }}>🏏</div><h3>Cricket</h3><p>Explore batting, bowling, fielding positions, and cricket legends.</p></div>
            <div className="card" style={{ textAlign: 'center' }}><div style={{ fontSize: '4rem' }}>⚽</div><h3>Football</h3><p>Master formations, roles, strategy, and iconic moments from world football.</p></div>
            <div className="card" style={{ textAlign: 'center' }}><div style={{ fontSize: '4rem' }}>🏀</div><h3>Basketball</h3><p>Understand positions, gameplay flow, and all-time great players.</p></div>
            <div className="card" style={{ textAlign: 'center' }}><div style={{ fontSize: '4rem' }}>⛳</div><h3>Golf</h3><p>Learn techniques, courses, scoring systems, and legendary golfers.</p></div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '15px', margin: '3rem 0', textAlign: 'center' }}>
        <div className="hero-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--accent-gold)', fontSize: '2rem', marginBottom: '2rem' }}>Perfect For Everyone</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Whether you are a casual fan or a dedicated enthusiast, SportsInfo gives you structured learning,
            practical explanations, and quiz-based practice in one place.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--accent-gold)', fontStyle: 'italic' }}>
            Start your sports learning journey today.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}

export default HomePage;
