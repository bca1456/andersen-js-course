/* eslint-disable no-param-reassign */
import * as dnd from '../dnd/dnd';
import * as data from '../data';
import ingredientConst from '../constants';

export default class IngredientController {
  ingredients = [...data.ingredients];

  divIngredients = document.getElementById(ingredientConst);

  // Возвращаем ингридиенты
  static getIngredients() {
    return this.ingredients;
  }

  static setIngredients(arr) {
    this.ingredients = arr;
  }

  // Возвращаем все ингредиенты
  static getAllIngredients(divId) {
    // const matches = new Array();
    const searchEles = Array.from(document.getElementById(divId).children);
    // fillIngredientArray(searchEles, matches);
    return searchEles;
  }

  // Установить все атрибуты для dragndrop
  static setAllDNDAttributes(divIngredient) {
    divIngredient.ondragstart = dnd.dragStart;
    divIngredient.ondragenter = dnd.dragEnter;
    divIngredient.ondragdrop = dnd.dragDrop;
    divIngredient.ondragover = dnd.dragOver;

    return divIngredient;
  }

  /* static addIngredientsToHTML() {
    this.ingredients.forEach(element => {
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      const newIngredient = element;
    });
  } */
}
