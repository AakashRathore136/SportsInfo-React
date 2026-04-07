  import { Link } from 'react-router-dom';

function PageFrame({ navLeft, navRight, children, showFeedback = true, feedbackPath = '/feedback', footerDetailed = false }) {
  return (
    <>
      <div className="animated-bg" />
      <div className="page-wrapper">
        <nav className="navbar">
          <div className="nav-left">{navLeft}</div>
          <div className="nav-right">{navRight}</div>
        </nav>

        {children}

        <footer className="footer">
          {footerDetailed ? (
            <div className="footer-content">
              <div className="footer-section">
                <h4>SportsInfo</h4>
                <p>Your trusted partner in sports education since 2020.</p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/register">Register</Link>
              </div>
              <div className="footer-section">
                <h4>Contact</h4>
                <p>info@sportsinfo.com</p>
                <p>+1 234 567 8900</p>
              </div>
            </div>
          ) : null}
          <div className="footer-bottom">
            <p>&copy; 2024 SportsInfo. All rights reserved.</p>
          </div>
        </footer>
      </div>
      {showFeedback ? (
        <Link to={feedbackPath} className="feedback-btn" title="Give Feedback">
          💬
        </Link>
      ) : null}
    </>
  );
}

export default PageFrame;
