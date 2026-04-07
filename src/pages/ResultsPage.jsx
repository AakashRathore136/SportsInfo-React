import { Link } from 'react-router-dom';
import PageFrame from '../components/PageFrame';
import { quizData } from '../data/quizData';

function ResultsPage() {
  const results = JSON.parse(localStorage.getItem('quizResults') || '{}');

  if (!results.answers || Object.keys(results.answers).length === 0) {
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
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h2 style={{ color: '#ff6b6b' }}>No Results Found</h2>
              <p style={{ color: '#ccc' }}>Please take the assessment first.</p>
              <Link to="/assessment" className="btn btn-primary" style={{ marginTop: '1rem' }}>Take Assessment</Link>
            </div>
          </div>
        </section>
      </PageFrame>
    );
  }

  const correctCount = quizData.reduce((count, quiz) => {
    return count + (results.answers[quiz.id] === quiz.correct ? 1 : 0);
  }, 0);

  const total = quizData.length;
  const incorrectCount = total - correctCount;
  const percentage = Math.round((correctCount / total) * 100);

  let performanceMessage = 'Keep learning! Review the materials and retake the assessment.';
  let performanceClass = 'performance-poor';
  if (percentage >= 90) {
    performanceMessage = 'Outstanding! You have excellent knowledge of sports.';
    performanceClass = 'performance-excellent';
  } else if (percentage >= 80) {
    performanceMessage = 'Great job! You demonstrated strong sports knowledge.';
    performanceClass = 'performance-good';
  } else if (percentage >= 60) {
    performanceMessage = 'Good effort. Review topics and try again to improve further.';
    performanceClass = 'performance-average';
  }

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
      footerDetailed
      feedbackPath="/feedback"
    >
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h1 className="section-title">Assessment Results</h1>
          <p className="section-subtitle">Review your quiz performance and correct answers</p>

          <div className="results-container">
            <div className="score-card">
              <h2>Your Score</h2>
              <div className="score-display">{correctCount}/{total}</div>
              <div className="score-percentage">{percentage}%</div>
              <div className={`performance-message ${performanceClass}`}>{performanceMessage}</div>
              <div className="stats-summary">
                <div className="stat-box"><h4>Correct Answers</h4><div className="value" style={{ color: '#4CAF50' }}>{correctCount}</div></div>
                <div className="stat-box"><h4>Incorrect Answers</h4><div className="value" style={{ color: '#ff6b6b' }}>{incorrectCount}</div></div>
                <div className="stat-box"><h4>Total Questions</h4><div className="value">{total}</div></div>
                <div className="stat-box"><h4>Accuracy</h4><div className="value">{percentage}%</div></div>
              </div>
            </div>

            <div className="results-list">
              {quizData.map((quiz, idx) => {
                const userAnswer = results.answers[quiz.id];
                const isCorrect = userAnswer === quiz.correct;
                const selectedIndex = quiz.values.indexOf(userAnswer);
                const correctIndex = quiz.values.indexOf(quiz.correct);
                const userAnswerText = selectedIndex === -1 ? 'Not answered' : quiz.options[selectedIndex];
                const correctAnswerText = quiz.options[correctIndex];

                return (
                  <div key={quiz.id} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{isCorrect ? '✓' : '✗'}</span>
                      <div className="question-text" style={{ margin: 0 }}>{idx + 1}. {quiz.question}</div>
                    </div>
                    <div className="answer-row">
                      <div className="answer-label user">Your Answer:</div>
                      <div className={`answer-content ${isCorrect ? 'answer-correct' : 'answer-incorrect'}`}>{userAnswerText}</div>
                    </div>
                    {!isCorrect ? (
                      <div className="answer-row">
                        <div className="answer-label">Correct Answer:</div>
                        <div className="answer-content answer-correct">{correctAnswerText}</div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="action-buttons">
              <Link className="btn-retake" to="/assessment">Retake Assessment</Link>
              <Link className="btn-home" to="/sports">Back to Sports</Link>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

export default ResultsPage;
