import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // https://getbootstrap.com/docs/4.4/getting-started/introduction/
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/layout/Navbar.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload (boop).
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
