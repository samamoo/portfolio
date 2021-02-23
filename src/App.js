import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Navigation from "./components/Navbar";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
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
