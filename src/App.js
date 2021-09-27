import './App.css';
import Heading from "./components/Heading";
import Title from "./components/Title";
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Title/>
      <Heading />
      <About/>
      <Skills/>
      <Education/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;