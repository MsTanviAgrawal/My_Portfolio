import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects';
import Education from './pages/Education'
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      
    </Routes>
  );
};

export default App;
