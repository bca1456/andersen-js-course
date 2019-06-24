/* eslint-disable no-param-reassign */

import * as dnd from '../dnd/dnd';

// Установить все атрибуты для dragndrop
export function setAllDNDAttributes(divTable) {
  divTable.odragstart = dnd.dragStart;
  divTable.ondragenter = dnd.dragEnter;
  divTable.ondrop = dnd.dragDrop;
  divTable.ondragover = dnd.dragOver;

  return divTable;
}

export function q() {}
