import './styles/main.css';
import Item from './classes/Item';
import Food from './classes/Food';

console.log('Hi');

const item = new Item('apple', `./img/apple.png`);
console.log(item);
const food = new Food('kebab', './img/kebab.png', true);
console.log(food);
