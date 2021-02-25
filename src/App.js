import Home from "./Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navigation from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import { HashRouter, Route, Link, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation/>
        <BackToTop showBelow={250}/>
        <Home/>
        <About/>  
        <Skills/>
        <Portfolio/>
        <Contact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
