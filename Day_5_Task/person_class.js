class Person {
  constructor(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  toString() {
    console.log(
      `${this.firstName} ${this.lastName} is ${this.age} years old. Gender is ${
        this.gender
      }. And, Interests in ${this.interests.join(", ")}.`
    );
  }
}

const person1 = new Person("John", "Row", 30, "male", [
  "reading",
  "traveling",
  "coding",
]);
person1.toString();
