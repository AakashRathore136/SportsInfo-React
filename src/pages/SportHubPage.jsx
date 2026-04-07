import { Link, useNavigate } from 'react-router-dom';
import PageFrame from '../components/PageFrame';
import { sportCards } from '../data/sportContent';

function SportHubPage() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('sportsinfo_authenticated');
    navigate('/login');
  };

  return (
    <PageFrame
      navLeft={
        <Link to="/" className="lang-selector">
          <span className="lang-icon">Globe</span>
          <span className="lang-text">Change Language</span>
        </Link>
      }
      navRight={
        <>
          <Link to="/about" className="nav-link">About Us</Link>
          <button type="button" className="nav-link" onClick={logout} style={{ border: 0, background: 'transparent' }}>
            Logout
          </button>
        </>
      }
      feedbackPath="/feedback"
    >
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Choose Your Sport</h1>
          <p className="hero-subtitle">
            Open a sport page to learn ground details, positions, game rules, and famous players.
          </p>

          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <iframe
              title="sports-overview"
              width="100%"
              height="400"
              style={{ maxWidth: '650px', display: 'inline-block', borderRadius: '12px' }}
              src="https://www.youtube.com/embed/cYGxfukTGPY"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="sports-grid">
            {sportCards.map((sport) => (
              <Link key={sport.key} to={`/sports/${sport.key}`} className={`sport-card ${sport.className}`}>
                <div className="sport-card-content">
                  <h2 className="sport-title">{sport.title}</h2>
                  <p className="sport-description">{sport.description}</p>
                  <span className="btn btn-secondary">Explore {sport.title}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link to="/assessment" className="btn btn-primary">Take Assessment Quiz</Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

export default SportHubPage;
