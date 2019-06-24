/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import * as constants from './constants';

import './styles/main.css';
// import Item from './classes/Item';
// import Food from './classes/Food';
// import Craft from './classes/Craft';
import IngredientController from './controller/IngredientController';
import ReceptController from './controller/ReceptController';
import * as TableController from './controller/TableController';
import * as data from './data';

// const ingredient1 = document.getElementById('i1');

IngredientController.setIngredients([...data.ingredients]);

IngredientController.addIngredientsToHTML(); // Добавляем элементы из массива ингредиентов на хтмл
IngredientController.setIngredientIndexes(constants.ingredientConst); // Пересчитываем индексы ингредиентов

// Получаем все доступные ингредиенты
const allIngredients = IngredientController.getAllIngredients(constants.ingredientConst);
console.log(allIngredients);

// Каждому ингредиенту добавляем атрибуты для днд
allIngredients.forEach(function(divIngredient, ingredientIndex) {
  console.log(`ingredientId: ${divIngredient.id}  index:${ingredientIndex}`);
  divIngredient = IngredientController.setAllDNDAttributes(divIngredient);
  // console.log(`ingredient:${ingredient}`);
});

/* РЕЦЕПТЫ */
ReceptController.setRecepts([...data.recepts]);

ReceptController.addReceptToHTML(); // Добавляем элементы из массива рецептов на хтмл
ReceptController.setReceptIndexes(constants.receptConst); // Пересчитываем индексы рецептов

// Получаем все доступные рецепты
const allRecepts = ReceptController.getAllRecepts(constants.receptConst);
console.log(allRecepts);

/* const wrapper = document.querySelector('.wrapper'); // Первый элемент с таким именем
 wrapper.addEventListener('click', function(e) {
  if (e.target.closest('.wrapper')) {
    console.log('Clicked wrapper elem');
  } else if (e.target.closest(`.${constants.divIngredients}`)) {
    console.log('Clicked ingredients');
  } else if (e.target === constants.divRecepts) {
    console.log('Clicked recepts');
  } else if (e.target.parentNode.closest(`.${constants.divIngredients}`)) {
    console.log('Clicked 1 ingredient');
  }
}); */

// Получаем стол для крафта
let divTable = document.getElementById('table');
console.log(divTable);

// Добавляем столу  атрибуты для днд
divTable = TableController.setAllDNDAttributes(divTable);

/* const craft = new Craft(data.elemsToCraft);
craft.tryToCraft(); */

const buttonCraft = document.querySelector('.button');
buttonCraft.addEventListener('click', function() {
  const elementsOnCraftTable = Array.from(document.getElementById('craft_section').children);
  // Получаем индексы элементов на крафт столе
  const namesOfIngredientsOnCraftTable = elementsOnCraftTable.map(function(elem) {
    return elem.innerText;
  });
  console.log(namesOfIngredientsOnCraftTable);
  const allReceptsB = ReceptController.getAllRecepts(constants.receptConst);

  allReceptsB.forEach(function(elem) {
    console.log(`elem : ${elem}`);
    console.log(`elem.components : ${elem.components}`);
    if (elem.components.length === namesOfIngredientsOnCraftTable.length) {
      const elemComponentsCopy = elem.components.slice();
      const namesOfIngredientsOnCraftTableCopy = elementsOnCraftTable.slice();
      console.log(`elem copy: ${elemComponentsCopy}`);
      console.log(`namesOfIngredientsOnCraftTableCopy: ${namesOfIngredientsOnCraftTableCopy}`);
      const isEqualArrays = elemComponentsCopy
        .map(function(item) {
          const a = namesOfIngredientsOnCraftTableCopy.indexOf(item);
          if (a >= 0) {
            namesOfIngredientsOnCraftTableCopy.splice(a, 1);
            return true;
          }
          return false;
        })
        .some(Boolean);
      if (isEqualArrays) {
        alert(`Вы создали ${elem.name}`);
      } else {
        alert(`GGWP`);
      }
    } else {
      alert('Подумай лучше');
    }
  });
});
