import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from './recipes.json';
import './App.css';

const recipes = data;
const recipeInfo = recipes.map((recipe, index) =>
	<div key={index}>
		<div className="container-segments"></div>
		<Link className="dessert-item" to={`/dessertsMVC-React/recipe/${recipe.url}`}>{recipe.title}</Link>
	</div>
);

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
    	<div className="main-content">{recipeInfo}</div>
	   </div>
    );
  }
}

export default Landing;
