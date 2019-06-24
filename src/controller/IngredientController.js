/* eslint-disable no-param-reassign */
import * as dnd from '../dnd/dnd';
// import * as data from '../data';
import * as constants from '../constants';

export default class IngredientController {
  ingredients = [];

  divIngredients = constants.divIngredients;

  // Возвращаем ингридиенты
  static getIngredients() {
    return this.ingredients;
  }

  static setIngredients(arr) {
    this.ingredients = arr;
  }

  // Возвращаем все ингредиенты
  static getAllIngredients(divId) {
    const searchIngredients = Array.from(document.getElementById(divId).children);
    // fillIngredientArray(searchEles, matches);
    return searchIngredients;
  }

  // Устанавливаем новые индексы
  static setIngredientIndexes(divId) {
    // const matches = new Array();
    // console.log(`getAllIngredients  divId: ${divId}`);
    const allIngredients = this.getAllIngredients(divId);
    const newIndexesIngredients = allIngredients.map(function func(currentValue, index) {
      currentValue.setAttribute('id', `i${index}`);
      return currentValue;
    });
    return newIndexesIngredients;
  }

  // Установить все атрибуты для dragndrop
  static setAllDNDAttributes(divIngredient) {
    divIngredient.ondragstart = dnd.dragStart;
    divIngredient.ondragenter = dnd.dragEnter;
    divIngredient.ondragdrop = dnd.dragDrop;
    divIngredient.ondragover = dnd.dragOver;

    return divIngredient;
  }

  static addIngredientsToHTML() {
    // console.log(this.ingredients);
    this.ingredients.forEach(element => {
      // Создаем новый объект див для ингредиентов
      const newIngredient = document.createElement('div');
      newIngredient.classList.add('present_ingredient');
      newIngredient.setAttribute('draggable', 'true');
      // Картинка ингредиента
      const ingredientImage = new Image();
      ingredientImage.src = element.img;
      // console.log(`addIngredientsToHTML element.img: ${element.img}`);
      /* const ingredientImage = document.createElement('img'); */
      ingredientImage.setAttribute('src', element.img);
      ingredientImage.setAttribute('width', '100px');
      ingredientImage.setAttribute('height', '100px');
      ingredientImage.setAttribute('border', '1px solid #fff');
      ingredientImage.setAttribute('box-shadow', '#180000 0 0 3px 0.5px');
      ingredientImage.setAttribute('display', 'block');
      // Добавляем картинку к ингредиенту
      newIngredient.appendChild(ingredientImage);
      // Создаем спан
      const span = document.createElement('span');
      span.innerHTML = element.name;
      span.setAttribute('display', 'block');
      span.setAttribute('text-align', 'center');
      span.setAttribute('margin-top', '6px');
      // Добавляем спан к ингредиенту
      newIngredient.appendChild(span);
      // Добавляем ингредиент в хтмл
      constants.divIngredients.appendChild(newIngredient);
      // console.log(`newIngredient:${newIngredient}`);
    });
  }
}
