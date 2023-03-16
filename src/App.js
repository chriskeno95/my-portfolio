
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Header from './components/Header';
import Intro from './components/intro';
import Home from './pages/Home'
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
    <About/>
    </div>
  );
}

export default App;