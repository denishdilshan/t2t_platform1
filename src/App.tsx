import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Project } from "./screens/Project";
import { ClientFormPage } from './pages/ClientFormPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { HomePage } from './pages/HomePage';
import { useEffect } from 'react';

// ScrollToTop component to handle scroll behavior
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/submit-idea" element={<ClientFormPage />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
      </Routes>
    </Router>
  );
};