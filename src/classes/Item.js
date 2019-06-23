class Item {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }

  kek() {
    alert(`name:${this.name} img:${this.img}`);
  }
  /* get name() {
    return this.name;
  }

  set name(val) {
    this.name = val;
  }

  get img() {
    return this.img;
  }

  set img(val) {
    this.img = val;
  } */
}

export default Item;
