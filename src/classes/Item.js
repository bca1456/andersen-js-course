class Item {
  constructor(name, img) {
    this._name = name;
    this._img = img;
  }

  /* kek() {
    alert(`name:${this.name} img:${this.img}`);
  } */

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
}

export default Item;
