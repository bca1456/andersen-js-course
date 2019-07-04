import '../styles/index.css';

/* eslint-disable no-param-reassign */

// добавляем кнопки удаления на элементы листа
export function createDelButtons() {
  const liList = document.getElementsByTagName('li');
  const liArr = Array.from(liList);

  liArr.forEach(function(elem) {
    const button = document.createElement('button');
    const txt = document.createTextNode('\u271E');
    button.className = 'delete';
    button.appendChild(txt);

    elem.appendChild(button);
  });
}

// вешаем на каждую кнопку удаления событие
export function deleteLiElements() {
  const delList = document.getElementsByClassName('delete');
  const delArr = Array.from(delList);

  delArr.forEach(function(elem) {
    elem.onclick = function() {
      const div = this.parentElement;
      div.classList.add('stop-display');
    };
  });
}

export function doneLiElement() {
  const list = document.querySelector('ul');
  console.log(list);
  list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      console.log('q');
      e.target.classList.add('done');
    }
  });
}

createDelButtons();
deleteLiElements();
doneLiElement();

const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('inputID').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById('ulID').appendChild(li);
  }
  document.getElementById('inputID').value = '';

  createDelButtons();
});
