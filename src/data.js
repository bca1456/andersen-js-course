import Food from './classes/Food';
import milkSource from './img/milk.png';
import eggSource from './img/egg.jpg';
import cucumberSource from './img/cucumber.jpg';
import tomatoSource from './img/tomato.jpg';
import waterSource from './img/water.jpg';
import orangeSource from './img/orange.jpg';
// import Craft from './classes/Craft';
import Recept from './classes/Recept';
import receptSource from './img/recept.jpg';

/* import saladSource from './img/salad.jpg';
import lemonadeSource from './img/lemonade.jpg';
import omeletteSource from './img/omelette.jpg'; */

// Добавляем ингридиенты
const milk = new Food('milk', milkSource, true);
const egg = new Food('egg', eggSource, true);
const cucumber = new Food('cucumber', cucumberSource, true);
const tomato = new Food('tomato', tomatoSource, true);
const water = new Food('water', waterSource, true);
const orange = new Food('orange', orangeSource, true);

// Добавляем рецепты
const omelette = new Recept('omelette', receptSource, 'milk', 'egg');
const salad = new Recept('salad', receptSource, 'cucumber', 'tomato');
const lemonade = new Recept('lemonade', receptSource, 'water', 'orange');

export const elemsToCraft = [];
export const ingredients = [milk, egg, cucumber, tomato, water, orange];
export const recepts = [omelette, salad, lemonade];
