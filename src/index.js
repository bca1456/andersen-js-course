/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import ingredientConst from './constants';

import './styles/main.css';
// import Item from './classes/Item';
// import Food from './classes/Food';
// import Craft from './classes/Craft';
import IngredientController from './controller/IngredientController';
import * as TableController from './controller/TableController';
// import * as data from './data';

// const ingredient1 = document.getElementById('i1');

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
// Получаем все доступные ингредиенты
const allIngredients = IngredientController.getAllIngredients(ingredientConst);
console.log(allIngredients);

// Каждому ингредиенту добавляем атрибуты для днд
allIngredients.forEach(function(divIngredient, ingredientIndex) {
  console.log(`ingredientId: ${divIngredient.id}  index:${ingredientIndex}`);
  divIngredient = IngredientController.setAllDNDAttributes(divIngredient);
  // console.log(`ingredient:${ingredient}`);
});

// Получаем стол для крафта
let divTable = document.getElementById('table');
console.log(divTable);

// Добавляем столу  атрибуты для днд
divTable = TableController.setAllDNDAttributes(divTable);

/* const craft = new Craft(data.elemsToCraft);
craft.tryToCraft(); */
