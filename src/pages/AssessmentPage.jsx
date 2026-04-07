import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageFrame from '../components/PageFrame';
import { quizData } from '../data/quizData';

function AssessmentPage() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let points = 0;
    quizData.forEach((q) => {
      if (answers[q.id] === q.correct) points += 1;
    });

    setScore(points);
    setSubmitted(true);

    localStorage.setItem(
      'quizResults',
      JSON.stringify({
        answers,
        score: points,
        total: quizData.length,
        timestamp: new Date().toISOString()
      })
    );

    window.setTimeout(() => {
      navigate('/results');
    }, 1400);
  };

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
          <Link to="/assessment" className="nav-link active">Assessment</Link>
        </>
      }
      footerDetailed
      feedbackPath="/feedback"
    >
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h1 className="section-title">Sports Knowledge Assessment</h1>
          <p className="section-subtitle">Test your knowledge of Cricket, Football, Golf, and Basketball</p>

          <div className="quiz-container">
            <form onSubmit={handleSubmit}>
              {quizData.map((q, idx) => (
                <div className="quiz-card" key={q.id}>
                  <div className="quiz-question">{idx + 1}. {q.question}</div>
                  <div className="quiz-options">
                    {q.options.map((option, optionIndex) => (
                      <label className="quiz-option" key={`${q.id}-${q.values[optionIndex]}`}>
                        <input
                          type="radio"
                          name={q.id}
                          value={q.values[optionIndex]}
                          checked={answers[q.id] === q.values[optionIndex]}
                          onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button type="submit" className="btn btn-primary">Submit Assessment</button>
              </div>
            </form>

            {submitted ? (
              <div className="success-message" style={{ marginTop: '2rem' }}>
                <h3>Assessment Complete!</h3>
                <p>You scored {score} out of {quizData.length}.</p>
                <p style={{ marginTop: '1rem', color: '#999' }}>Redirecting to results page...</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

export default AssessmentPage;
