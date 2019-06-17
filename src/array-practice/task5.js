/**
 * Реализовать функцию createGenerator в этом файле, и экспортировать ее.
 *
 * При каждом вызове метода .next() происходит возврат следующего значения из массива
 * Когда все элементы будут возвращены,
 * следующие вызовы метода .next() должны возвращать строку 'Complete!'
 *
 * const generator = createGenerator([1, '6', 3, 2]);
 * generator.next(); -> 1
 * generator.next(); -> '6'
 * generator.next(); -> 3
 * generator.next(); -> 2
 * generator.next(); -> 'Complete!'
 * generator.next(); -> 'Complete!'
 */
export class Generator {
  // counter = 666;

  constructor() {
    this.counter = 0;
  }

  createGenerator(arr) {
    this._arr = arr;
  }

  next() {
    if (this.counter < this._arr.length) {
      this.counter++;
      console.log(this._arr[this.counter - 1]);
      return this._arr[this.counter - 1];
    }
    this.counter++;
    console.log('Complete!');
    return 'Complete!';
  }
}
/* export function createGenerator(arr) {
  
  generator.next = function() {
    if (counter < arr.length - 1) {
      counter++;
      return arr[counter];
    }
    counter++;
    return 'Complete!';
  };
  return arr;
} */
