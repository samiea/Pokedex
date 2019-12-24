import React, { Component } from 'react';
import PokemonList from '../pokemon/PokemonList';

// Dashboard will contain PokemonList (of PokemonCards)
export default class Dashboard extends Component {
  render() {
    return (
      <div className = "row">
        <div className = "col">
          <PokemonList />
        </div>
      </div>
    )
  }
}
