import Food from './classes/Food';
// import Craft from './classes/Craft';

const milk = new Food('milk', './img/milk.jpg', true);
console.log(milk);
const egg = new Food('egg', './img/egg.jpg', true);
console.log(egg);
const cucumber = new Food('cucumber', './img/cucumber.jpg', true);
console.log(cucumber);
const tomato = new Food('tomato', './img/tomato.jpg', true);
console.log(tomato);
const water = new Food('water', './img/water.jpg', true);
console.log(water);
const orange = new Food('orange', './img/orange.jpg', true);
console.log(orange);

export const elemsToCraft = [];
export const ingredients = [milk, egg, cucumber, tomato, water, orange];
export const recepts = [];
