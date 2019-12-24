import React, { Component } from 'react';
import styled from 'styled-components'; // https://www.styled-components.com/docs/api

// https://www.w3schools.com/bootstrap/bootstrap_grid_basic.asp
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className = "navbar navbar-expand-md navbar-dark bg-dark fixed-top" /* bootstrap */>
          <a 
            href = "" 
            className = "navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" /* bootstrap */>
            Pokedex
          </a>
        </nav>
      </div>
    )
  }
}

