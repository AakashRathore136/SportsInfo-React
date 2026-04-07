import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
}

function hasCookie(name) {
  return document.cookie.split(';').some((cookie) => cookie.trim().startsWith(`${name}=`));
}

function readLocal(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function writeLocal(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
  }
}

function GlobalEnhancements({
  defaultTheme = 'dark',
  defaultLanguage = 'en',
  showReadingProgress = true,
  showDate = true,
  showTimer = true,
  showThemeToggle = true,
  showBackToTop = true,
  backToTopThreshold = 300,
  showCookieBanner = true,
  cookieMessage = 'We use cookies to remember your preferences and improve your experience.',
  consentCookieName = 'sportsinfo_cookie_consent',
  consentAcceptDays = 365,
  consentDeclineDays = 30,
  themeStorageKey = 'sportsinfo_theme',
  languageStorageKey = 'sportsinfo_language',
  visitedStorageKey = 'sportsinfo_visited',
  maxVisitedPages = 50
}) {
  const location = useLocation();
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [cookieVisible, setCookieVisible] = useState(false);

  const dateText = useMemo(
    () =>
      new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
    []
  );
/*stores changing values in component state.*/

  useEffect(() => {
    const savedTheme = readLocal(themeStorageKey, defaultTheme);
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [defaultTheme, themeStorageKey]);

  useEffect(() => {
    if (!showTimer) {
      setTimeSpent(0);
      return undefined;
    }

    const started = Date.now();
    const interval = window.setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - started) / 1000));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [location.pathname, showTimer]);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setShowTop(current > backToTopThreshold);
      setProgress(docHeight > 0 ? Math.min(100, (current / docHeight) * 100) : 0);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [backToTopThreshold]);

  useEffect(() => {
    if (showCookieBanner && !hasCookie(consentCookieName)) {
      setCookieVisible(true);
    }

    const visitedRaw = readLocal(visitedStorageKey, '[]');
    const visited = JSON.parse(visitedRaw);
    if (!visited.includes(location.pathname)) {
      visited.push(location.pathname);
      writeLocal(visitedStorageKey, JSON.stringify(visited.slice(-maxVisitedPages)));
    }

    writeLocal(languageStorageKey, defaultLanguage);
  }, [
    consentCookieName,
    defaultLanguage,
    languageStorageKey,
    location.pathname,
    maxVisitedPages,
    showCookieBanner,
    visitedStorageKey
  ]);

  const toggleTheme = () => {
    const isLight = document.body.classList.toggle('light-mode');
    writeLocal(themeStorageKey, isLight ? 'light' : 'dark');
  };

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <>
      {showReadingProgress ? <div className="reading-progress" style={{ width: `${progress}%` }} /> : null}

      <div className="time-tracker floating-time-tracker">
        <span className="time-tracker-icon">📅</span>
        {showDate ? <span className="time-tracker-date">{dateText}</span> : null}
        {showDate && showTimer ? <span className="time-tracker-separator">|</span> : null}
        {showTimer ? <span className="time-tracker-icon">⏱️</span> : null}
        {showTimer ? <span className="time-tracker-text">{formatTime(timeSpent)}</span> : null}
      </div>

      {showThemeToggle ? (
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          ⏾
        </button>
      ) : null}

      {showBackToTop && showTop ? (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      ) : null}

      {cookieVisible ? (
        <div className="cookie-consent-banner">
          <div className="cookie-content">
            <span className="cookie-icon">🍪</span>
            <div className="cookie-text">
              <strong>Cookie Notice</strong>
              <p>{cookieMessage}</p>
            </div>
            <div className="cookie-actions">
              <button
                className="btn-accept"
                onClick={() => {
                  setCookie(consentCookieName, 'accepted', consentAcceptDays);
                  setCookieVisible(false);
                }}
              >
                Accept All
              </button>
              <button
                className="btn-decline"
                onClick={() => {
                  setCookie(consentCookieName, 'declined', consentDeclineDays);
                  setCookieVisible(false);
                }}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default GlobalEnhancements;
