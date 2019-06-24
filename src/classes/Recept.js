import Item from './Item';

class Recept extends Item {
  constructor(name, img, ...components) {
    super(name, img);
    this._components = components;
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

  get components() {
    return this._components;
  }

  set components(val) {
    this._components = val;
  }
}

export default Recept;
