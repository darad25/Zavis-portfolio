import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default App;
