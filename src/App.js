import PNavbar from './components/PNavBar'
import Footer from './components/Footer'
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe"
import ProjectDisplay from './pages/ProjectDisplay'
import Resume from './pages/Resume'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <PNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

