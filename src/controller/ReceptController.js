// import * as data from '../data';
import * as constants from '../constants';

export default class IngredientController {
  recepts = [];

  divRecepts = constants.divRecepts;

  // Возвращаем ингридиенты
  static getRecepts() {
    return this.recepts;
  }

  static setRecepts(arr) {
    this.recepts = arr;
  }

  // Возвращаем все рецепты
  static getAllRecepts(divId) {
    const searchRecepts = Array.from(document.getElementById(divId).children);
    console.log(`searchRecepts ${searchRecepts}`);
    this.setRecepts(searchRecepts);
    return searchRecepts;
  }

  // Устанавливаем новые индексы
  static setReceptIndexes(divId) {
    const allRecepts = this.getAllRecepts(divId);
    const newIndexesRecepts = allRecepts.map(function func(currentValue, index) {
      currentValue.setAttribute('id', `p${index}`);
      return currentValue;
    });
    return newIndexesRecepts;
  }

  static addReceptToHTML() {
    this.recepts.forEach(element => {
      // Создаем новый объект див для рецепта
      const newRecept = document.createElement('div');
      newRecept.classList.add('present_recept');
      // Картинка рецепта
      const receptImage = new Image();
      receptImage.src = element.img;
      receptImage.setAttribute('src', element.img);
      receptImage.setAttribute('width', '100px');
      receptImage.setAttribute('height', '100px');
      receptImage.setAttribute('border', '1px solid #fff');
      receptImage.setAttribute('box-shadow', '#180000 0 0 3px 0.5px');
      receptImage.setAttribute('display', 'block');
      // Добавляем картинку к ингредиенту
      newRecept.appendChild(receptImage);
      // Создаем спан
      const span = document.createElement('span');
      span.innerHTML = element.name;
      span.setAttribute('display', 'block');
      span.setAttribute('text-align', 'center');
      span.setAttribute('margin-top', '6px');
      // Добавляем спан к ингредиенту
      newRecept.appendChild(span);
      // Добавляем ингредиент в хтмл
      constants.divRecepts.appendChild(newRecept);
      // console.log(`newIngredient:${newIngredient}`);
    });
  }
}
