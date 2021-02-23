import logo from './logo.svg';
import Samantha from "./Samantha"
import Home from "./Home"
import About from "./About"
import Navigation from "./components/Navbar"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      {/* <Samantha/> */}
      <About/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
