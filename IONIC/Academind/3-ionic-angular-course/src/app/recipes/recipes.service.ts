import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe [] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5.jpg',
      ingredients: ['French Fries','Pork Meat','Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/microwave_spaghetti_44920_16x9.jpg',
      ingredients: ['Spaghetti','Meat','Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes]; //Retorna copia exacta del arreglo en un nuevo arreglo
  }

  getRecipe (recipeId: string){
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })}; // Con ... retorna un nuevo objeto con todas las propiedades
  }
}
