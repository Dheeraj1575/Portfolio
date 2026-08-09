import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollToTop } from './utils/ScrollToTop';
import Home from './pages/Home';
import HemoHub from './pages/HemoHub';
import DisasterManagement from './pages/DisasterManagement';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/hemohub" element={<HemoHub />} />
          <Route path="/projects/disaster-management" element={<DisasterManagement />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div
                style={{
                  minHeight: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  gap: '1rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent)' }}>404</span>
                <p>Page not found.</p>
                <a href="/" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
                  Return to portfolio
                </a>
              </div>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
