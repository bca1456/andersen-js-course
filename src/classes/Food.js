import Item from './Item';

class Food extends Item {
  constructor(name, img, isEditable) {
    super(name, img);
    this.isEditable = isEditable;
  }
}

export default Food;
