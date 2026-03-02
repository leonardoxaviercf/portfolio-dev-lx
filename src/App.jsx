import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Skills /> 
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2026 Criado por Leonardo Xavier Cruz Filho</p>
      </footer>
    </div>
  );
}

export default App;