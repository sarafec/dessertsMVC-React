import React, { Component } from 'react';
import data from './recipes.json';
import './Recipe.css';

const recipes = data;



class Recipe extends Component {
	constructor(props) {
		super(props);
		this.state = {recipe: recipes};
		this.relativePathName = props.location.pathname;
	}

	// choose correct recipe from relative path
	getRecipeDetails(props) {
		let relativePathArr = this.relativePathName.split('/');
		for(let i = 0; i < recipes.length; i++){
			if(recipes[i].url === relativePathArr[3]){
				return recipes[i];
			}
		}
	}

	// define recipe title and servings
	staticRecipeDetails() {
		let targetRecipe = this.getRecipeDetails();
		return(
		<div>
      	<div className="recipe-title">{targetRecipe.title}</div>
      	<div className="servings">Makes about {targetRecipe.servings}</div>
      	</div>
      	)
	}

	// define recipe ingredients
	ingredientDetails(targetRecipe) {
		let ingredients = targetRecipe.ingredients;

		let formattedIngredients = ingredients.map((items) => 
			this.checkIfFraction(items.quantity) + " " + this.checkNullUnit(items.unit) + " " + items.item 
		)
		return formattedIngredients;
	}

	// data validation for units that are not defined
	checkNullUnit(unit) {
		if(unit === "NA") {
			return "";
		} else {
			return unit;
		}
	}

	// data validation for units defined as fractions
	checkIfFraction(quantity){
		let baseQuantity = quantity.split(".");
			if (baseQuantity.length === 1){
				return quantity;
			} else if (+baseQuantity[0] < 1) {
				if (quantity === ".25") {
					return "¼";
				} else if(quantity === ".33"){
					return "⅓";
				} else if(quantity === ".5"){
					return "½";
				} else if (quantity === ".75"){
					return "¾";
				}
			} else if (+baseQuantity[0] >=  1){
				if (baseQuantity[1] === "25") {
					return baseQuantity[0] + "¼";
				} else if(baseQuantity[1] === "33"){
					return baseQuantity[0] + "⅓";
				} else if(baseQuantity[1] === "5"){
					return baseQuantity[0] + "½";
				} else if (baseQuantity[1] === "75"){
					return baseQuantity[0] + "¾";
				}
			}
	}

	// add numbering to recipe instructions
	instructionDetails(targetRecipe) {
		let instructions = targetRecipe.steps;

		let formattedInstructions = instructions.map((instruction) => 
			instruction.order + ". " + instruction.instruction
		)

		return formattedInstructions;
	}

	// define html for recipe ingredients and instructions
	dynamicRecipeDetails() {
		let targetRecipe = this.getRecipeDetails();
		let ingredients = this.ingredientDetails(targetRecipe);
		let ingredientsFormatted = ingredients.map((items, index) => <div key={index}><div>{items}</div></div>)

		let instruction = this.instructionDetails(targetRecipe);
		let instructionFormatted = instruction.map((steps, index) => <div key={index}><div>{steps}</div></div>)
		
		return(
		<div>
		<div className="ingredients-title">Ingredients</div>
      	<div className="ingredient-container">{ingredientsFormatted}</div>
      	<div className="content-divider"></div>
      	<div className="recipe-container">{instructionFormatted}</div>
		</div>
		)
	}

  render() {
    return (
      <div className="Recipe">
        <div className="recipe-content">
			<div>{this.staticRecipeDetails()}</div>
			<div>{this.dynamicRecipeDetails()}</div>

		</div>
      </div>
    );
  }
}

export default Recipe;
