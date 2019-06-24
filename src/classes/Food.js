import Item from './Item';

class Food extends Item {
  constructor(name, img, isEditable) {
    super(name, img);
    this._isEditable = isEditable;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  get img() {
    return this._img;
  }

  set img(val) {
    this._img = val;
  }

  get isEditable() {
    return this._isEditable;
  }

  set isEditable(val) {
    this._isEditable = val;
  }
}

export default Food;
