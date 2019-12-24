import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

// PokemonList will contain PokemonCards
export default class PokemonList extends Component {
  render() {
    return (
      <div className = "row">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        {/* making multiple objects here will create multiple PokemonCards; 
            there appears to be default distance between two objects...  
            we want to make this function so that it goes across the page, not down.
            to do this, we define a class name and set the css rules for the class.
            trying to understand where the "automatic" spacing is coming from for objects? */}
      </div>
    )
  }
}
