import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageFrame from '../components/PageFrame';

const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert('Please enter your email address');
      return;
    }
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!password) {
      alert('Please enter your password');
      return;
    }
    if (!strongPasswordPattern.test(password)) {
      alert(
        'Password must contain:\n- At least 8 characters\n- One uppercase letter (A-Z)\n- One lowercase letter (a-z)\n- One number (0-9)\n- One special character (@$!%*?&)'
      );
      return;
    }

    if (remember) {
      localStorage.setItem('sportsinfo_login_email', email);
    }
    localStorage.setItem('sportsinfo_authenticated', 'true');
    navigate('/sports');
  };

  return (
    <PageFrame
      navLeft={
        <Link to="/" className="lang-selector">
          <span className="lang-icon">🌐</span>
          <span className="lang-text">Change Language</span>
        </Link>
      }
      navRight={<Link to="/about" className="nav-link">About Us</Link>}
      feedbackPath="/feedback"
    >
      <section className="hero-section">
        <div className="form-container">
          <h2 className="form-title">Welcome Back</h2>
          <p className="form-subtitle">Sign in to continue your sports learning journey</p>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input type="email" id="email" className="form-input" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input type="password" id="password" className="form-input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <div className="form-group">
              <label className="form-checkbox">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                <span>Remember me</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Sign In
            </button>

            <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'rgba(255,255,255,0.6)' }}>
              Don't have an account? <Link to="/register" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>Register Now</Link>
            </p>
          </form>
        </div>
      </section>
    </PageFrame>
  );
}

export default LoginPage;
