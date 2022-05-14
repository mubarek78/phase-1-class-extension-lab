// Your code here
class Polygon {
    constructor(arr) {
      this.arr = arr;
    }
  
    get countSides() {
      return this.arr.length;
    }
    get perimeter() {
      let result = 0;
      this.arr.forEach((num) => (result += num));
      return result;
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (
        this.arr[0] + this.arr[1] > this.arr[2] &&
        this.arr[0] + this.arr[2] > this.arr[1] &&
        this.arr[1] + this.arr[2] > this.arr[0]
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  class Square extends Polygon {
    get area() {
      return this.arr[0] * this.arr[1];
    }
  
    get isValid() {
      if (this.arr[0] + this.arr[1] === this.arr[2] + this.arr[3]) {
        return true;
      } else {
        return false;
      }
    }
  }