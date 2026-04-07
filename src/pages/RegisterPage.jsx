import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageFrame from '../components/PageFrame';
import { RegistrationService, SportsLearner } from '../models/registrationModels';

function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    experience: '',
    terms: false
  });
  const [profilePic, setProfilePic] = useState(null);

  const onChange = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = (e) => {
    e.preventDefault();

    const learner = new SportsLearner(form);
    const registrationService = new RegistrationService(learner, profilePic);
    const error = registrationService.validateAll();
    if (error) return alert(error);

    localStorage.setItem('sportsinfo_authenticated', 'true');
    localStorage.setItem('sportsinfo_user_name', learner.getDisplayName());
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
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h1 className="section-title">Course Registration</h1>
          <p className="section-subtitle">Join thousands of sports enthusiasts and start your learning journey today</p>

          <div className="form-container" style={{ maxWidth: '700px' }}>
            <form onSubmit={onSubmit}>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>Personal Information</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">First Name</label>
                  <input id="firstName" className="form-input" placeholder="John" required value={form.firstName} onChange={(e) => onChange('firstName', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">Last Name</label>
                  <input id="lastName" className="form-input" placeholder="Doe" required value={form.lastName} onChange={(e) => onChange('lastName', e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="regEmail">Email Address</label>
                <input id="regEmail" type="email" className="form-input" placeholder="john@example.com" required value={form.email} onChange={(e) => onChange('email', e.target.value)} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" className="form-input" placeholder="+1 234 567 8900" value={form.phone} onChange={(e) => onChange('phone', e.target.value)} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="regPassword">Create Password</label>
                <input id="regPassword" type="password" className="form-input" placeholder="Create a strong password" required value={form.password} onChange={(e) => onChange('password', e.target.value)} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="profilePic">Profile Picture (Optional)</label>
                <input id="profilePic" type="file" className="form-input" accept="image/*" onChange={(e) => setProfilePic(e.target.files?.[0] ?? null)} />
                <small style={{ color: '#999', display: 'block', marginTop: '0.5rem' }}>Accepted formats: JPG, PNG, GIF (Max 5MB)</small>
              </div>

              <h3 style={{ color: 'var(--accent-gold)', margin: '2rem 0 1.5rem' }}>Select Your Courses</h3>
              <div className="course-options">
                <label className="course-option"><input type="checkbox" name="course" value="cricket" /><div className="course-content"><span className="course-icon">🏏</span><div><div className="course-name">Cricket Mastery</div><div className="course-duration">8 weeks course</div></div></div></label>
                <label className="course-option"><input type="checkbox" name="course" value="football" /><div className="course-content"><span className="course-icon">⚽</span><div><div className="course-name">Football Excellence</div><div className="course-duration">10 weeks course</div></div></div></label>
                <label className="course-option"><input type="checkbox" name="course" value="both" /><div className="course-content"><span className="course-icon">🏆</span><div><div className="course-name">Complete Bundle</div><div className="course-duration">16 weeks - Both Sports</div></div></div></label>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="experience">Experience Level</label>
                <select id="experience" className="form-input" required value={form.experience} onChange={(e) => onChange('experience', e.target.value)}>
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner - New to sports</option>
                  <option value="intermediate">Intermediate - Some knowledge</option>
                  <option value="advanced">Advanced - Looking to master</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-checkbox">
                  <input type="checkbox" required checked={form.terms} onChange={(e) => onChange('terms', e.target.checked)} />
                  <span>I agree to the Terms of Service and Privacy Policy</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Create Account & Enroll</button>

              <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'rgba(255,255,255,0.6)' }}>
                Already have an account? <Link to="/login" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

export default RegisterPage;
