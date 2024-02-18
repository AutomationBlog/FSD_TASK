/* 
Circle
----------------------
-radius:double = 1.0
-color:string = 'Red'
----------------------
+Circle()
+Circle(radius:double)
+Circle(radius: double, color: String)
    + gerRadius(): double
    + setRadius(radius: double): void
    + getColor(): String
    + setColor(color: String): void
    + toString(): String -------> Circle(radius: double, color: String)
    + getArea(); double
    +getCircumference(); double
 */

//Solution
class Circle {
  constructor(radius = 1.0, color = "Red") {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
  toString() {
    return `Circle(radius: ${this.radius}, color: ${this.color})`;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

let circle1 = new Circle(2.0, "Green");
console.log(circle1.toString());
console.log("------------------------------------------");

let circle2 = new Circle(5.4);
console.log(circle2.getRadius());
circle2.setColor("Yellow");
console.log(circle2.toString());
console.log("------------------------------------------");

let circle3 = new Circle(7.8);
console.log(circle3.toString());
console.log("Area ::: " + circle3.getArea());
console.log("------------------------------------------");

let circle4 = new Circle();
circle4.setRadius(3.23);
console.log(circle4.toString());
console.log("Circumference ::: " + circle4.getCircumference());
console.log("------------------------------------------");
