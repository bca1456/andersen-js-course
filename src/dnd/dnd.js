// Запускается, когда начинаем перетаскивать
export function dragStart(ev) {
  // eslint-disable-next-line no-param-reassign
  ev.dataTransfer.effectAllowed = 'move'; // тип перетаскивания
  ev.dataTransfer.setData('Text', ev.target.getAttribute('id'));
  console.log('qqq');
  console.log(`DRAG START ${ev.target.getAttribute('id')}`);
  // ev.dataTransfer.setDragImage(ev.target, 100, 100); // положение курсора
  return true;
}
// Запускается, когда перетаскиваемый элемент вышел за границы
export function dragEnter(ev) {
  console.log('www');
  console.log(`DRAG ENTER ${ev.target.getAttribute('id')}`);
  ev.preventDefault();
  return true;
}
// Когда курсор вышел за границы во время перетаскивания
export function dragOver(ev) {
  ev.preventDefault();
}
export function dragDrop(ev) {
  const data = ev.dataTransfer.getData('Text');
  console.log(document.getElementById(data));
  console.log(`DRAG DROP ${ev.target.id}`);
  ev.target.appendChild(document.getElementById(data));
  ev.stopPropagation();
  return false;
}
