
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Header from './components/Header';
import Intro from './components/intro';
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Project from './pages/Project'
import About from './pages/about-me';

function App() {
  return (
    <div>
    <HashRouter>
        <Header/>
    </HashRouter>
    <Intro/>
    <Skills/>
    <Project/>
    <About/>
    <Contact/>
    </div>
  );
}

export default App;