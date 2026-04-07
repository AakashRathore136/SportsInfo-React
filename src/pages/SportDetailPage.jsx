import { Link, Navigate, useParams } from 'react-router-dom';
import PageFrame from '../components/PageFrame';
import { sportContent } from '../data/sportContent';

const tabConfig = [
  { key: 'ground', label: 'Ground Details' },
  { key: 'positions', label: 'Player Positions' },
  { key: 'rules', label: 'Game Rules' },
  { key: 'players', label: 'Famous Players' }
];

function SportDetailPage() {
  const { sportKey } = useParams();
  const content = sportContent[sportKey];

  if (!content) {
    return <Navigate to="/sports" replace />;
  }

  const otherSports = Object.values(sportContent).filter((sport) => sport.key !== content.key);

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
          <Link to="/sports" className="nav-link">Sports</Link>
        </>
      }
      feedbackPath="/feedback"
      footerDetailed
    >
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h1 className="section-title">{content.title}</h1>
          <p className="section-subtitle">{content.subtitle}</p>

          <div className="tabs">
            {tabConfig.map((tab, index) => (
              <a key={tab.key} href={`#${tab.key}`} className={`tab ${index === 0 ? 'active' : ''}`}>
                {tab.label}
              </a>
            ))}
          </div>

          <div id="ground" className="ground-diagram">
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>{content.groundTitle}</h2>
            <div style={{ textAlign: 'center' }}>
              <img src={content.groundImage} alt={content.groundTitle} style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
            <div className="info-grid" style={{ marginTop: '2rem' }}>
              {content.groundInfo.map((item) => (
                <div key={item.title} className="info-card">
                  <h3 className="info-card-title">{item.title}</h3>
                  <p className="info-card-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="positions" className="section" style={{ padding: '2rem 0' }}>
            <h2 className="section-title">Player Positions</h2>
            <p className="section-subtitle">Core roles you should know</p>
            <div className="position-grid">
              {content.positions.map((position) => (
                <div key={position.name} className="position-item">
                  <div className="position-name">{position.name}</div>
                  <div className="position-desc">{position.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="rules" className="section" style={{ padding: '2rem 0' }}>
            <h2 className="section-title">Game Rules</h2>
            <p className="section-subtitle">Essential rules for every learner</p>
            <ul className="rules-list">
              {content.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          <div id="players" className="section" style={{ padding: '2rem 0' }}>
            <h2 className="section-title">Famous Players</h2>
            <p className="section-subtitle">Iconic names who shaped the game</p>
            <div className="player-grid">
              {content.players.map((player) => (
                <div key={player.name} className="player-card card">
                  <div className="player-info">
                    <h3 className="player-name">{player.name}</h3>
                    <p className="player-role">{player.role}</p>
                    <span className="player-country">{player.country}</span>
                    <p style={{ marginTop: '1rem', color: 'var(--text-tertiary)' }}>{player.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/assessment" className="btn btn-primary">{content.cta}</Link>
            {otherSports.map((sport) => (
              <Link key={sport.key} to={`/sports/${sport.key}`} className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
                Explore {sport.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

export default SportDetailPage;
