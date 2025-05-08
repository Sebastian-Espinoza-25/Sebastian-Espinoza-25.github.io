import './App.css';
import Header from './components/Header';
import Core from "./components/Core";
import Projects from "./components/Projects";
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Core />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
