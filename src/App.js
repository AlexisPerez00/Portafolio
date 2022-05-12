import './App.css';

import { Home } from './components/Home';
import { Navbar} from './components/Navbar';
import { AboutMe } from './components/AboutMe'
import { Portafolio } from './components/Portafolio';
import { Contact } from './components/Contact';
import {Skills} from './components/Skills'


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <AboutMe/>
        <Skills/>
        <Portafolio/>
        <Contact/>
        
    </div>
  );
}

export default App;
