import { Navigate, Route, Routes } from 'react-router-dom';
import AIAssistant from './components/AIAssistant';
import GlobalEnhancements from './components/GlobalEnhancements';
import ProtectedRoute from './components/ProtectedRoute';
import AboutPage from './pages/AboutPage';
import AssessmentPage from './pages/AssessmentPage';
import FeedbackPage from './pages/FeedbackPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResultsPage from './pages/ResultsPage';
import SportDetailPage from './pages/SportDetailPage';
import SportHubPage from './pages/SportHubPage';

function App() {
  return (
    <>
      <GlobalEnhancements />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/sports" element={<SportHubPage />} />
          <Route path="/sports/:sportKey" element={<SportDetailPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Route>

        <Route path="/english/about" element={<Navigate to="/about" replace />} />
        <Route path="/english/login" element={<Navigate to="/login" replace />} />
        <Route path="/english/register" element={<Navigate to="/register" replace />} />
        <Route path="/english/feedback" element={<Navigate to="/feedback" replace />} />
        <Route path="/english/assessment" element={<Navigate to="/assessment" replace />} />
        <Route path="/english/results" element={<Navigate to="/results" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <AIAssistant />
    </>
  );
}

export default App;
