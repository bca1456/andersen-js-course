/* eslint-disable no-param-reassign */
import * as dnd from '../dnd/dnd';

// Возвращаем все ингредиенты
export function getAllIngredients(divId) {
  // const matches = new Array();
  const searchEles = Array.from(document.getElementById(divId).children);
  // fillIngredientArray(searchEles, matches);
  return searchEles;
}

// Установить все атрибуты для dragndrop
export function setAllDNDAttributes(divIngredient) {
  divIngredient.ondragstart = dnd.dragStart;
  divIngredient.ondragenter = dnd.dragEnter;
  divIngredient.ondragdrop = dnd.dragDrop;
  divIngredient.ondragover = dnd.dragOver;

  return divIngredient;
}
