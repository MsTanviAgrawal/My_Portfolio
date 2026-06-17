import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/home/Home';
import Experience from './pages/experience/Experience';
// import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Projects from './pages/project/Projects';
import Education from './pages/education/Education'
import Contact from './pages/contact/Contact';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="experience" element={<Experience />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
