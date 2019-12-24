import React, { Component } from 'react'; // https://github.com/facebook/create-react-app
import 'bootstrap/dist/css/bootstrap.min.css'; // https://getbootstrap.com/docs/4.4/getting-started/introduction/
import './App.css';
import Navbar from "./components/layout/Navbar.js";
import Dashboard from './components/layout/Dashboard.js';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Navbar />
        <div className = "container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
