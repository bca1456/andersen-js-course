/* eslint-disable no-alert */
import '../styles/index.css';

/* eslint-disable no-param-reassign */

/**
 * создание одной кнопки удаления
 */
function createDelButton() {
  const button = document.createElement('button');
  const txt = document.createTextNode('\u271E');
  button.className = 'delete';
  button.appendChild(txt);
  button.onclick = function() {
    const elem = this.parentElement;
    elem.classList.add('stop-display');
  };
  return button;
}
// добавляем кнопки удаления на элементы листа + вешаем события клика
export function createDelButtons() {
  const liList = document.getElementsByTagName('li');

  const liArr = Array.from(liList);
  liArr.forEach(function(elem) {
    elem.appendChild(createDelButton());
  });
}

//
export function doneLiElements() {
  const list = document.querySelector('ul');
  list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.add('done');
    }
  });
}

export function start() {
  createDelButtons();
  doneLiElements();

  const addBtn = document.getElementById('addBtn');

  addBtn.addEventListener('click', function() {
    const li = document.createElement('li');
    li.appendChild(createDelButton());
    const inputValue = document.getElementById('inputID').value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert('You must write something!');
    } else {
      document.getElementById('ulID').appendChild(li);
    }
    document.getElementById('inputID').value = '';
    fetch('http://localhost:3000/add').then(function(response) {
      console.log(response.headers.get('Content-Type'));
      console.log(response.headers.get('Date'));
      console.log(response.status);
      console.log(response.statusText);
    });
  });
}
