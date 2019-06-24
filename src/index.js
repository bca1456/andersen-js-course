/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import ingredientConst from './constants';

import './styles/main.css';
import Item from './classes/Item';
import Food from './classes/Food';
import * as IngredientController from './controller/IngredientController';
import * as TableController from './controller/TableController';

const item = new Item('apple', `./img/apple.png`);
console.log(item);
const food = new Food('kebab', './img/kebab.png', true);
console.log(food);

// const ingridient1 = document.getElementById('i1');

const wrapper = document.querySelector('.wrapper'); // Первый элемент с таким именем
const divIngredients = document.getElementById(ingredientConst);

wrapper.addEventListener('click', function(e) {
  if (e.target === wrapper) {
    console.log('Clicked wrapper elem');
  } else if (e.target === divIngredients) {
    console.log('Clicked ingredients');
  } else if (e.target.parentNode === divIngredients) {
    console.log('Clicked One ingredient');
  } else {
    console.log('Vitalya - pidr');
  }
});

const allIngredients = IngredientController.getAllIngredients(ingredientConst);
console.log(allIngredients);

allIngredients.forEach(function(divIngredient, ingredientIndex) {
  console.log(`ingredientId: ${divIngredient.id}  index:${ingredientIndex}`);
  divIngredient = IngredientController.setAllDNDAttributes(divIngredient);
  // console.log(`ingredient:${ingredient}`);
});

let divTable = document.getElementById('table');
console.log(divTable);

divTable = TableController.setAllDNDAttributes(divTable);
