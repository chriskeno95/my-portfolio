
import { BrowserRouter as HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Intro from './components/intro';
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Project from './pages/Project'
import About from './pages/about-me';
import Footer from './components/Footer';

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
    <Footer/>
    </div>
  );
}

export default App;