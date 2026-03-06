import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Illustrations from './pages/Illustrations';
import { IllustrationDetail } from './pages/IllustrationDetail';
import CoreStrengths from './pages/CoreStrengths';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/illustrations/:slug" element={<IllustrationDetail />} />
          <Route path="/core-strengths" element={<CoreStrengths />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default App;
